"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { portfolioProjects } from "@/lib/portfolio";

export function HomeProjectsSlider() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [maxStart, setMaxStart] = useState(portfolioProjects.length - 1);
  const [autoPlay, setAutoPlay] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const goTo = useCallback((index: number) => {
    const node = track.current;
    const slide = node?.children[Math.max(0, Math.min(maxStart, index))] as HTMLElement | undefined;
    if (!node || !slide) return;
    node.scrollTo({ left: slide.offsetLeft, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }, [maxStart]);

  useEffect(() => {
    const node = track.current;
    if (!node) return;
    const observer = new ResizeObserver(() => {
      const card = node.firstElementChild as HTMLElement | null;
      if (!card) return;
      const gap = parseFloat(getComputedStyle(node).columnGap) || 0;
      const visible = Math.max(1, Math.round((node.clientWidth + gap) / (card.offsetWidth + gap)));
      const last = Math.max(0, portfolioProjects.length - visible);
      setMaxStart(last);
      let nearest = 0;
      let distance = Infinity;
      Array.from(node.children).slice(0, last + 1).forEach((child, index) => {
        const difference = Math.abs((child as HTMLElement).offsetLeft - node.scrollLeft);
        if (difference < distance) { distance = difference; nearest = index; }
      });
      setActive(nearest);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoPlay || hovered || focused || maxStart === 0) return;
    const timer = setInterval(() => {
      const node = track.current;
      if (!node || document.hidden || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const bounds = node.getBoundingClientRect();
      if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;
      goTo(active >= maxStart ? 0 : active + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [active, autoPlay, focused, goTo, hovered, maxStart]);

  function updateActive() {
    const node = track.current;
    if (!node) return;
    let nearest = 0;
    let distance = Infinity;
    Array.from(node.children).slice(0, maxStart + 1).forEach((child, index) => {
      const difference = Math.abs((child as HTMLElement).offsetLeft - node.scrollLeft);
      if (difference < distance) { distance = difference; nearest = index; }
    });
    setActive(nearest);
  }

  return <section id="projects" aria-label="Our projects" className="section-padding relative overflow-hidden"
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
    <div className="container-padded">
      <AnimateIn className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl"><p className="section-eyebrow">Our projects</p><h2 className="mt-3 section-heading">Ideas made into digital experiences.</h2><p className="section-subtext">Explore a selection of platforms, products, and brand experiences from our portfolio.</p></div>
        <Link href="/portfolio" className="inline-flex shrink-0 items-center gap-2 font-semibold text-slate-900 hover:underline dark:text-white">View all projects<ArrowUpRight className="h-4 w-4" /></Link>
      </AnimateIn>
      <div ref={track} onScroll={updateActive} tabIndex={0} aria-label="Project slides" aria-roledescription="carousel"
        onKeyDown={event => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); goTo(active + (event.key === "ArrowRight" ? 1 : -1)); } }}
        className="relative flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto overscroll-x-contain rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-brand-500 [&::-webkit-scrollbar]:hidden">
        {portfolioProjects.map((project, index) => <article key={project.slug} aria-label={project.title + ", " + (index + 1) + " of " + portfolioProjects.length} aria-roledescription="slide"
          className="flex min-w-0 shrink-0 basis-full snap-start flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft md:basis-[calc((100%_-_1.5rem)/2)] lg:basis-[calc((100%_-_3rem)/3)] dark:border-slate-700 dark:bg-surface-card">
          <div className="relative aspect-[16/10] min-w-0">
            <Image src={"/images/homepage/project-" + project.slug + ".jpg"} alt={project.title + " portfolio illustration"} fill sizes="(max-width: 768px) 95vw, (max-width: 1024px) 45vw, 30vw" className="object-cover" />
            <span className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1.5 text-xs font-semibold text-white">{project.category}</span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-white">{project.title}</h3>
            <p className="mt-4 flex-1 text-base leading-relaxed text-slate-600 dark:text-slate-400">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">{project.techStack.slice(0,3).map(tool=><span key={tool} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300">{tool}</span>)}</div>
            <Link href={"/portfolio/" + project.slug} className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-slate-900 hover:underline dark:text-white">Explore project<ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </article>)}
      </div>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
        <div className="flex items-center gap-1">{portfolioProjects.slice(0,maxStart+1).map((project,index)=><button key={project.slug} type="button" aria-label={"Show projects starting with " + project.title} aria-current={active===index ? "true" : undefined} onClick={()=>goTo(index)} className="flex h-8 w-8 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"><span className={"h-2 rounded-full transition-all " + (active===index ? "w-6 bg-brand-950 dark:bg-white" : "w-2 bg-slate-300 dark:bg-slate-600")} /></button>)}</div>
        <div className="flex items-center gap-2">
          <button type="button" aria-label={autoPlay ? "Pause automatic sliding" : "Resume automatic sliding"} aria-pressed={!autoPlay} onClick={()=>setAutoPlay(value=>!value)} className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white text-slate-800 dark:border-slate-600 dark:bg-surface-card dark:text-white">{autoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}</button>
          <button type="button" aria-label="Previous project" disabled={active===0} onClick={()=>goTo(active-1)} className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white text-slate-800 transition hover:border-brand-500 disabled:cursor-default disabled:opacity-35 dark:border-slate-600 dark:bg-surface-card dark:text-white"><ArrowLeft className="h-4 w-4" /></button>
          <button type="button" aria-label="Next project" disabled={active===maxStart} onClick={()=>goTo(active+1)} className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white text-slate-800 transition hover:border-brand-500 disabled:cursor-default disabled:opacity-35 dark:border-slate-600 dark:bg-surface-card dark:text-white"><ArrowRight className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  </section>;
}
