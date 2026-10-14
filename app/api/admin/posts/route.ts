import { NextRequest, NextResponse } from "next/server";
import type { ResultSetHeader } from "mysql2";
import { db, queryRows } from "@/lib/server/db";
import { requireAdmin } from "@/lib/server/auth";
import { PostRow, serializePost } from "@/lib/server/posts";
import type { AdminPost } from "@/lib/admin";

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  const rows = await queryRows<PostRow[]>("SELECT * FROM blog_posts ORDER BY publish_date DESC, id DESC");
  return NextResponse.json({ posts: rows.map(serializePost) });
}
export async function POST(request: NextRequest) {
  if (!(await requireAdmin(request))) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  const post = await request.json() as AdminPost;
  if (!post.title?.trim() || !post.slug?.trim()) return NextResponse.json({ message: "Title and slug are required." }, { status: 400 });
  try {
    const [result] = await db.execute<ResultSetHeader>("INSERT INTO blog_posts (title, slug, excerpt, content, category, featured_image, featured_image_alt, author, status, visibility, publish_date, views, tags, seo_title, seo_description, allow_comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [post.title.trim(), post.slug.trim(), post.excerpt || "", post.content || "", post.category || "Development", post.image || null, post.featuredImageAlt || null, post.author || "Alaqa Team", post.status || "Draft", post.visibility || "Public", post.date, post.views || 0, JSON.stringify(post.tags || []), post.seoTitle || null, post.seoDescription || null, post.allowComments !== false]);
    const rows = await queryRows<PostRow[]>("SELECT * FROM blog_posts WHERE id = ?", [result.insertId]);
    return NextResponse.json({ post: serializePost(rows[0]) }, { status: 201 });
  } catch (error: unknown) { const duplicate = typeof error === "object" && error !== null && "code" in error && error.code === "ER_DUP_ENTRY"; return NextResponse.json({ message: duplicate ? "That URL slug is already in use." : "Unable to create post." }, { status: duplicate ? 409 : 500 }); }
}
