import { db } from "@/lib/db";
import { ApiResponse } from "@/lib/utils/response";

// GET - List all active job posts (public)
export async function GET() {
  try {
    const jobs = await db.jobPost.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        category: true,
        location: true,
        type: true,
        experience: true,
        description: true,
        requirements: true,
        createdAt: true,
      },
    });

    return ApiResponse.success("Jobs retrieved successfully", jobs);
  } catch (error) {
    return ApiResponse.serverError(error);
  }
}
