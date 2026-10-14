"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("admin@alaqa.example.com");
  const [password, setPassword] = useState("");

  useEffect(() => { fetch("/api/auth/me").then((response) => { if (response.ok) router.replace("/admin"); }); }, [router]);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to sign in.");
      router.push("/admin"); router.refresh();
    } catch (cause) { setError(cause instanceof Error ? cause.message : "Unable to sign in."); setLoading(false); }
  }

  return (
    <main className="relative grid min-h-screen overflow-hidden bg-slate-950 lg:grid-cols-2">
      <section className="relative hidden overflow-hidden bg-brand-gradient p-14 lg:flex lg:flex-col lg:justify-between">
        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-slate-400/20 blur-3xl" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-slate-300/15 blur-3xl" />
        <div className="relative flex items-center gap-3 text-white">
          <Image src="/images/alaqa-mark.png" alt="Alaqa" width={50} height={50} />
          <span className="text-2xl font-bold">Techi<span className="text-slate-300">fort</span></span>
        </div>
        <div className="relative max-w-lg">
          <div className="mb-7 inline-flex rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"><ShieldCheck className="h-8 w-8 text-slate-200" /></div>
          <h1 className="text-5xl font-bold leading-tight text-white">Your content.<br /><span className="text-slate-300">One powerful space.</span></h1>
          <p className="mt-6 text-lg leading-8 text-slate-100/75">Manage your articles, monitor performance, and keep the Alaqa story moving forward.</p>
        </div>
        <p className="relative text-sm text-slate-200/60">© 2026 Alaqa. Secure administration portal.</p>
      </section>

      <section className="relative flex items-center justify-center bg-slate-50 px-5 py-12">
        <div className="w-full max-w-md">
          <div className="mb-10 flex items-center gap-2 lg:hidden">
            <Image src="/images/alaqa-mark.png" alt="Alaqa" width={45} height={45} />
            <span className="text-xl font-bold text-slate-900">Alaqa</span>
          </div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[.22em] text-brand-600">Admin portal</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Welcome back</h2>
          <p className="mt-3 text-slate-500">Sign in to access your dashboard.</p>
          <form className="mt-9 space-y-5" onSubmit={submit}>
            <label className="block text-sm font-semibold text-slate-700">Email address
              <span className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/10"><Mail className="h-5 w-5 text-slate-400" /><input className="h-13 w-full bg-transparent py-3.5 outline-none" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></span>
            </label>
            <label className="block text-sm font-semibold text-slate-700">Password
              <span className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-500/10"><LockKeyhole className="h-5 w-5 text-slate-400" /><input className="h-13 w-full bg-transparent py-3.5 outline-none" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required /><button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-400">{showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}</button></span>
            </label>
            {error && <p className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">{error}</p>}
            <button disabled={loading} className="w-full rounded-xl bg-brand-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700 disabled:opacity-60">{loading ? "Signing in…" : "Sign in to dashboard"}</button>
          </form>
          <p className="mt-7 text-center text-xs text-slate-400">Use the administrator account configured for this CMS.</p>
        </div>
      </section>
    </main>
  );
}
