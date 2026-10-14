"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { portfolioProjects } from "@/lib/portfolio";

export function HomeProjectsSlider() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function goTo(index: number) {
    const node = track.current;
    const slide = node?.children[index] as HTMLElement | undefined;
    if (!node || !slide) return;
    node.scrollTo({ left: slide.offsetLeft, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  function updateActive() {
    const node = track.current;
    if (!node) return;
    let nearest = 0;
    let distance = Infinity;
    Array.from(node.children).forEach((child, index) => {
      const difference = Math.abs((child as HTMLElement).offsetLeft - node.scrollLeft);
      if (difference < distance) { distance = difference; nearest = index; }
    });
    setActive(nearest);
  }

  return <section id="projects" aria-label="Our projects" className="section-padding relative overflow-hidden">
    <div className="container-padded">
      <AnimateIn className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl"><p className="section-eyebrow">Our projects</p><h2 className="mt-3 section-heading">Ideas made into digital experiences.</h2><p className="section-subtext">Explore a selection of platforms, products, and brand experiences from our portfolio.</p></div>
        <Link href="/portfolio" className="inline-flex shrink-0 items-center gap-2 font-semibold text-slate-900 hover:underline dark:text-white">View all projects<ArrowUpRight className="h-4 w-4" /></Link>
      </AnimateIn>
      <div ref={track} onScroll={updateActive} tabIndex={0} aria-label="Project slides" aria-roledescription="carousel"
        onKeyDown={event => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); goTo(Math.max(0, Math.min(portfolioProjects.length - 1, active + (event.key === "ArrowRight" ? 1 : -1)))); } }}
        className="relative flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain rounded-[2rem] outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-brand-500 [&::-webkit-scrollbar]:hidden">
        {portfolioProjects.map((project, index) => <article key={project.slug} aria-label={project.title + ", " + (index + 1) + " of " + portfolioProjects.length} aria-roledescription="slide"
          className="grid min-w-0 shrink-0 basis-full snap-start overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft md:grid-cols-[1.1fr_1fr] dark:border-slate-700 dark:bg-surface-card">
          <div className="relative aspect-[16/10] min-w-0 md:aspect-auto md:min-h-[390px]">
            <Image src={"/images/homepage/project-" + project.slug + ".jpg"} alt={project.title + " portfolio illustration"} fill sizes="(max-width: 768px) 95vw, 50vw" className="object-cover" />
            <span className="absolute left-5 top-5 rounded-full bg-black/65 px-3 py-1.5 text-xs font-semibold text-white">Featured project</span>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{project.categories.join(" / ")}</p>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl dark:text-white">{project.title}</h3>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">{project.techStack.slice(0,3).map(tool=><span key={tool} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300">{tool}</span>)}</div>
            <Link href={"/portfolio/" + project.slug} className="mt-8 inline-flex items-center gap-2 self-start rounded-xl bg-brand-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800 dark:bg-white dark:text-brand-950 dark:hover:bg-slate-200">Explore project<ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </article>)}
      </div>
      <div className="mt-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">{portfolioProjects.map((project,index)=><button key={project.slug} type="button" aria-label={"Show project " + (index + 1) + ": " + project.title} aria-current={active === index ? "true" : undefined} onClick={()=>goTo(index)} className="flex h-8 w-8 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"><span className={"h-2 rounded-full transition-all " + (active===index ? "w-6 bg-brand-950 dark:bg-white" : "w-2 bg-slate-300 dark:bg-slate-600")} /></button>)}</div>
        <div className="flex items-center gap-3">
          <p aria-live="polite" aria-atomic="true" className="hidden text-sm tabular-nums text-slate-500 sm:block">{String(active+1).padStart(2,"0")} / {String(portfolioProjects.length).padStart(2,"0")}</p>
          <button type="button" aria-label="Previous project" disabled={active===0} onClick={()=>goTo(active-1)} className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white text-slate-800 transition hover:border-brand-500 disabled:cursor-default disabled:opacity-35 dark:border-slate-600 dark:bg-surface-card dark:text-white"><ArrowLeft className="h-4 w-4" /></button>
          <button type="button" aria-label="Next project" disabled={active===portfolioProjects.length-1} onClick={()=>goTo(active+1)} className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white text-slate-800 transition hover:border-brand-500 disabled:cursor-default disabled:opacity-35 dark:border-slate-600 dark:bg-surface-card dark:text-white"><ArrowRight className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  </section>;
}
