import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { ApiResponse } from "@/lib/utils/response";
import jobApplicationSchema from "@/lib/validations/jobApplication";
import * as yup from "yup";
import { getYupErrorsUF } from "@/lib/utils/yup-errors";

// POST - Submit job application (public)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const data = await jobApplicationSchema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });

    // Check if job post exists and is active
    const jobPost = await db.jobPost.findUnique({
      where: { id: data.jobPostId },
    });

    if (!jobPost) {
      return ApiResponse.notFound("Job post not found");
    }

    if (!jobPost.isActive) {
      return ApiResponse.failed("This job is no longer accepting applications");
    }

    // Check for duplicate application
    const existingApplication = await db.jobApplication.findFirst({
      where: {
        email: data.email,
        jobPostId: data.jobPostId,
      },
    });

    if (existingApplication) {
      return ApiResponse.failed("You have already applied for this position");
    }

    const application = await db.jobApplication.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        resumeUrl: data.resumeUrl || null,
        coverLetter: data.coverLetter || null,
        jobPostId: data.jobPostId,
      },
    });

    return ApiResponse.success("Application submitted successfully! We'll be in touch soon.", application);
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      const errors = getYupErrorsUF(error);
      return ApiResponse.failed("Please check your information", errors);
    }
    return ApiResponse.serverError(error);
  }
}
