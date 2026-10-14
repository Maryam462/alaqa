"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BrainCircuit, ChartNoAxesCombined, Clock3, Code2, Focus, Handshake, Lightbulb, ShieldCheck, Target, Users } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { industriesPageData } from "@/lib/industries";

const photo = (id: string) => "/images/homepage/" + id + ".jpg";

function Corner({ right = false }: { right?: boolean }) {
  return <div aria-hidden className={"pointer-events-none absolute top-12 h-36 w-36 rotate-45 border border-brand-400/20 " + (right ? "-right-24" : "-left-24")}><div className="absolute inset-5 border border-brand-400/30" /><div className="absolute inset-10 bg-brand-500/10" /></div>;
}

function Heading({ eyebrow, title, text, dark = false }: { eyebrow: string; title: string; text?: string; dark?: boolean }) {
  return <AnimateIn className="mx-auto mb-12 max-w-3xl text-center">
    <p className={dark ? "text-sm font-semibold uppercase tracking-[0.2em] text-white/55" : "section-eyebrow"}>{eyebrow}</p>
    <h2 className={"mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl " + (dark ? "text-white" : "text-slate-900 dark:text-white")}>{title}</h2>
    {text && <p className={"mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg " + (dark ? "text-white/70" : "text-slate-600 dark:text-slate-400")}>{text}</p>}
  </AnimateIn>;
}

export function BrochureAbout() {
  return <section id="about" className="relative overflow-hidden pb-16 pt-16 sm:pb-24 sm:pt-24">
    <Corner /><Corner right />
    <div className="container-padded">
      <AnimateIn>
        <div className="relative h-64 overflow-hidden rounded-t-[2rem] sm:h-80 lg:h-96">
          <Image src={photo("photo-1522071820081-009f0129c71c")} alt="A team working together on a digital project" fill sizes="(max-width: 1280px) 100vw, 1200px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
        </div>
        <div className="relative mx-4 -mt-16 rounded-[1.75rem] border border-white/10 bg-brand-950 px-6 py-10 text-center text-white shadow-soft-lg sm:mx-12 sm:px-10 sm:py-14 lg:mx-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">About Alaqa</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Your vision. Our expertise.<br />Something remarkable.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">Alaqa is a software and digital solutions team helping businesses turn ambitious ideas into useful products. We bring strategy, design, and engineering together, from the first conversation to launch.</p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">Custom software, websites, mobile applications, and practical AI solutions: technology shaped around your people, your priorities, and your next stage of growth.</p>
          <Link href="/about" className="mt-7 inline-flex items-center gap-2 font-semibold text-white hover:underline">Get to know Alaqa<ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </AnimateIn>
      <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {[["10", "Service capabilities"], ["16", "Industries supported"], ["04", "Ways to work together"], ["05", "Stages of delivery"]].map(([value,label],i) => <AnimateIn key={label} delay={i*0.05}><div className="border-l border-slate-300 pl-5 dark:border-slate-700"><p className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">{value}</p><p className="mt-2 text-sm text-slate-600 sm:text-base dark:text-slate-400">{label}</p></div></AnimateIn>)}
      </div>
    </div>
  </section>;
}

const offerings = [
  { title: "AI Solutions", description: "Chatbots, intelligent workflows, and decision-support tools that put your data to work and reduce repetitive tasks.", slug: "ai-solutions", image: "photo-1677442136019-21780ecad995", label: "Artificial intelligence concept" },
  { title: "Web Development", description: "Responsive websites and custom web applications built around performance, security, and the way your business works.", slug: "web-development", image: "photo-1555066931-4365d14bab8c", label: "Web development code on a screen" },
  { title: "Mobile App Development", description: "Thoughtful Android, iOS, and cross-platform experiences that bring your services closer to your customers.", slug: "mobile-app-development", image: "photo-1512941937669-90a1b58e7e9c", label: "Mobile application displayed on a smartphone" },
  { title: "UI/UX Design", description: "Clear journeys and considered interfaces that make your product easier to understand, navigate, and enjoy.", slug: "graphic-designing", image: "photo-1558655146-d09347e92766", label: "Visual design and creative workspace" },
  { title: "Game Development", description: "Engaging 2D and 3D experiences for mobile and desktop, with careful attention to controls, performance, and play.", slug: "game-development", image: "photo-1511512578047-dfb367046420", label: "Gaming equipment and an interactive game" },
  { title: "Blockchain Development", description: "Smart contracts, decentralised applications, and connected platforms designed around a clear business purpose.", slug: "blockchain-development", image: "photo-1639762681485-074b7f938ba0", label: "Digital blockchain concept" },
  { title: "Digital Marketing", description: "Search, social, and content campaigns that connect your message with the people most likely to need your services.", slug: "digital-marketing", image: "photo-1460925895917-afdab827c52f", label: "Digital marketing analytics dashboard" },
  { title: "AR/VR & Interactive Experiences", description: "Immersive concepts, virtual environments, and interactive experiences for learning, exploration, and entertainment.", slug: "game-development", image: "photo-1622979135225-d2ba269cf1ac", label: "A virtual reality headset" },
  { title: "Emerging Technologies", description: "Explore connected devices, automation, and new technology with prototypes that establish what is useful for your business.", slug: "ai-solutions", image: "photo-1518770660439-4636190af475", label: "Connected electronics and technology" },
  { title: "Data Science", description: "Turn scattered information into clear dashboards, useful insights, and models that support better decisions.", slug: "ai-solutions", image: "photo-1551288049-bebda4e38f71", label: "Charts and data visualisation on a screen" },
];

export function BrochureServices() {
  return <section id="services" className="relative overflow-hidden bg-brand-950 py-16 sm:py-24">
    <div aria-hidden className="absolute -left-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/5" /><div aria-hidden className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full border-[45px] border-white/5" />
    <div className="container-padded relative">
      <Heading dark eyebrow="Our services" title="From an idea to a complete digital experience." text="Explore the capabilities behind your next product: thoughtful design, dependable engineering, and practical innovation." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offerings.map((item,i) => <AnimateIn key={item.title} delay={Math.min(i*0.03,0.18)} className={i===9 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}>
          <Link href={"/service/"+item.slug} className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/15 bg-white p-2 transition duration-300 hover:-translate-y-1 hover:shadow-soft-lg dark:bg-surface-card">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.25rem]">
              <Image src={photo(item.image)} alt={item.label} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1 text-xs font-medium text-white">{String(i+1).padStart(2,"0")}</span>
            </div>
            <div className="flex flex-1 flex-col px-4 pb-5 pt-5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">Explore capability<ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
            </div>
          </Link>
        </AnimateIn>)}
      </div>
      <div className="mt-10 text-center"><Link href="/services" className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Explore all our services<ArrowRight className="h-4 w-4" /></Link></div>
    </div>
  </section>;
}

export function BrochureIndustries() {
  return <section id="industries" className="relative overflow-hidden py-16 sm:py-24">
    <Corner /><Corner right />
    <div className="container-padded">
      <Heading eyebrow="We serve" title="Different industries. The same care." text="Every sector has its own workflows, expectations, and opportunities. We build around the realities of yours." />
      <div className="relative grid gap-x-16 gap-y-0 lg:grid-cols-2">
        <div aria-hidden className="absolute bottom-8 left-1/2 top-8 hidden border-l border-dashed border-slate-300 lg:block dark:border-slate-700" />
        {industriesPageData.map((industry,i)=><AnimateIn key={industry.slug} delay={Math.min(i*0.02,0.14)}>
          <Link href={"/industries#industry-"+industry.slug} className="group flex h-full gap-5 border-b border-slate-200 py-6 dark:border-slate-800">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-950 text-base font-semibold text-white ring-4 ring-brand-500/10 dark:bg-white dark:text-brand-950">{industry.id}</span>
            <div className="flex-1"><h3 className="flex items-center justify-between gap-3 text-lg font-bold text-slate-900 dark:text-white">{industry.title}<ArrowUpRight className="h-4 w-4 shrink-0 opacity-40 transition group-hover:opacity-100" /></h3><p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">{industry.whatWeBuild.slice(0,3).join(", ")}.</p></div>
          </Link>
        </AnimateIn>)}
      </div>
    </div>
  </section>;
}

const reasons = [
  {title:"Creative thinking", text:"Fresh ideas and thoughtful interfaces, grounded in what your users actually need.",Icon:Lightbulb},
  {title:"Clear delivery milestones",text:"A shared plan, regular updates, and visible progress from discovery to launch.",Icon:Clock3},
  {title:"Personalised service",text:"Scope and solutions shaped around your goals, workflows, and priorities.",Icon:Focus},
  {title:"A dedicated team",text:"Designers and engineers who understand your brief and work closely with your people.",Icon:Users},
  {title:"Careful engineering",text:"Readable code, meaningful checks, and performance considered throughout delivery.",Icon:Code2},
  {title:"A partnership approach",text:"We listen, explain decisions, and help you plan what comes after the first release.",Icon:Handshake},
];

export function BrochureWhyUs() {
  return <section className="relative overflow-hidden border-y border-slate-200 bg-white/55 py-16 sm:py-24 dark:border-slate-800 dark:bg-white/[0.025]">
    <Corner right />
    <div className="container-padded">
      <Heading eyebrow="Why choose Alaqa" title="Good work starts with a good partnership." />
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({title,text,Icon},i)=><AnimateIn key={title} delay={i*0.04}><article className="flex h-full flex-col items-center px-3 text-center">
          <span className="mb-5 text-xs font-semibold tracking-[0.2em] text-slate-400">{String(i+1).padStart(2,"0")}</span>
          <div className="mb-8 flex h-20 w-20 rotate-45 items-center justify-center rounded-2xl border border-slate-700 bg-brand-950 shadow-soft dark:border-slate-600"><Icon className="h-8 w-8 -rotate-45 text-white" strokeWidth={1.4} /></div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3><p className="mt-3 max-w-xs text-base leading-relaxed text-slate-600 dark:text-slate-400">{text}</p>
        </article></AnimateIn>)}
      </div>
    </div>
  </section>;
}

const models=[
 {title:"The right model for your project",tag:"Start with clarity",text:"We review your goals, scope, and constraints together, then choose an engagement that makes sense for your business.",Icon:Target},
 {title:"Dedicated team",tag:"Build together",text:"Work with a focused team of designers and developers who become a consistent part of your product delivery.",Icon:Users},
 {title:"Time & materials",tag:"Room to evolve",text:"A flexible approach for changing priorities and iterative products, with agreed rates and transparent progress.",Icon:Clock3},
 {title:"Fixed scope & price",tag:"A defined first step",text:"For a clear brief, we agree on deliverables, milestones, and price before work begins.",Icon:ShieldCheck},
];

export function BrochureBusinessModels() {
  return <section className="relative overflow-hidden py-16 sm:py-24"><Corner /><div className="container-padded">
    <Heading eyebrow="Business models" title="The right way to work, for your next step." text="A clear project may need a fixed scope. An evolving product may need a flexible team. We help you choose." />
    <div className="grid gap-5 md:grid-cols-2">
      {models.map(({title,tag,text,Icon},i)=><AnimateIn key={title} delay={i*0.05}><article className="group h-full rounded-3xl border border-slate-200 bg-white/70 p-7 transition hover:border-slate-400 sm:p-9 dark:border-slate-700 dark:bg-surface-card/70">
        <div className="flex items-start justify-between"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-950 text-xl text-white dark:bg-white dark:text-brand-950">{String(i+1).padStart(2,"0")}</span><Icon className="h-6 w-6 text-slate-400" strokeWidth={1.5} /></div>
        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{tag}</p><h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h3><p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">{text}</p>
      </article></AnimateIn>)}
    </div>
  </div></section>;
}

export function BrochureGoal() {
  return <section className="relative overflow-hidden py-16 sm:py-24">
    <div className="container-padded">
      <div className="relative overflow-hidden rounded-[2rem] bg-brand-950 px-6 pb-10 pt-12 sm:px-12 sm:pt-16">
        <Corner /><Corner right />
        <Heading dark eyebrow="Our main goal" title="Make technology a meaningful part of your progress." text="Bring your vision and everyday business needs together with thoughtful, useful digital solutions." />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl"><Image src={photo("photo-1677442136019-21780ecad995")} alt="An artificial intelligence visualisation" fill sizes="(max-width: 1024px) 40vw, 25vw" className="object-cover" /></div>
            <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-2xl"><Image src={photo("photo-1551288049-bebda4e38f71")} alt="Business insights shown in a digital dashboard" fill sizes="(max-width: 1024px) 40vw, 25vw" className="object-cover" /></div>
          </div>
          <div className="space-y-8">
            {[{title:"What we observe",text:"Useful technology begins with understanding the problem. We look at your workflows, listen to your people, and identify where better tools can make a difference.",Icon:ChartNoAxesCombined},{title:"Our purpose",text:"Help your business move forward with products your team can rely on: clear to use, easier to maintain, and ready to develop as your needs change.",Icon:BrainCircuit}].map(({title,text,Icon})=><div key={title} className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20"><Icon className="h-5 w-5 text-white" /></span><div><h3 className="text-xl font-bold text-white">{title}</h3><p className="mt-3 text-base leading-relaxed text-white/65">{text}</p></div></div>)}
            <Link href="#contact" className="inline-flex items-center gap-2 font-semibold text-white hover:underline">Tell us what you have in mind<ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </div>
  </section>;
}

const steps=[
 {title:"Input",text:"Understand your goals, users, requirements, and the information we need to start."},
 {title:"Process",text:"Plan, design, and develop through clear milestones and regular collaboration."},
 {title:"Output",text:"Deliver a working product, with the checks and handover needed for launch."},
 {title:"Feedback",text:"Listen to users, review outcomes, and identify the next useful improvements."},
 {title:"Control",text:"Monitor, maintain, and refine the product so it continues to serve your business."},
];

export function BrochureProcess() {
  return <section id="process" className="relative overflow-hidden py-16 sm:py-24"><Corner right /><div className="container-padded">
    <div className="mb-12 flex flex-col gap-5 border-b border-slate-200 pb-10 lg:flex-row lg:items-end lg:justify-between dark:border-slate-800"><div><p className="section-eyebrow">How delivery works</p><h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">A considered process.<br />From input to improvement.</h2></div><p className="max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-400">Five connected stages keep the work focused, the decisions visible, and your product moving in the right direction.</p></div>
    <ol className="relative grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
      <li aria-hidden role="presentation" className="absolute left-7 right-7 top-7 hidden border-t border-dashed border-slate-300 lg:block dark:border-slate-700" />
      {steps.map((step,i)=><li key={step.title} className="relative"><AnimateIn delay={i*0.05}>
        <span className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[rgb(var(--background))] bg-brand-950 text-base font-semibold text-white ring-1 ring-slate-300 dark:bg-white dark:text-brand-950 dark:ring-slate-700">{String(i+1).padStart(2,"0")}</span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">{step.text}</p>
      </AnimateIn></li>)}
    </ol>
  </div></section>;
}
