import { NextResponse } from "next/server";
import { getPublicPost } from "@/lib/server/public-posts";
export async function GET(_:Request,{params}:{params:Promise<{slug:string}>}){const post=await getPublicPost((await params).slug);return post?NextResponse.json({post}):NextResponse.json({message:"Article not found."},{status:404});}
