import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DynamicBlogArticle } from "@/components/blog/DynamicBlogArticle";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SiteAtmosphere } from "@/components/SiteAtmosphere";
import { getPublicPost, getRelatedPublicPosts } from "@/lib/server/public-posts";
import { siteUrl } from "@/lib/site-url";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPublicPost((await params).slug);
  if (!post) return { title: "Article Not Found", robots: { index: false } };
  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  const url = siteUrl + "/blog/" + post.slug;
  return {
    title: { absolute: post.seoTitle || post.title + " | Alaqa" },
    description,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article", publishedTime: post.date,
      authors: [post.author], section: post.category,
      images: post.image ? [{ url: post.image, alt: post.featuredImageAlt || post.title }] : undefined },
    twitter: { card: "summary_large_image", title, description, images: post.image ? [post.image] : undefined },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPublicPost((await params).slug);
  if (!post) notFound();
  const related = await getRelatedPublicPosts(post);
  const url = siteUrl + "/blog/" + post.slug;
  const schema = {
    "@context": "https://schema.org", "@type": "BlogPosting",
    headline: post.title, description: post.excerpt,
    datePublished: post.date, dateModified: post.date,
    author: { "@type": "Organization", name: post.author, url: siteUrl + "/about" },
    publisher: { "@type": "Organization", name: "Alaqa", url: siteUrl },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url, image: post.image || undefined, articleSection: post.category,
    keywords: post.tags?.join(", "), inLanguage: "en",
    wordCount: post.content.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length,
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <Navbar /><main className="flex-1"><SiteAtmosphere><DynamicBlogArticle post={post} related={related} shareUrl={url} />
      <NewsletterSection /><Footer /></SiteAtmosphere></main><FloatingCTA /></>;
}
