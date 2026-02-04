import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { ApiResponse } from "@/lib/utils/response";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET - Get single job post
export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const adminId = req.headers.get("x-admin-id");
    
    if (!adminId) {
      return ApiResponse.unauthorized("Authentication required");
    }

    const job = await db.jobPost.findUnique({
      where: { id },
      include: {
        applications: true,
        _count: {
          select: { applications: true },
        },
      },
    });

    if (!job) {
      return ApiResponse.notFound("Job post not found");
    }

    return ApiResponse.success("Job retrieved successfully", job);
  } catch (error) {
    return ApiResponse.serverError(error);
  }
}

// PUT - Update job post
export async function PUT(req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const adminId = req.headers.get("x-admin-id");
    
    if (!adminId) {
      return ApiResponse.unauthorized("Authentication required");
    }

    const body = await req.json();

    const existingJob = await db.jobPost.findUnique({
      where: { id },
    });

    if (!existingJob) {
      return ApiResponse.notFound("Job post not found");
    }

    const job = await db.jobPost.update({
      where: { id },
      data: body,
    });

    return ApiResponse.success("Job post updated successfully", job);
  } catch (error) {
    return ApiResponse.serverError(error);
  }
}

// DELETE - Delete job post
export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const adminId = req.headers.get("x-admin-id");
    
    if (!adminId) {
      return ApiResponse.unauthorized("Authentication required");
    }

    const existingJob = await db.jobPost.findUnique({
      where: { id },
    });

    if (!existingJob) {
      return ApiResponse.notFound("Job post not found");
    }

    await db.jobPost.delete({
      where: { id },
    });

    return ApiResponse.success("Job post deleted successfully");
  } catch (error) {
    return ApiResponse.serverError(error);
  }
}
