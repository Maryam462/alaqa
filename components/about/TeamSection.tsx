"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimateIn } from "@/components/AnimateIn";
import { teamMembers } from "@/lib/data";
import { cn } from "@/lib/utils";

export function TeamSection() {
  return (
    <section id="team" className="section-padding relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-64 w-[min(90%,36rem)] -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl dark:bg-brand-500/25"
        aria-hidden
      />

      <div className="container-padded relative z-10">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Our Team</p>
          <h2 className="mt-3 section-heading">Meet the Team</h2>
          <p className="section-subtext mx-auto">
            Development, design, and delivery specialists working together from
            planning through launch.
          </p>
        </AnimateIn>

        <div className="section-stack grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: Math.min(i * 0.06, 0.4),
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-6 text-center shadow-soft backdrop-blur-sm",
                "transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-glow",
                "dark:border-slate-700/50 dark:bg-surface-card/80 dark:shadow-none"
              )}
            >
              <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full shadow-glow ring-4 ring-brand-500/20 transition duration-300 group-hover:scale-105 group-hover:ring-brand-400/40">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                {member.name}
              </h3>
              <Link href={member.role.includes("App") || member.role.includes("Application") ? "/service/mobile-app-development" : member.role.includes("Developer") ? "/service/web-development" : "/services"} className="mt-1 inline-block text-base text-brand-600 hover:underline dark:text-brand-400">{member.role}</Link>

              <div className="mt-5 flex items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                {(member.name === "Danish Shakeel" || member.name === "Hammad Bajwa") && <a
                  href={member.name === "Danish Shakeel" ? "https://example.com/alaqa/team/danish" : "https://example.com/alaqa/team/hammad"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition hover:bg-brand-600 hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-brand-600"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
