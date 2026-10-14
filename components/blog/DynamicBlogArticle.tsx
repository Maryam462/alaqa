"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Check, Clock, Copy, Facebook, Linkedin, Twitter } from "lucide-react";
import type { PublicPost } from "@/lib/server/public-posts";
import { RelatedArticlesCarousel } from "@/components/blog/RelatedArticlesCarousel";

type Props = { post: PublicPost; related: PublicPost[]; shareUrl: string };

export function DynamicBlogArticle({ post, related, shareUrl }: Props) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  async function copyLink() {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
    resetTimer.current = setTimeout(() => setCopyStatus("idle"), 3000);
  }

  const encodedUrl = encodeURIComponent(shareUrl);
  const shares = [
    { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/sharing/share-offsite/?url=" + encodedUrl },
    { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/sharer/sharer.php?u=" + encodedUrl },
    { label: "X", icon: Twitter, href: "https://twitter.com/intent/tweet?url=" + encodedUrl + "&text=" + encodeURIComponent(post.title) },
  ];
  const shareClass = "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-surface-card dark:text-slate-200 dark:hover:text-brand-300";

  return (
    <>
      <header className="relative isolate overflow-hidden bg-brand-950 pb-12 pt-28 sm:pb-16 sm:pt-36">
        {post.image && <Image src={post.image} alt={post.featuredImageAlt || post.title} fill priority unoptimized className="-z-20 object-cover" sizes="100vw" />}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-950 via-brand-950/85 to-brand-950/60" />
        <div className="container-padded relative">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden />Back to Blog
          </Link>
          <div className="mt-8">
            <Link href={"/blog?category=" + post.categorySlug} className="rounded-full bg-brand-600 px-3 py-1 text-sm font-semibold text-white">{post.category}</Link>
          </div>
          <h1 className="mt-5 max-w-4xl text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-200">
            <strong className="text-white">{post.author}</strong>
            <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" aria-hidden /><time dateTime={post.date}>{post.date}</time></span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden />{post.readTime}</span>
          </div>
        </div>
      </header>
      <div className="container-padded py-10 sm:py-16">
        <article className="mx-auto max-w-3xl">
          <p className="mb-8 border-l-4 border-brand-500 pl-5 text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">{post.excerpt}</p>
          <div className="public-blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          {post.tags && post.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map(tag => <span key={tag} className="rounded-full bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">#{tag}</span>)}
            </div>
          )}
          <section aria-label="Share this article" className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-700">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-base font-semibold text-slate-900 dark:text-white">Share this article</h2>
              <div className="flex flex-wrap gap-2">
                {shares.map(({ label, icon: Icon, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={"Share on " + label} className={shareClass}>
                    <Icon className="h-4 w-4" aria-hidden /><span>{label}</span>
                  </a>
                ))}
                <button type="button" onClick={copyLink} className={shareClass} aria-label="Copy article link">
                  {copyStatus === "copied" ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
                  <span>{copyStatus === "copied" ? "Copied" : "Copy link"}</span>
                </button>
              </div>
            </div>
            <p role="status" className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              {copyStatus === "copied" ? "Article link copied." : copyStatus === "error" ? "Could not copy the link. You can copy it from your browser address bar." : ""}
            </p>
          </section>
        </article>
        <RelatedArticlesCarousel posts={related} />
      </div>
    </>
  );
}
