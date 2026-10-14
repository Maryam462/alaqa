import { NextRequest, NextResponse } from "next/server";
import { getPublicPosts } from "@/lib/server/public-posts";
export async function GET(request:NextRequest){const category=request.nextUrl.searchParams.get("category");const query=request.nextUrl.searchParams.get("q")?.toLowerCase();let posts=await getPublicPosts();if(category)posts=posts.filter(post=>post.categorySlug===category||post.category===category);if(query)posts=posts.filter(post=>`${post.title} ${post.excerpt}`.toLowerCase().includes(query));return NextResponse.json({posts});}
