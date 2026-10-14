"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BrainCircuit, ChartNoAxesCombined, Code2, Palette } from "lucide-react";

const services = [
  { title: "Web Development", Icon: Code2, href: "/service/web-development", position: "left-[3%] top-[18%]", delay: "0s" },
  { title: "AI Solutions", Icon: BrainCircuit, href: "/service/ai-solutions", position: "right-[16%] top-[5%]", delay: "-1.5s" },
  { title: "Business Automation", Icon: ChartNoAxesCombined, href: "/service/ai-solutions", position: "right-[1%] top-[49%]", delay: "-3s" },
  { title: "Digital Experiences", Icon: Palette, href: "/service/graphic-designing", position: "bottom-[8%] left-[5%]", delay: "-4.5s" },
];

function HeroGlobe() {
  return <div className="relative mx-auto aspect-square w-full max-w-[260px] sm:max-w-[400px] lg:max-w-[570px]" aria-label="Explore Alaqa services">
    <div aria-hidden className="absolute inset-[8%] rounded-full bg-[#598af6]/10 blur-3xl" />
    <svg aria-hidden viewBox="0 0 600 600" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
      <defs><linearGradient id="hero-orbit-line" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#97b7ff" stopOpacity="0.6" /><stop offset="1" stopColor="#97b7ff" stopOpacity="0.06" /></linearGradient></defs>
      <ellipse cx="300" cy="300" rx="288" ry="190" transform="rotate(-40 300 300)" fill="none" stroke="url(#hero-orbit-line)" />
      <ellipse cx="300" cy="300" rx="245" ry="280" transform="rotate(28 300 300)" fill="none" stroke="#91adf2" strokeOpacity="0.12" />
      {[{x:30,y:290,r:5},{x:367,y:42,r:3},{x:556,y:255,r:2.5},{x:352,y:560,r:4},{x:142,y:78,r:2}].map(({x,y,r})=><circle key={x} cx={x} cy={y} r={r} fill="#d6e4ff" className="hero-globe-star" />)}
    </svg>
    <div className="absolute inset-[7%]">
      <Image src="/images/hero/alaqa-globe.png" alt="" aria-hidden fill preload sizes="(max-width: 1024px) 85vw, 45vw" className="object-contain" style={{ filter: "none" }} />
    </div>
    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pb-1">
      <Image src="/images/alaqa-logo.png" alt="" width={1493} height={674} unoptimized className="h-auto w-[31%] brightness-0 invert opacity-65" />
      <p className="mt-4 text-[8px] font-medium uppercase tracking-[0.24em] text-white/65 sm:text-[10px]">Ideas <span className="mx-1 text-white/35">→</span> Products <span className="mx-1 text-white/35">→</span> Growth</p>
    </div>
    {services.map(({title,Icon,href,position,delay})=><Link key={title} href={href} className={"hero-service-float absolute z-10 flex w-[19%] min-w-[58px] sm:min-w-[76px] flex-col items-center gap-1.5 rounded-xl border border-white/20 bg-[#17202f]/65 px-1.5 py-2.5 text-center text-white shadow-[0_12px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition-colors hover:border-[#a7c2ff]/65 hover:bg-[#26344c]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b3cbff] sm:gap-3 sm:px-2 sm:rounded-[1.4rem] sm:py-5 "+position} style={{animationDelay:delay}}>
      <Icon className="h-5 w-5 text-[#d5e1ff] sm:h-8 sm:w-8" strokeWidth={1.6} />
      <span className="max-w-[95px] text-[9px] font-medium leading-snug text-white/85 sm:text-xs">{title}</span>
    </Link>)}
    <div aria-hidden className="pointer-events-none absolute -left-3 top-0 hidden -rotate-12 text-center font-serif text-lg italic leading-tight text-white/40 xl:block">Ideas<br />to reality<ArrowUpRight className="ml-16 h-6 w-6 rotate-45" strokeWidth={1} /></div>
    <div aria-hidden className="pointer-events-none absolute -right-5 top-[12%] hidden -rotate-12 font-serif text-lg italic leading-tight text-white/40 xl:block">Smarter<br />solutions</div>
    <div aria-hidden className="pointer-events-none absolute bottom-[1%] right-0 hidden -rotate-12 font-serif text-lg italic leading-tight text-white/40 xl:block">Growth<br />together</div>
  </div>;
}

export function Hero({ contentReady = true }: { contentReady?: boolean }) {
  return <section id="home" className="relative isolate overflow-hidden bg-[#070b10] pb-6 pt-20 text-white sm:pb-12 sm:pt-32 lg:pt-20 xl:pt-24 lg:pb-8">
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_35%,rgba(76,107,176,0.11),transparent_50%)]" />
    <div aria-hidden className="hero-dust pointer-events-none absolute inset-0 -z-10 opacity-40" />
    <svg aria-hidden viewBox="0 0 1600 220" preserveAspectRatio="none" className="pointer-events-none absolute bottom-0 left-0 -z-10 h-44 w-full opacity-55">
      <path d="M0 100 Q270 -25 690 150 T1600 90 V220 H0Z" fill="#101823" />
      <path d="M0 150 Q600 300 1200 100 T1600 50 V220 H0Z" fill="#09111b" />
      <path d="M1100 220 Q1400 20 1600 0" fill="none" stroke="#799fea" strokeOpacity="0.15" />
    </svg>
    <div className="container-padded">
      <div className="grid items-center gap-3 sm:gap-5 lg:grid-cols-[1.08fr_1fr] lg:gap-4">
        <motion.div initial={false} animate={{opacity:contentReady?1:0,y:contentReady?0:16}} transition={{duration:0.65}} className="relative z-20">
          <p className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#b5bdcc] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:text-[11px]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c3dcff] shadow-[0_0_10px_#79acff]" />Practical technology. Clear possibilities.
          </p>
          <h1 className="mt-4 text-[clamp(1.9rem,4.65vw,4.65rem)] lg:mt-6 font-bold leading-[1.05] tracking-[-0.04em]">
            <span className="block">Build Smarter.</span>
            <span className="block">Move Your</span>
            <span className="block">Business <span className="bg-gradient-to-r from-[#a8d2ff] via-[#b6caff] to-[#809ef7] bg-clip-text text-transparent">Forward.</span></span>
          </h1>
          <p className="mt-3 max-w-xl text-sm sm:mt-6 sm:text-base leading-relaxed text-[#b6bcc7] sm:text-lg xl:text-xl">Alaqa creates useful websites, applications, and AI tools that simplify daily work and help your business grow.</p>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-4">
            <Link href="#contact" className="group inline-flex min-h-12 sm:min-h-14 items-center justify-center gap-2 rounded-xl border border-white/80 sm:gap-3 sm:rounded-2xl bg-[#f8faff] px-3 text-[11px] font-semibold text-[#111722] shadow-[0_0_28px_rgba(111,150,255,0.25)] transition hover:bg-white hover:shadow-[0_0_35px_rgba(111,150,255,0.4)] sm:px-8 sm:text-base">Plan Your Project<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
            <Link href="#projects" className="inline-flex min-h-12 sm:min-h-14 items-center justify-center rounded-xl border border-white/30 sm:rounded-2xl bg-white/[0.015] px-3 text-[11px] font-semibold text-white transition hover:border-white/60 hover:bg-white/5 sm:px-8 sm:text-base">Explore Our Projects</Link>
          </div>
        </motion.div>
        <motion.div initial={false} animate={{opacity:contentReady?1:0,scale:contentReady?1:0.97}} transition={{duration:0.85,delay:0.1}} className="relative min-w-0">
          <HeroGlobe />
        </motion.div>
      </div>
      <div className="relative mt-6 hidden border-t border-white/5 pt-6 lg:block">
        <dl className="grid grid-cols-2 gap-y-6 sm:grid-cols-4">
          {[["10","Service capabilities"],["16","Industries supported"],["04","Ways to work together"],["05","Delivery stages"]].map(([value,label],index)=><div key={label} className={"pr-3 "+(index>0?"border-l border-white/10 pl-4":"")}><dt className="text-2xl font-bold tracking-tight text-white">{value}</dt><dd className="mt-2 text-xs leading-relaxed text-white/45 sm:text-sm">{label}</dd></div>)}
        </dl>
      </div>
    </div>
  </section>;
}
