import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/server/auth";
export async function GET(request: NextRequest) { const admin = await requireAdmin(request); return admin ? NextResponse.json({ admin }) : NextResponse.json({ message: "Unauthorized" }, { status: 401 }); }
