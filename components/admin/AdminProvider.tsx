"use client";
import { createContext, useContext, useEffect, useState } from "react";
import type { AdminPost } from "@/lib/admin";
type Value = { posts: AdminPost[]; ready: boolean; error: string; savePost: (post: AdminPost) => Promise<AdminPost>; deletePost: (id: string) => Promise<void>; refreshPosts: () => Promise<void> };
const AdminContext = createContext<Value | null>(null);
export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [posts,setPosts]=useState<AdminPost[]>([]); const [ready,setReady]=useState(false); const [error,setError]=useState("");
  async function refreshPosts(){setError("");try{const response=await fetch("/api/admin/posts",{cache:"no-store"});if(!response.ok)throw new Error(response.status===401?"Your session expired. Please sign in again.":"Unable to load posts.");const data=await response.json();setPosts(data.posts);}catch(cause){setError(cause instanceof Error?cause.message:"Unable to load posts.");}finally{setReady(true);}}
  useEffect(()=>{void refreshPosts();},[]);
  async function savePost(post:AdminPost){const exists=posts.some(item=>item.id===post.id);const response=await fetch(exists?`/api/admin/posts/${post.id}`:"/api/admin/posts",{method:exists?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(post)});const data=await response.json();if(!response.ok)throw new Error(data.message||"Unable to save post.");setPosts(current=>exists?current.map(item=>item.id===post.id?data.post:item):[data.post,...current]);return data.post as AdminPost;}
  async function deletePost(id:string){const response=await fetch(`/api/admin/posts/${id}`,{method:"DELETE"});const data=await response.json();if(!response.ok)throw new Error(data.message||"Unable to delete post.");setPosts(current=>current.filter(post=>post.id!==id));}
  return <AdminContext.Provider value={{posts,ready,error,savePost,deletePost,refreshPosts}}>{children}</AdminContext.Provider>;
}
export function useAdmin(){const value=useContext(AdminContext);if(!value)throw new Error("useAdmin must be used inside AdminProvider");return value;}
