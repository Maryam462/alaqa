"use client";
import { useParams } from "next/navigation";
import { BlogEditor } from "@/components/admin/BlogEditor";
import { useAdmin } from "@/components/admin/AdminProvider";
export default function EditBlogPage() { const { id } = useParams<{ id: string }>(); const { posts, ready } = useAdmin(); const post = posts.find(item => item.id === id); if (!ready) return null; return post ? <BlogEditor post={post} /> : <div className="rounded-2xl bg-white p-10 text-center">Post not found.</div>; }
