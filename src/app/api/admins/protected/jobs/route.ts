import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { ApiResponse } from "@/lib/utils/response";
import jobPostSchema from "@/lib/validations/jobPost";
import * as yup from "yup";
import { getYupErrorsUF } from "@/lib/utils/yup-errors";

// GET - List all job posts
export async function GET(req: NextRequest) {
  try {
    const adminId = req.headers.get("x-admin-id");
    
    if (!adminId) {
      return ApiResponse.unauthorized("Authentication required");
    }

    const jobs = await db.jobPost.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: { applications: true },
        },
      },
    });

    return ApiResponse.success("Jobs retrieved successfully", jobs);
  } catch (error) {
    return ApiResponse.serverError(error);
  }
}

// POST - Create new job post
export async function POST(req: NextRequest) {
  try {
    const adminId = req.headers.get("x-admin-id");
    
    if (!adminId) {
      return ApiResponse.unauthorized("Authentication required");
    }

    const body = await req.json();
    
    const data = await jobPostSchema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });

    const job = await db.jobPost.create({
      data: {
        ...data,
        adminId,
      },
    });

    return ApiResponse.success("Job post created successfully", job);
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      const errors = getYupErrorsUF(error);
      return ApiResponse.failed("Validation failed", errors);
    }
    return ApiResponse.serverError(error);
  }
}
