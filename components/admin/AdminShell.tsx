"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BarChart3, Bell, ChevronDown, FileText, FolderTree, LayoutDashboard, LogOut, Menu, Search, Settings, X } from "lucide-react";

const links = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Blogs", href: "/admin/blogs", icon: FileText },
  { label: "Categories", href: "/admin/categories", icon: FolderTree },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [allowed, setAllowed] = useState(false);
  const [admin, setAdmin] = useState({ name: "Administrator", email: "" });

  useEffect(() => {
    fetch("/api/auth/me").then(async (response) => { if (!response.ok) router.replace("/admin/login"); else { const data=await response.json(); setAdmin(data.admin); setAllowed(true); } }).catch(() => router.replace("/admin/login"));
  }, [router]);

  async function logout() { await fetch("/api/auth/logout", { method: "POST" }); router.replace("/admin/login"); router.refresh(); }
  if (!allowed) return <div className="min-h-screen bg-slate-50" />;

  return (
    <div className="admin-panel min-h-screen bg-slate-50 text-slate-900">
      {open && <button className="fixed inset-0 z-30 bg-slate-950/45 lg:hidden" onClick={() => setOpen(false)} aria-label="Close menu" />}
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-slate-950 text-white shadow-xl transition-transform duration-300 lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <Link href="/admin" className="flex items-center gap-2"><Image src="/images/alaqa-mark.png" className="brightness-0 invert" alt="" width={42} height={42} /><span className="text-xl font-bold">Alaqa</span></Link>
          <button className="lg:hidden" onClick={() => setOpen(false)}><X className="h-5 w-5" /></button>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          <p className="px-3 pb-3 pt-2 text-[11px] font-bold uppercase tracking-[.18em] text-slate-500">Workspace</p>
          {links.map(({ label, href, icon: Icon }) => {
            const active = href === "/admin" ? pathname === href : pathname.startsWith(href);
            return <Link key={href} href={href} onClick={() => setOpen(false)} className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition ${active ? "bg-brand-600 text-white shadow-lg shadow-brand-600/20" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}><Icon className="h-5 w-5" />{label}</Link>;
          })}
          <p className="px-3 pb-3 pt-7 text-[11px] font-bold uppercase tracking-[.18em] text-slate-500">System</p>
          <Link href="/admin/settings" className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-slate-400 hover:bg-white/5 hover:text-white"><Settings className="h-5 w-5" />Settings</Link>
        </nav>
        <div className="border-t border-white/10 p-4"><button onClick={logout} className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-slate-400 hover:bg-slate-500/10 hover:text-slate-300"><LogOut className="h-5 w-5" />Sign out</button></div>
      </aside>
      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur sm:px-7">
          <div className="flex items-center gap-3"><button onClick={() => setOpen(true)} className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"><Menu className="h-6 w-6" /></button><div className="relative hidden sm:block"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input placeholder="Search anything…" className="w-56 rounded-xl bg-slate-100 py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-brand-500/20 xl:w-72" /></div></div>
          <div className="flex items-center gap-3"><button className="relative rounded-xl border border-slate-200 p-2.5 text-slate-500 hover:bg-slate-50"><Bell className="h-5 w-5" /><span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-brand-600 ring-2 ring-white" /></button><div className="h-9 w-px bg-slate-200" /><button className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 font-bold text-brand-700">{admin.name.split(" ").map(part=>part[0]).join("").slice(0,2).toUpperCase()}</span><span className="hidden text-left sm:block"><span className="block text-sm font-semibold">{admin.name}</span><span className="block max-w-40 truncate text-xs text-slate-500">{admin.email}</span></span><ChevronDown className="hidden h-4 w-4 text-slate-400 sm:block" /></button></div>
        </header>
        <main className="p-4 sm:p-7 xl:p-9">{children}</main>
      </div>
    </div>
  );
}
