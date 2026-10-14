import { SignJWT, jwtVerify } from "jose";
import type { NextRequest } from "next/server";

export const authCookieName = "alaqa_admin_token";
export type AdminSession = { id: number; email: string; name: string };

function secret() {
  const value = process.env.AUTH_SECRET;
  if (!value || value.length < 32) throw new Error("AUTH_SECRET must contain at least 32 characters");
  return new TextEncoder().encode(value);
}

export async function createSessionToken(admin: AdminSession) {
  return new SignJWT(admin).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("8h").sign(secret());
}

export async function verifySessionToken(token?: string): Promise<AdminSession | null> {
  if (!token) return null;
  try { const { payload } = await jwtVerify(token, secret()); return { id: Number(payload.id), email: String(payload.email), name: String(payload.name) }; }
  catch { return null; }
}

export async function requireAdmin(request: NextRequest) {
  return verifySessionToken(request.cookies.get(authCookieName)?.value);
}
