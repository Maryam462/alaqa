import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, PackageCheck, Route, Truck } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

const capabilities = [
  { Icon: MapPin, title: "See the bigger picture", text: "Bring fleet locations, shipment progress, and operational information into one clear dashboard." },
  { Icon: Route, title: "Plan a better journey", text: "Coordinate routes, dispatch, and deliveries with tools built around your daily workflows." },
  { Icon: PackageCheck, title: "Keep everyone connected", text: "Give drivers practical mobile tools and customers useful updates along the way." },
];

export function HomeLogistics() {
  return <section id="logistics" className="relative scroll-mt-24 overflow-hidden border-y border-slate-200/70 bg-white/40 py-16 sm:py-24 dark:border-slate-800 dark:bg-white/[0.025]">
    <div aria-hidden className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border border-slate-300/40 dark:border-slate-700/40" />
    <div className="container-padded relative">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <AnimateIn>
          <p className="section-eyebrow">Industry spotlight</p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-white/5 dark:text-slate-300"><Truck className="h-3.5 w-3.5" />Logistics &amp; Transportation</p>
          <h2 className="mt-5 text-balance text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">Every delivery.<br /><span className="text-slate-500 dark:text-slate-400">A clearer picture.</span></h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">From the warehouse to the final stop, better information keeps your business moving. Alaqa connects your fleet, your team, and your customers with practical digital tools.</p>
          <Link href="/industries#industry-logistics-transportation" className="mt-8 inline-flex items-center gap-3 rounded-xl bg-brand-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-800 dark:bg-white dark:text-brand-950 dark:hover:bg-slate-200">Explore logistics solutions<ArrowUpRight className="h-4 w-4" /></Link>
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <div className="relative rounded-[2rem] border border-slate-200 bg-white p-2.5 shadow-soft-lg sm:p-3 dark:border-slate-700 dark:bg-surface-card">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] sm:aspect-[5/4]">
              <Image src="/images/homepage/logistics-transportation.jpg" alt="A freight truck travelling along a mountain road" fill sizes="(max-width: 1024px) 95vw, 55vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-xs font-medium text-white backdrop-blur-md sm:left-6 sm:top-6"><span className="h-1.5 w-1.5 rounded-full bg-white" />Built for the journey</span>
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/25 bg-white/95 p-4 backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-5 dark:border-white/15 dark:bg-brand-950/90">
                <div className="mb-4 flex items-center justify-between"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">From dispatch to delivery</p><Route className="h-4 w-4 text-slate-400" /></div>
                <div className="flex items-center gap-2 sm:gap-4">
                  {[{Icon:Truck,label:"Dispatch"},{Icon:Route,label:"On the road"},{Icon:PackageCheck,label:"Delivery"}].map(({Icon,label},index)=><div key={label} className="flex min-w-0 flex-1 items-center gap-2">
                    <div className="flex flex-1 flex-col items-center gap-2"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-800 dark:bg-white/10 dark:text-white"><Icon className="h-4 w-4" /></span><span className="whitespace-nowrap text-[10px] font-medium text-slate-600 sm:text-xs dark:text-slate-300">{label}</span></div>
                    {index<2&&<ArrowRight className="h-3 w-3 shrink-0 text-slate-400" />}
                  </div>)}
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
      <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-3">
        {capabilities.map(({Icon,title,text},index)=><AnimateIn key={title} delay={index*0.05}>
          <article className="h-full rounded-2xl border border-slate-200 bg-white/80 p-6 transition hover:border-slate-400 dark:border-slate-700 dark:bg-surface-card/65">
            <div className="mb-5 flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-800 dark:bg-white/10 dark:text-white"><Icon className="h-5 w-5" strokeWidth={1.6} /></span><span className="text-xs font-medium tabular-nums text-slate-400">0{index+1}</span></div>
            <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">{text}</p>
          </article>
        </AnimateIn>)}
      </div>
    </div>
  </section>;
}
