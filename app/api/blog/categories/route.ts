import { NextResponse } from "next/server";
import { getPublicCategories } from "@/lib/server/public-posts";

export async function GET() {
  return NextResponse.json({ categories: await getPublicCategories() });
}
