import { NextResponse } from "next/server";

export class ApiResponse {
  static success(message: string, data?: unknown) {
    return NextResponse.json({ success: true, message, data }, { status: 200 });
  }

  static successWithAuth(message: string, token: string, expiration: number, data?: unknown) {
    const response = NextResponse.json(
      { success: true, message, data },
      { status: 200 }
    );
    
    // save token in HttpOnly cookie
    response.cookies.set("token", token, {
      httpOnly: true,        
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: expiration,    
      path: "/",
    });

    return response;
  }

  static failed(message: string, errors?: unknown) {
    return NextResponse.json({ success: false, message, errors }, { status: 400 });
  }

  static unauthorized(message: string) {
    return NextResponse.json({ success: false, message }, { status: 401 });
  }

  static forbidden(message: string) {
    return NextResponse.json({ success: false, message }, { status: 403 });
  }

  static notFound(message: string) {
    return NextResponse.json({ success: false, message }, { status: 404 });
  }

  static serverError(error: unknown) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}