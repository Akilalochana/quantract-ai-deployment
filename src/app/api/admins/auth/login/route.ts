import * as yup from "yup";
import bcrypt from "bcryptjs";
import adminSchema from "@/lib/validations/admin";
import { NextRequest } from "next/server";

import { ApiResponse } from "@/lib/utils/response";
import { db } from "@/lib/db";
import { expiration, generateAdminAuthToken } from "@/lib/utils/jwt";
import { getYupErrorsUF } from "@/lib/utils/yup-errors";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await adminSchema.pick(["email", "password"]).validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });

    const admin = await db.admin.findFirst({
      where: { email: data.email },
    });

    if (!admin) {
      return ApiResponse.notFound(
        "No account found with the provided email address."
      );
    }

    const isPasswordValid = await bcrypt.compare(data.password, admin.password);

    if (!isPasswordValid) {
      return ApiResponse.failed("You entered a wrong password.");
    }

    const token = await generateAdminAuthToken(admin);

     
    return ApiResponse.successWithAuth(
      "Welcome back, you’re all set and ready to go.",
      token,
      expiration,
      { admin }
    );
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      const errors = getYupErrorsUF(error);
      return ApiResponse.failed(
        "Provided some invalid details, please check and submit again.",
        errors
      );
    }
    return ApiResponse.serverError(error);
  }
}
