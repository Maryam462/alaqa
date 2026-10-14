import type { RowDataPacket } from "mysql2";
import type { AdminPost } from "@/lib/admin";
import sanitizeHtml from "sanitize-html";

export interface PostRow extends RowDataPacket {
  id: number; title: string; slug: string; excerpt: string; content: string; category: string;
  featured_image: string | null; featured_image_alt: string | null; author: string;
  status: "Draft" | "Published"; visibility: "Public" | "Private"; publish_date: string | Date;
  views: number; tags: string | string[] | null; seo_title: string | null; seo_description: string | null; allow_comments: number;
}

export function serializePost(row: PostRow): AdminPost {
  const tags = Array.isArray(row.tags) ? row.tags : row.tags ? JSON.parse(row.tags) : [];
  const date = row.publish_date instanceof Date ? row.publish_date.toISOString().slice(0, 10) : String(row.publish_date).slice(0, 10);
  return { id: String(row.id), title: row.title, slug: row.slug, excerpt: row.excerpt, content: row.content, category: row.category, image: row.featured_image ?? "", featuredImageAlt: row.featured_image_alt ?? "", author: row.author, status: row.status, visibility: row.visibility, date, views: row.views, tags, seoTitle: row.seo_title ?? "", seoDescription: row.seo_description ?? "", allowComments: Boolean(row.allow_comments) };
}

export function sanitizePostContent(content: string) {
  return sanitizeHtml(content, {
    allowedTags: ["p", "br", "h1", "h2", "h3", "h4", "strong", "b", "em", "i", "u", "s", "sub", "sup", "blockquote", "ul", "ol", "li", "a", "img", "code", "pre", "hr", "span", "table", "thead", "tbody", "tr", "th", "td"],
    allowedAttributes: { a: ["href", "target", "rel"], img: ["src", "alt", "title", "width", "height"], span: ["style"], "*": ["id", "style", "class"] },
    allowedSchemes: ["http", "https", "mailto", "data"],
    transformTags: { a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer" }, true) },
  });
}
