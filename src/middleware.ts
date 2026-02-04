import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  // Check if it's an admin route (except login)
  const isAdminRoute = pathname.startsWith("/admin") && pathname !== "/admin/login";
  const isProtectedApi = pathname.startsWith("/api/admins/protected");
  const isLoginPage = pathname === "/admin/login";

  // If user is on login page and has valid token, redirect to dashboard
  if (isLoginPage && token) {
    try {
      await jwtVerify(token, secretKey);
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    } catch {
      // Token invalid, let them stay on login page
    }
  }

  // If accessing protected routes, check token
  if (isAdminRoute || isProtectedApi) {
    if (!token) {
      if (isProtectedApi) {
        return NextResponse.json(
          { success: false, message: "Authentication required" },
          { status: 401 }
        );
      }
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    try {
      const { payload } = await jwtVerify(token, secretKey);

      // Add user info to headers for API routes
      const requestHeaders = new Headers(req.headers);
      requestHeaders.set("x-admin-id", payload.id as string);
      requestHeaders.set("x-admin-email", payload.email as string);

      return NextResponse.next({
        request: { headers: requestHeaders },
      });
    } catch {
      // Token invalid
      if (isProtectedApi) {
        return NextResponse.json(
          { success: false, message: "Invalid or expired token" },
          { status: 401 }
        );
      }
      
      // Clear invalid cookie and redirect
      const response = NextResponse.redirect(new URL("/admin/login", req.url));
      response.cookies.delete("token");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admins/protected/:path*",
  ],
};
