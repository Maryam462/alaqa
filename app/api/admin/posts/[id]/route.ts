import { NextRequest, NextResponse } from "next/server";
import type { ResultSetHeader } from "mysql2";
import { db, queryRows } from "@/lib/server/db";
import { requireAdmin } from "@/lib/server/auth";
import { PostRow, serializePost } from "@/lib/server/posts";
import type { AdminPost } from "@/lib/admin";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) { if (!(await requireAdmin(request))) return NextResponse.json({ message: "Unauthorized" }, { status: 401 }); const rows = await queryRows<PostRow[]>("SELECT * FROM blog_posts WHERE id = ? LIMIT 1", [(await params).id]); return rows[0] ? NextResponse.json({ post: serializePost(rows[0]) }) : NextResponse.json({ message: "Post not found." }, { status: 404 }); }
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await requireAdmin(request))) return NextResponse.json({ message: "Unauthorized" }, { status: 401 }); const post = await request.json() as AdminPost;
  if (!post.title?.trim() || !post.slug?.trim()) return NextResponse.json({ message: "Title and slug are required." }, { status: 400 });
  try { const [result] = await db.execute<ResultSetHeader>("UPDATE blog_posts SET title=?, slug=?, excerpt=?, content=?, category=?, featured_image=?, featured_image_alt=?, author=?, status=?, visibility=?, publish_date=?, views=?, tags=?, seo_title=?, seo_description=?, allow_comments=? WHERE id=?", [post.title.trim(), post.slug.trim(), post.excerpt || "", post.content || "", post.category, post.image || null, post.featuredImageAlt || null, post.author, post.status, post.visibility || "Public", post.date, post.views || 0, JSON.stringify(post.tags || []), post.seoTitle || null, post.seoDescription || null, post.allowComments !== false, (await params).id]); if (!result.affectedRows) return NextResponse.json({ message: "Post not found." }, { status: 404 }); const rows = await queryRows<PostRow[]>("SELECT * FROM blog_posts WHERE id = ?", [(await params).id]); return NextResponse.json({ post: serializePost(rows[0]) }); }
  catch (error: unknown) { const duplicate = typeof error === "object" && error !== null && "code" in error && error.code === "ER_DUP_ENTRY"; return NextResponse.json({ message: duplicate ? "That URL slug is already in use." : "Unable to update post." }, { status: duplicate ? 409 : 500 }); }
}
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) { if (!(await requireAdmin(request))) return NextResponse.json({ message: "Unauthorized" }, { status: 401 }); const [result] = await db.execute<ResultSetHeader>("DELETE FROM blog_posts WHERE id = ?", [(await params).id]); return result.affectedRows ? NextResponse.json({ success: true }) : NextResponse.json({ message: "Post not found." }, { status: 404 }); }
