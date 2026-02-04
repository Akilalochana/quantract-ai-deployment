import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: filePath } = await params;
    const fullPath = path.join(process.cwd(), "uploads", ...filePath);

    // Security check - prevent path traversal
    const uploadsBase = path.join(process.cwd(), "uploads");
    const resolvedPath = path.resolve(fullPath);
    if (!resolvedPath.startsWith(uploadsBase)) {
      return NextResponse.json(
        { success: false, message: "Access denied" },
        { status: 403 }
      );
    }

    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json(
        { success: false, message: "File not found" },
        { status: 404 }
      );
    }

    // Read file
    const fileBuffer = await fs.promises.readFile(fullPath);
    
    // Determine content type
    const ext = path.extname(fullPath).toLowerCase();
    const contentTypes: Record<string, string> = {
      ".pdf": "application/pdf",
      ".doc": "application/msword",
      ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
    };
    
    const contentType = contentTypes[ext] || "application/octet-stream";

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `inline; filename="${path.basename(fullPath)}"`,
      },
    });
  } catch (error) {
    console.error("Error serving file:", error);
    return NextResponse.json(
      { success: false, message: "Failed to serve file" },
      { status: 500 }
    );
  }
}
