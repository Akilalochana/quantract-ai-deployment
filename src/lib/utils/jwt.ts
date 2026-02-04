
import { SignJWT, jwtVerify } from "jose";

// Secret key - .env file එකේ තියාගන්න
export const secretKey = new TextEncoder().encode(
  process.env.JWT_SECRET_KEY 
);

// Token expire time (7 days)
export const expiration = 60 * 60 * 24 * 7; // seconds

export interface Payload {
  id: string;
  email: string;
}

// Token generate කරන function
export async function generateAdminAuthToken(admin: { id: string; email: string }) {
  const token = await new SignJWT({ 
    id: admin.id, 
    email: admin.email 
  })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(`${expiration}s`)
    .sign(secretKey);

  return token;
}

// Token verify කරන function
export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload as unknown as Payload;
  } catch {
    return null;
  }
}