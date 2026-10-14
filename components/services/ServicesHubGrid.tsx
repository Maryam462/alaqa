"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { serviceIconMap } from "@/components/services/serviceIcons";
import { servicePages } from "@/lib/services";
import { cn } from "@/lib/utils";

const core = ["ai-solutions", "web-development", "mobile-app-development", "seo", "digital-marketing", "graphic-designing", "content-writing"];
const specialist = ["blockchain-development", "game-development"];
const copy: Record<string, string> = {
  "ai-solutions": "Chatbots, workflow automation, and custom AI tools that cut manual work and help your team make faster decisions.",
  "web-development": "Custom, fast websites and web apps built to convert visitors and grow with your business — not a template stretched to fit.",
  "mobile-app-development": "Native and cross-platform apps with clean UX and dependable backends, built for how your customers actually use them.",
  seo: "SEO that gets the right people to your site — the ones already searching for what you offer — and turns that traffic into leads.",
  "digital-marketing": "Social, content, and paid campaigns built around your actual sales cycle, not vanity metrics.",
  "graphic-designing": "Brand identity, UI design, and marketing creative that look professional and build trust fast.",
  "content-writing": "Website copy, blog posts, and SEO content that sound like a real person wrote them — because we did.",
  "blockchain-development": "Smart contracts and blockchain integrations for businesses that need them, built with security as the priority.",
  "game-development": "2D/3D games built for real gameplay and solid performance across platforms.",
};

function ServiceCards({ slugs }: { slugs: string[] }) {
  return <>{slugs.map((slug, i) => {
    const service = servicePages.find((item) => item.slug === slug);
    if (!service) return null;
    const Icon = serviceIconMap[service.icon] ?? serviceIconMap.Code2;
    const featured = slug === "ai-solutions";
    const card = <article className={cn("group flex h-full flex-col transition-all duration-300", featured ? "featured-service-inner hover:-translate-y-1.5" : "glass-card p-5 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-glow sm:p-6")}>
      {featured && <span className="mb-3 inline-flex w-fit rounded-full bg-brand-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-glow">Featured</span>}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-600 transition-all group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-glow dark:text-brand-400"><Icon className="h-6 w-6" /></div>
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">{service.category}</p>
      <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
      <p className="mt-2 flex-1 text-base leading-relaxed text-slate-600 dark:text-slate-400">{copy[slug]}</p>
      <Link href={`/service/${slug}`} className="link-underline mt-5 inline-flex items-center gap-1.5 text-base font-semibold text-brand-600 dark:text-brand-400">Learn More<ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></Link>
      {/* TODO: replace with the relevant case-study URL when available. */}
      <Link href="/portfolio" className="mt-2 text-sm font-medium text-slate-400 transition hover:text-brand-600">See how we&apos;ve done this</Link>
    </article>;
    return <AnimateIn key={slug} delay={Math.min(i * 0.04, 0.28)}>{featured ? <div className="featured-service h-full">{card}</div> : card}</AnimateIn>;
  })}</>;
}

export function ServicesHubGrid() {
  return <section className="section-padding relative overflow-hidden !pt-10"><div className="container-padded relative z-10">
    <h2 className="section-heading">What We Do</h2>
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><ServiceCards slugs={core} /></div>
    <div className="mt-16 border-t border-slate-200 pt-12 dark:border-slate-700"><h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Specialist Services</h2><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><ServiceCards slugs={specialist} /></div></div>
    <p className="mt-12 text-center text-base text-slate-600 dark:text-slate-400">See how these services support businesses across our <Link href="/industries" className="font-semibold text-brand-600 hover:underline dark:text-brand-400">industries</Link>.</p>
  </div></section>;
}
