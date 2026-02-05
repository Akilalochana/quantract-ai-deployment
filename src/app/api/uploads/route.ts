import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file provided" },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ["application/pdf"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, message: "Only PDF files are allowed" },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { success: false, message: "File size must be less than 5MB" },
        { status: 400 }
      );
    }

    // Get token from environment
    const token = process.env.BLOB_READ_WRITE_TOKEN || process.env.quantractai_READ_WRITE_TOKEN;
    
    if (!token) {
      console.error("No blob token found in environment");
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    // Generate unique filename
    const fileExtension = file.name.split(".").pop() || "pdf";
    const uniqueFilename = `resumes/${uuidv4()}.${fileExtension}`;

    // Upload to Vercel Blob with explicit token
    const blob = await put(uniqueFilename, file, {
      access: "public",
      token: token,
    });

    return NextResponse.json({
      success: true,
      message: "File uploaded successfully",
      data: {
        filename: uniqueFilename,
        originalName: file.name,
        url: blob.url,
        size: file.size,
      },
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { success: false, message: "Failed to upload file" },
      { status: 500 }
    );
  }
}
