"use client";

import Link from "next/link";
import { ArrowRight, Eye, FileText, FolderOpen, Plus, TrendingUp } from "lucide-react";
import { useAdmin } from "@/components/admin/AdminProvider";

const bars = [38, 52, 43, 68, 57, 74, 66, 88, 72, 92, 78, 96];

export default function AdminDashboardPage() {
  const { posts } = useAdmin();
  const published = posts.filter((post) => post.status === "Published").length;
  const views = posts.reduce((sum, post) => sum + post.views, 0);
  const cards = [
    { label: "Total posts", value: posts.length, note: "+2 this month", icon: FileText, color: "bg-slate-50 text-slate-600" },
    { label: "Published", value: published, note: `${posts.length - published} drafts pending`, icon: FolderOpen, color: "bg-slate-50 text-slate-600" },
    { label: "Total views", value: views.toLocaleString(), note: "+18.2% vs last month", icon: Eye, color: "bg-slate-50 text-slate-600" },
    { label: "Engagement", value: "64.8%", note: "+5.4% vs last month", icon: TrendingUp, color: "bg-slate-50 text-slate-600" },
  ];
  return <div className="mx-auto max-w-[1500px]">
    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold text-brand-600">OVERVIEW</p><h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">Good morning, Waqas 👋</h1><p className="mt-2 text-slate-500">Here’s what’s happening with your content today.</p></div><Link href="/admin/blogs/new" className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 font-semibold text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700"><Plus className="h-5 w-5" />New blog post</Link></div>
    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{cards.map(({ label, value, note, icon: Icon, color }) => <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-start justify-between"><div><p className="text-sm font-medium text-slate-500">{label}</p><p className="mt-2 text-3xl font-bold">{value}</p></div><span className={`rounded-xl p-3 ${color}`}><Icon className="h-5 w-5" /></span></div><p className="mt-4 text-xs font-medium text-slate-500">{note}</p></div>)}</div>
    <div className="mt-6 grid gap-6 xl:grid-cols-[1.55fr_1fr]">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"><div className="flex items-center justify-between"><div><h2 className="text-lg font-bold">Content performance</h2><p className="mt-1 text-sm text-slate-500">Views across the last 12 months</p></div><select className="rounded-lg border border-slate-200 px-3 py-2 text-sm"><option>This year</option></select></div><div className="mt-8 flex h-64 items-end gap-2 border-b border-slate-100 sm:gap-4">{bars.map((height, i) => <div key={i} className="group flex h-full flex-1 items-end"><div style={{ height: `${height}%` }} className="w-full rounded-t-md bg-gradient-to-t from-brand-600 to-slate-400 opacity-80 transition group-hover:opacity-100" /></div>)}</div><div className="mt-3 flex justify-between text-[10px] text-slate-400 sm:text-xs">{["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => <span key={m}>{m}</span>)}</div></section>
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"><div className="flex items-center justify-between"><div><h2 className="text-lg font-bold">Recent posts</h2><p className="mt-1 text-sm text-slate-500">Latest content updates</p></div><Link href="/admin/blogs" className="text-sm font-semibold text-brand-600">View all</Link></div><div className="mt-5 divide-y divide-slate-100">{posts.slice(0,4).map(post => <Link href={`/admin/blogs/${post.id}/edit`} key={post.id} className="flex items-center gap-3 py-4"><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{post.title}</p><p className="mt-1 text-xs text-slate-500">{post.category} · {post.date}</p></div><span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${post.status === "Published" ? "bg-slate-50 text-slate-700" : "bg-slate-50 text-slate-700"}`}>{post.status}</span><ArrowRight className="h-4 w-4 text-slate-300" /></Link>)}</div></section>
    </div>
  </div>;
}
