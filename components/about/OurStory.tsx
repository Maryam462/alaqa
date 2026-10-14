"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { useId } from "react";
import { AnimateIn } from "@/components/AnimateIn";

function StoryNetwork() {
  const uid = useId().replace(/:/g, "");
  const gradId = `story-nn-${uid}`;

  const nodes = [
    { id: "a1", x: 36, y: 80 },
    { id: "a2", x: 36, y: 160 },
    { id: "a3", x: 36, y: 240 },
    { id: "b1", x: 150, y: 50 },
    { id: "b2", x: 150, y: 120 },
    { id: "b3", x: 150, y: 200 },
    { id: "b4", x: 150, y: 270 },
    { id: "c1", x: 270, y: 90 },
    { id: "c2", x: 270, y: 160 },
    { id: "c3", x: 270, y: 230 },
    { id: "d1", x: 380, y: 120 },
    { id: "d2", x: 380, y: 200 },
  ];
  const edges: [string, string][] = [
    ["a1", "b1"],
    ["a1", "b2"],
    ["a2", "b2"],
    ["a2", "b3"],
    ["a3", "b3"],
    ["a3", "b4"],
    ["b1", "c1"],
    ["b2", "c1"],
    ["b2", "c2"],
    ["b3", "c2"],
    ["b3", "c3"],
    ["b4", "c3"],
    ["c1", "d1"],
    ["c2", "d1"],
    ["c2", "d2"],
    ["c3", "d2"],
  ];
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-lg">
      <div
        className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-600/15 via-transparent to-brand-400/10 blur-2xl"
        aria-hidden
      />
      <div className="glass-card relative flex h-full items-center justify-center overflow-hidden p-4 sm:p-6">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/25 blur-3xl"
          aria-hidden
        />
        <svg
          viewBox="0 0 420 320"
          className="relative z-10 h-full w-full"
          role="img"
          aria-label="Neural network illustration"
        >
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3a3a3a" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#9c9c9c" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#606060" stopOpacity="0.45" />
            </linearGradient>
          </defs>
          {edges.map(([from, to], i) => {
            const a = byId[from];
            const b = byId[to];
            return (
              <motion.line
                key={`${from}-${to}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={`url(#${gradId})`}
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: [0.25, 0.95, 0.3] }}
                viewport={{ once: true }}
                transition={{
                  duration: 2.8,
                  delay: i * 0.08,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
          {nodes.map((node, i) => (
            <motion.circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r={node.id.startsWith("d") ? 8 : 6}
              fill="#606060"
              stroke="#bebebe"
              strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.04 * i, type: "spring", stiffness: 240 }}
            />
          ))}
          <circle cx="210" cy="160" r="26" fill="#111111" fillOpacity="0.55" />
          <circle
            cx="210"
            cy="160"
            r="26"
            fill="none"
            stroke="#9c9c9c"
            strokeWidth="1.5"
            opacity="0.75"
          />
          <foreignObject x="194" y="144" width="32" height="32">
            <div className="flex h-8 w-8 items-center justify-center text-brand-300">
              <Cpu className="h-5 w-5" />
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  );
}

export function OurStory() {
  return (
    <section id="our-story" className="section-padding relative overflow-hidden">
      <div className="container-padded relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateIn direction="left">
            <StoryNetwork />
          </AnimateIn>

          <AnimateIn direction="right" delay={0.08}>
            <p className="section-eyebrow">About Alaqa</p>
            <h2 className="mt-3 section-heading">
              Turning Your Next Idea Into Something Useful.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
              <p>
                At Alaqa, every project starts with understanding your
                idea.
              </p>
              <p>
                We&apos;re a technology and digital solutions company helping
                startups, entrepreneurs, and established businesses transform
                ideas into high-performance digital products.
              </p>
              <p>
                Our expertise spans Artificial Intelligence, Web &amp; Mobile
                Development, SaaS, Blockchain, Automation, UI/UX, Cloud
                Solutions, and Digital Growth.
              </p>
              <p>Good delivery starts with understanding the people who will use it.</p>
              <p>
                We understand that businesses don&apos;t need software simply
                for the sake of having software. They need solutions that solve
                real problems, improve operations, engage customers, and create
                opportunities for growth.
              </p>
              <p>
                That&apos;s why we work closely with our clients from idea and
                strategy to design, development, deployment, and continuous
                improvement.
              </p>
              <p>
                Whether you&apos;re building your first startup, launching a
                SaaS platform, modernizing an existing business, or exploring
                what&apos;s possible with AI, Alaqa brings the technology,
                creativity, and engineering expertise to make it happen.
              </p>
              <p className="font-semibold text-slate-900 dark:text-white">
                We build with your next step in mind.
                <br />
                Useful products. Thoughtful decisions. Room to grow.
              </p>
            </div>
            <div className="hidden">
              <p>
                Alaqa is a software development and digital agency. We build
                websites, apps, and AI tools for agencies, clinics,
                consultancies, and other service businesses — companies that
                sell expertise, and need technology that reflects that instead
                of a template stretched to fit.
              </p>
              <p>
                Our team covers development, design, project management, and QA
                under one roof, so nothing gets lost in a handoff between
                vendors.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
