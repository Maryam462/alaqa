import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Route, Truck } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

export function HomeLogistics() {
  return <section id="logistics" className="relative overflow-hidden pb-16 sm:pb-24">
    <div className="container-padded">
      <AnimateIn>
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-brand-950 lg:grid-cols-2">
          <div className="relative aspect-[16/11] lg:aspect-auto lg:min-h-[470px]">
            <Image src="/images/homepage/logistics-transportation.jpg" alt="Freight trucks transporting goods along a logistics route" fill sizes="(max-width: 1024px) 95vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            <span className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"><Truck className="h-4 w-4" />Connected operations</span>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">Industry spotlight</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Logistics &amp; Transportation</h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">Bring your routes, deliveries, and fleet information together. We build practical tools that help teams coordinate operations and keep customers informed.</p>
            <ul className="mt-7 space-y-4">{[{Icon:MapPin,text:"Fleet visibility and tracking dashboards"},{Icon:Route,text:"Route planning and delivery management"},{Icon:Truck,text:"Driver apps and customer updates"}].map(({Icon,text})=><li key={text} className="flex items-center gap-3 text-sm text-white/80 sm:text-base"><Icon className="h-5 w-5 shrink-0 text-white/60" />{text}</li>)}</ul>
            <Link href="/industries#industry-logistics-transportation" className="mt-8 inline-flex items-center gap-2 self-start rounded-xl border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Explore logistics solutions<ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </AnimateIn>
    </div>
  </section>;
}
