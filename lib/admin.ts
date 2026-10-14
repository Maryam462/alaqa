import { blogPostsData } from "@/lib/blog";

export type AdminPostStatus = "Published" | "Draft";

export type AdminPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  status: AdminPostStatus;
  date: string;
  views: number;
  tags?: string[];
  featuredImageAlt?: string;
  seoTitle?: string;
  seoDescription?: string;
  visibility?: "Public" | "Private";
  allowComments?: boolean;
};

export const seedAdminPosts: AdminPost[] = blogPostsData.map((post, index) => ({
  id: String(index + 1),
  title: post.title,
  slug: post.slug,
  excerpt: post.excerpt,
  content: post.body.map((block) => block.text).join("\n\n"),
  category: post.category,
  image: post.image,
  author: post.author.name,
  status: index === 2 || index === 7 ? "Draft" : "Published",
  date: post.dateSort,
  views: [2480, 1890, 1320, 3140, 960, 1170, 2240, 840, 1560, 720][index] ?? 0,
}));
