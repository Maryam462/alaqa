import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import type { RowDataPacket } from "mysql2";
import { queryRows } from "@/lib/server/db";
import { authCookieName, createSessionToken } from "@/lib/server/auth";

interface AdminRow extends RowDataPacket { id: number; name: string; email: string; password_hash: string }
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    if (typeof email !== "string" || typeof password !== "string") return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
    const admins = await queryRows<AdminRow[]>("SELECT id, name, email, password_hash FROM admin_users WHERE email = ? LIMIT 1", [email.trim().toLowerCase()]);
    const admin = admins[0];
    if (!admin || !(await bcrypt.compare(password, admin.password_hash))) return NextResponse.json({ message: "Incorrect email or password." }, { status: 401 });
    const token = await createSessionToken({ id: admin.id, name: admin.name, email: admin.email });
    const response = NextResponse.json({ admin: { id: admin.id, name: admin.name, email: admin.email } });
    response.cookies.set(authCookieName, token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 60 * 60 * 8 });
    return response;
  } catch (error) { console.error("Login error", error); return NextResponse.json({ message: "Unable to sign in. Check the database configuration." }, { status: 500 }); }
}
