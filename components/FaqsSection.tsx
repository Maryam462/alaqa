"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { faqs } from "@/lib/faqs";

const featuredIds = ["general-services", "general-customize", "tech-stack", "pricing-cost", "pricing-contracts", "tech-support"];
const featuredFaqs = featuredIds.map(id => faqs.find(faq => faq.id === id)).filter(faq => faq !== undefined);

export function FaqsSection() {
  return <section id="faqs" className="section-padding relative border-t border-slate-200 dark:border-slate-800">
    <div className="container-padded grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <AnimateIn>
        <p className="section-eyebrow">Frequently asked questions</p>
        <h2 className="mt-3 section-heading">A little clarity before we begin.</h2>
        <p className="section-subtext">Answers to the questions we hear about projects, pricing, technology, and ongoing support.</p>
        <Link href="/faqs" className="mt-7 inline-flex items-center gap-2 font-semibold text-slate-900 hover:underline dark:text-white">Explore all FAQs<ArrowUpRight className="h-4 w-4" /></Link>
      </AnimateIn>
      <AnimateIn className="space-y-3">
        {featuredFaqs.map(faq => <details key={faq.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white/75 transition open:border-slate-400 dark:border-slate-700 dark:bg-surface-card/70 dark:open:border-slate-500">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-base font-semibold text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500 sm:px-6 dark:text-white [&::-webkit-details-marker]:hidden">
            {faq.question}<ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition group-open:rotate-180 dark:text-slate-400" />
          </summary>
          <p className="border-t border-slate-200 px-5 py-5 text-base leading-relaxed text-slate-600 sm:px-6 dark:border-slate-700 dark:text-slate-300">{faq.answer}</p>
        </details>)}
      </AnimateIn>
    </div>
  </section>;
}
