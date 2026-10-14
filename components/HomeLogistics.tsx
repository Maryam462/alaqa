import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CarFront, MapPin, Route, ShieldCheck } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

export function HomeLogistics() {
  return <section id="logistics" className="relative scroll-mt-24 overflow-hidden bg-[#101112] py-16 text-white sm:py-24">
    <div className="container-padded">
      <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <AnimateIn className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#c3b49a]">Logistics &amp; Transportation</p>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">A smarter journey.<br /><span className="text-white/50">An exceptional experience.</span></h2>
        </AnimateIn>
        <AnimateIn className="max-w-sm"><p className="text-sm leading-relaxed text-white/55 sm:text-base">Thoughtful digital solutions for premium transport, connected fleets, and seamless operations. Built around the people behind every journey.</p></AnimateIn>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.65fr_1fr] lg:gap-6">
        <AnimateIn>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 sm:aspect-[16/10]">
            <Image src="/images/homepage/luxury-transport.png" alt="A graphite luxury sedan on a coastal road at dusk" fill sizes="(max-width: 1024px) 95vw, 60vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" style={{ filter: "none" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/15" />
            <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/30 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 backdrop-blur-md sm:left-7 sm:top-7">Precision in motion</span>
            <div className="absolute inset-x-5 bottom-6 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-7">
              <div><p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Connected transport</p><p className="mt-2 text-xl font-medium tracking-tight sm:text-3xl">Every detail. Every destination.</p></div>
              <CarFront className="hidden h-7 w-7 shrink-0 text-[#c3b49a] sm:block" strokeWidth={1.3} />
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.06} className="flex flex-col gap-4 lg:gap-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-white/10 lg:aspect-auto lg:flex-1">
            <Image src="/images/homepage/luxury-interior.png" alt="Refined leather seating and interior details in a luxury vehicle" fill sizes="(max-width: 1024px) 95vw, 35vw" className="object-cover" style={{ filter: "none" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /><p className="absolute bottom-5 left-5 text-xs font-medium tracking-wide text-white/85">Designed around the passenger.</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 sm:p-7">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c3b49a]">From booking to arrival</p>
            <p className="mt-3 text-xl font-medium tracking-tight text-white">Bring the entire journey together.</p>
            <p className="mt-3 text-sm leading-relaxed text-white/50">Booking tools, driver applications, and clear customer updates, connected through a dependable operational platform.</p>
            <Link href="/industries#industry-logistics-transportation" className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-[#e0d3bc] transition hover:text-white">Explore transport solutions<ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </AnimateIn>
      </div>
      <div className="mt-8 grid gap-5 border-t border-white/10 pt-7 md:grid-cols-3 sm:mt-10 sm:pt-9">
        {[{Icon:MapPin,title:"Fleet visibility",text:"Clear operational information, in one place."},{Icon:Route,title:"Journey coordination",text:"Tools for routes, bookings, and dispatch."},{Icon:ShieldCheck,title:"Passenger experience",text:"Useful updates at every stage of the journey."}].map(({Icon,title,text},i)=><AnimateIn key={title} delay={i*0.04}><div className="flex gap-4"><Icon className="mt-1 h-5 w-5 shrink-0 text-[#c3b49a]" strokeWidth={1.4} /><div><h3 className="text-sm font-medium text-white">{title}</h3><p className="mt-2 text-xs leading-relaxed text-white/45 sm:text-sm">{text}</p></div></div></AnimateIn>)}
      </div>
    </div>
  </section>;
}
