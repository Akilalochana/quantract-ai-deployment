import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { ApiResponse } from "@/lib/utils/response";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// PUT - Update application status
export async function PUT(req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const adminId = req.headers.get("x-admin-id");
    
    if (!adminId) {
      return ApiResponse.unauthorized("Authentication required");
    }

    const body = await req.json();

    const existingApp = await db.jobApplication.findUnique({
      where: { id },
    });

    if (!existingApp) {
      return ApiResponse.notFound("Application not found");
    }

    const application = await db.jobApplication.update({
      where: { id },
      data: { status: body.status },
    });

    return ApiResponse.success("Application updated successfully", application);
  } catch (error) {
    return ApiResponse.serverError(error);
  }
}
