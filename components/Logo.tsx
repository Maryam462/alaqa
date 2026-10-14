"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_DARK = "/images/alaqa-logo.png";
const LOGO_WHITE = "/images/alaqa-logo.png";

type LogoProps = {
  className?: string;
  /**
   * `theme`            — dark wordmark in light mode, white in dark mode.
   * `white` / `light`  — always white (dark hero / dark surfaces).
   * `blue` / `default` — always dark.
   */
  variant?: "theme" | "white" | "blue" | "light" | "default";
};

export function Logo({ className, variant = "theme" }: LogoProps) {
  const mode =
    variant === "light" ? "white" : variant === "default" ? "blue" : variant;

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
        className
      )}
      aria-label="ALAQA home"
    >
      <span className="relative block h-7 w-[96px] shrink-0 sm:h-8 sm:w-[110px] lg:h-9 lg:w-[124px]">
        <Image
          src={LOGO_DARK}
          alt=""
          fill
          priority
          aria-hidden
          sizes="(min-width: 1024px) 124px, 110px"
          className={cn(
            "object-contain transition-opacity duration-200 ease-out",
            mode === "blue" && "opacity-100",
            mode === "white" && "opacity-0",
            mode === "theme" && "opacity-100 dark:opacity-0"
          )}
        />
        <Image
          src={LOGO_WHITE}
          alt=""
          fill
          priority
          aria-hidden
          sizes="(min-width: 1024px) 124px, 110px"
          className={cn(
            "object-contain transition-opacity duration-200 ease-out",
            mode === "white" && "opacity-100 brightness-0 invert",
            mode === "blue" && "opacity-0",
            mode === "theme" && "opacity-0 brightness-0 invert dark:opacity-100"
          )}
        />
      </span>
    </Link>
  );
}