"use client";
import Link from "next/link";
import { Target } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

export function MissionVision() {
  return <section className="section-padding relative overflow-hidden !pt-0"><div className="container-padded relative z-10"><AnimateIn><article className="group glass-card mx-auto max-w-5xl p-6 transition-all duration-300 hover:border-brand-500/50 hover:shadow-glow sm:p-8"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-600 dark:text-brand-400"><Target className="h-6 w-6" /></div><h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Our Purpose, in Practice</h2><div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400"><p>We help service businesses run on technology that fits how they actually work — scalable, secure, and easy for your team to use day to day. Whether you&apos;re an 11-person clinic or a 50-person consultancy, you get the same process and attention.</p><p>We want to be the team growing service businesses call first when they need to build something — not because we&apos;re the biggest agency, but because we understand the business behind the brief.</p></div><Link href="/industries" className="mt-5 inline-flex font-semibold text-brand-600 hover:underline dark:text-brand-400">See the industries we work with →</Link></article></AnimateIn></div></section>;
}
