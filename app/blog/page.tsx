import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogHero } from "@/components/blog/BlogHero";
import { DynamicBlogListing } from "@/components/blog/DynamicBlogListing";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SiteAtmosphere } from "@/components/SiteAtmosphere";
import { getPublicCategories, getPublicPosts } from "@/lib/server/public-posts";
import { getCmsSettings } from "@/lib/server/settings";

export const dynamic = "force-dynamic";
export const metadata:Metadata={title:"Blog",description:"Practical articles from Alaqa on web development, AI, SEO, software, and digital growth.",openGraph:{title:"Alaqa Blog",description:"Practical ideas for growing service businesses."}};
export default async function BlogPage(){const [posts,categories,settings]=await Promise.all([getPublicPosts(),getPublicCategories(),getCmsSettings()]);return <><Navbar/><main className="flex-1"><BlogHero title={settings.blog_title} description={settings.blog_description}/><SiteAtmosphere><Suspense fallback={<div className="section-padding text-center">Loading articles…</div>}><DynamicBlogListing posts={posts} categories={categories} pageSize={Number(settings.posts_per_page)||6}/></Suspense><NewsletterSection/><Footer/></SiteAtmosphere></main><FloatingCTA/></>}
