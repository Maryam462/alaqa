import type { MetadataRoute } from "next";
import { getPublicPosts } from "@/lib/server/public-posts";
import { siteUrl } from "@/lib/site-url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublicPosts();
  const pages = ["", "/about", "/services", "/portfolio", "/industries", "/logistics", "/contact", "/faqs", "/blog"];
  return [
    ...pages.map(path => ({ url: siteUrl + path })),
    ...posts.map(post => ({ url: siteUrl + "/blog/" + post.slug, lastModified: post.date })),
  ];
}
