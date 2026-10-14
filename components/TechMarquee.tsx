"use client";

import { AnimatePresence, LayoutGroup, motion, useInView } from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  FlaskConical,
  Layers,
  Layout,
  Link2,
  PanelsTopLeft,
  Server,
  Settings2,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
} from "react";
import { FaAws, FaDatabase, FaRobot } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandAzure } from "react-icons/tb";
import {
  SiAndroid,
  SiAngular,
  SiApple,
  SiBootstrap,
  SiCss,
  SiCypress,
  SiDigitalocean,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiDrupal,
  SiEthereum,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiGo,
  SiGooglecloud,
  SiHtml5,
  SiIonic,
  SiJenkins,
  SiJest,
  SiJquery,
  SiKotlin,
  SiKubernetes,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxt,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRubyonrails,
  SiRust,
  SiSelenium,
  SiShopify,
  SiSolana,
  SiSolidity,
  SiStrapi,
  SiSwift,
  SiTerraform,
  SiVercel,
  SiVuedotjs,
  SiWordpress,
  SiBinance,
  SiPolygon,
  SiContentful,
  SiMocha,
} from "react-icons/si";
import { AnimateIn } from "@/components/AnimateIn";
import { techCategories, type TechCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = Object.keys(techCategories) as TechCategory[];

type IconComp = ComponentType<{ className?: string; style?: CSSProperties }>;

const categoryMeta: Record<
  TechCategory,
  { icon: LucideIcon; short?: string }
> = {
  Backend: { icon: Server },
  Frontend: { icon: Layout },
  Mobile: { icon: Smartphone },
  Database: { icon: Database },
  CMS: { icon: PanelsTopLeft },
  Cloud: { icon: Cloud },
  "Testing Tools": { icon: FlaskConical },
  DevOps: { icon: Settings2 },
  "Full Stack": { icon: Layers },
  Blockchain: { icon: Link2 },
};

const toolVisuals: Record<string, { Icon: IconComp; color: string }> = {
  "Node.js": { Icon: SiNodedotjs, color: "#909090" },
  Python: { Icon: SiPython, color: "#6c6c6c" },
  Laravel: { Icon: SiLaravel, color: "#595959" },
  Django: { Icon: SiDjango, color: "#252525" },
  ".NET": { Icon: SiDotnet, color: "#3f3f3f" },
  Golang: { Icon: SiGo, color: "#8b8b8b" },
  PHP: { Icon: SiPhp, color: "#7e7e7e" },
  Rails: { Icon: SiRubyonrails, color: "#2b2b2b" },
  Rust: { Icon: SiRust, color: "#afafaf" },
  React: { Icon: SiReact, color: "#c3c3c3" },
  Vue: { Icon: SiVuedotjs, color: "#9b9b9b" },
  Angular: { Icon: SiAngular, color: "#333333" },
  HTML5: { Icon: SiHtml5, color: "#6c6c6c" },
  CSS: { Icon: SiCss, color: "#636363" },
  Bootstrap: { Icon: SiBootstrap, color: "#616161" },
  jQuery: { Icon: SiJquery, color: "#595959" },
  Android: { Icon: SiAndroid, color: "#b4b4b4" },
  iOS: { Icon: SiApple, color: "#a9a9a9" },
  Flutter: { Icon: SiFlutter, color: "#494949" },
  "React Native": { Icon: SiReact, color: "#c3c3c3" },
  Kotlin: { Icon: SiKotlin, color: "#686868" },
  Swift: { Icon: SiSwift, color: "#717171" },
  Ionic: { Icon: SiIonic, color: "#7a7a7a" },
  MySQL: { Icon: SiMysql, color: "#717171" },
  MongoDB: { Icon: SiMongodb, color: "#888888" },
  PostgreSQL: { Icon: SiPostgresql, color: "#696969" },
  Firebase: { Icon: SiFirebase, color: "#cacaca" },
  Oracle: { Icon: FaDatabase, color: "#353535" },
  "MS SQL": { Icon: DiMsqlServer, color: "#4c4c4c" },
  WordPress: { Icon: SiWordpress, color: "#666666" },
  Drupal: { Icon: SiDrupal, color: "#656565" },
  Shopify: { Icon: SiShopify, color: "#aeaeae" },
  Strapi: { Icon: SiStrapi, color: "#535353" },
  Contentful: { Icon: SiContentful, color: "#6c6c6c" },
  AWS: { Icon: FaAws, color: "#a4a4a4" },
  Azure: { Icon: TbBrandAzure, color: "#656565" },
  GCP: { Icon: SiGooglecloud, color: "#7f7f7f" },
  DigitalOcean: { Icon: SiDigitalocean, color: "#6e6e6e" },
  Vercel: { Icon: SiVercel, color: "#181818" },
  Netlify: { Icon: SiNetlify, color: "#9c9c9c" },
  Jest: { Icon: SiJest, color: "#3a3a3a" },
  Cypress: { Icon: SiCypress, color: "#b9b9b9" },
  Selenium: { Icon: SiSelenium, color: "#8f8f8f" },
  Playwright: { Icon: Code2, color: "#898989" },
  Mocha: { Icon: SiMocha, color: "#6d6d6d" },
  Docker: { Icon: SiDocker, color: "#848484" },
  Kubernetes: { Icon: SiKubernetes, color: "#686868" },
  Jenkins: { Icon: SiJenkins, color: "#656565" },
  "GitHub Actions": { Icon: SiGithubactions, color: "#7a7a7a" },
  Terraform: { Icon: SiTerraform, color: "#575757" },
  MERN: { Icon: SiMongodb, color: "#888888" },
  MEAN: { Icon: SiAngular, color: "#333333" },
  "Next.js": { Icon: SiNextdotjs, color: "#181818" },
  Nuxt: { Icon: SiNuxt, color: "#a7a7a7" },
  "Laravel + Vue": { Icon: SiLaravel, color: "#595959" },
  Solidity: { Icon: SiSolidity, color: "#999999" },
  Ethereum: { Icon: SiEthereum, color: "#a1a1a1" },
  Solana: { Icon: SiSolana, color: "#bbbbbb" },
  Hardhat: { Icon: FaRobot, color: "#e3e3e3" },
  Truffle: { Icon: Code2, color: "#4c4c4c" },
  Binance: { Icon: SiBinance, color: "#b8b8b8" },
  Matic: { Icon: SiPolygon, color: "#5f5f5f" },
};

function ToolBadge({
  name,
  index,
  animateIn,
}: {
  name: string;
  index: number;
  animateIn: boolean;
}) {
  const visual = toolVisuals[name] ?? {
    Icon: Code2,
    color: "#9c9c9c",
  };
  const { Icon, color } = visual;

  return (
    <motion.div
      initial={animateIn ? { opacity: 0, scale: 0.72, y: 12 } : false}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: animateIn ? Math.min(index * 0.05, 0.55) : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group/badge relative flex w-[4.75rem] shrink-0 flex-col items-center gap-2 sm:w-[5.5rem]"
    >
      <div
        className={cn(
          "relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20",
          "bg-white/70 shadow-soft backdrop-blur-md transition-all duration-300",
          "group-hover/badge:scale-110 group-hover/badge:border-brand-400/60 group-hover/badge:shadow-glow",
          "dark:border-white/10 dark:bg-white/5 dark:shadow-none",
          "dark:group-hover/badge:bg-white/10 sm:h-16 sm:w-16 sm:rounded-[1.15rem]"
        )}
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/badge:opacity-100 sm:rounded-[1.15rem]" />
        <Icon
          className={cn(
            "relative h-6 w-6 sm:h-7 sm:w-7",
            (name === "Next.js" || name === "Vercel" || name === "iOS") &&
              "text-slate-800 dark:text-slate-100"
          )}
          style={
            name === "Next.js" || name === "Vercel" || name === "iOS"
              ? undefined
              : { color }
          }
          aria-hidden
        />
      </div>
      <span
        className={cn(
          "max-w-full truncate text-center text-xs font-medium text-slate-600 transition-all duration-300",
          "opacity-70 group-hover/badge:opacity-100 sm:text-sm",
          "dark:text-slate-300"
        )}
      >
        {name}
      </span>
    </motion.div>
  );
}

export function TechMarquee() {
  const [active, setActive] = useState<TechCategory>("Backend");
  const [entered, setEntered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });

  const tools = techCategories[active];
  // Repeat until half-track is wide enough for a seamless loop (avoids empty gap)
  const copies = Math.max(4, Math.ceil(12 / Math.max(tools.length, 1)));
  const track = Array.from({ length: copies }, () => tools).flat();

  useEffect(() => {
    if (inView) setEntered(true);
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="relative section-padding overflow-hidden"
    >
      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Tech Stack</p>
          <div className="relative mx-auto mt-3 inline-block">
            <h2 className="section-heading tech-scan-heading">
              Tools we master
            </h2>
            <motion.span
              className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-brand-600 via-brand-400 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "72%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <p className="section-subtext mx-auto">
            Modern technologies across backend, frontend, mobile, cloud, and
            blockchain — picked for reliability and speed.
          </p>
        </AnimateIn>

        {/* Tabs control panel */}
        <motion.div
          className="relative section-stack"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-[min(100%,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/15 blur-3xl dark:bg-brand-500/25"
            aria-hidden
          />

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[rgb(var(--background))] to-transparent sm:w-10 md:hidden" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[rgb(var(--background))] to-transparent sm:w-10 md:hidden" />

            <LayoutGroup id="tech-tabs">
              <div
                ref={tabsRef}
                className="relative flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:justify-center md:overflow-visible [&::-webkit-scrollbar]:hidden"
                role="tablist"
                aria-label="Technology categories"
              >
                {categories.map((cat, i) => {
                  const isActive = active === cat;
                  const Icon = categoryMeta[cat].icon;
                  return (
                    <motion.button
                      key={cat}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(cat)}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + i * 0.035,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={cn(
                        "relative z-0 inline-flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2.5 text-sm font-semibold transition-all sm:px-4 sm:text-base",
                        isActive
                          ? "scale-[1.04] text-white"
                          : "border border-slate-200/70 bg-white/55 text-slate-600 backdrop-blur-md hover:border-brand-400/40 hover:bg-white/80 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-brand-400/35 dark:hover:bg-white/10 dark:hover:text-brand-300"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="tech-tab-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 shadow-glow"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                        />
                      )}
                      <Icon
                        className={cn(
                          "h-4 w-4 shrink-0 transition-transform",
                          isActive && "scale-110"
                        )}
                        aria-hidden
                      />
                      <span className="whitespace-nowrap">{cat}</span>
                    </motion.button>
                  );
                })}
              </div>
            </LayoutGroup>
          </div>
        </motion.div>
      </div>

      {/* Logo marquee */}
      <motion.div
        className="relative z-10 mt-10 sm:mt-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-[rgb(var(--background))] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-[rgb(var(--background))] to-transparent sm:w-24" />

        <div className="overflow-hidden py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              {/* CSS marquee on a non-Framer node so transform isn't overridden */}
              <div className="flex w-max animate-marquee-slow group-hover:[animation-play-state:paused]">
                {[0, 1].map((half) => (
                  <div
                    key={`${active}-half-${half}`}
                    className="flex shrink-0 gap-4 px-2 sm:gap-5 sm:px-3"
                    aria-hidden={half === 1}
                  >
                    {track.map((tool, i) => (
                      <ToolBadge
                        key={`${active}-${half}-${tool}-${i}`}
                        name={tool}
                        index={i % tools.length}
                        animateIn={entered && half === 0 && i < tools.length}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
