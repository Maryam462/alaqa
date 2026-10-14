import type { RowDataPacket } from "mysql2";
import { editorialPosts } from "@/lib/editorial-posts";
import { blogFilters } from "@/lib/blog";
import { localPreviewWithoutDatabase, queryRows } from "@/lib/server/db";
import { sanitizePostContent, type PostRow, serializePost } from "@/lib/server/posts";
import type { AdminPost } from "@/lib/admin";

interface PublicRow extends PostRow { category_slug: string | null }
export type PublicPost = AdminPost & { categorySlug: string; readTime: string };
function previewPosts(): PublicPost[] { return editorialPosts.map(post => ({ ...post, content: sanitizePostContent(post.content), categorySlug: post.category.toLowerCase(), readTime: Math.max(1, Math.ceil(post.content.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length / 220)) + " min read" })); }
const select = "SELECT p.*, c.slug AS category_slug FROM blog_posts p LEFT JOIN blog_categories c ON c.name=p.category";
function publicPost(row: PublicRow): PublicPost { const post=serializePost(row); post.content=sanitizePostContent(post.content); const words=post.content.replace(/<[^>]*>/g," ").trim().split(/\s+/).filter(Boolean).length; return {...post,categorySlug:row.category_slug||post.category.toLowerCase().replace(/[^a-z0-9]+/g,"-"),readTime:`${Math.max(1,Math.ceil(words/220))} min read`}; }
export async function getPublicPosts(){if(localPreviewWithoutDatabase)return previewPosts();const rows=await queryRows<PublicRow[]>(`${select} WHERE p.status='Published' AND p.visibility='Public' AND p.publish_date<=CURRENT_DATE ORDER BY p.publish_date DESC,p.id DESC`);return rows.map(publicPost);}
export async function getPublicPost(slug:string){if(localPreviewWithoutDatabase)return previewPosts().find(post => post.slug === slug) ?? null;const rows=await queryRows<PublicRow[]>(`${select} WHERE p.slug=? AND p.status='Published' AND p.visibility='Public' AND p.publish_date<=CURRENT_DATE LIMIT 1`,[slug]);return rows[0]?publicPost(rows[0]):null;}
export async function getRelatedPublicPosts(post:PublicPost){if(localPreviewWithoutDatabase)return previewPosts().filter(item => item.category === post.category && item.id !== post.id);const rows=await queryRows<PublicRow[]>(`${select} WHERE p.category=? AND p.id<>? AND p.status='Published' AND p.visibility='Public' AND p.publish_date<=CURRENT_DATE ORDER BY p.publish_date DESC LIMIT 12`,[post.category,Number(post.id)]);return rows.map(publicPost);}
export interface PublicCategory extends RowDataPacket { id:number;name:string;slug:string;description:string;postCount:number }
export async function getPublicCategories(){if(localPreviewWithoutDatabase)return blogFilters.filter(name => name !== "All").map((name, index) => ({ id: index + 1, name, slug: name.toLowerCase(), description: "Practical " + name.toLowerCase() + " guides from Alaqa.", postCount: editorialPosts.filter(post => post.category === name).length })) as PublicCategory[];const rows=await queryRows<PublicCategory[]>("SELECT c.id,c.name,c.slug,COALESCE(c.description,'') description,COUNT(p.id) postCount FROM blog_categories c LEFT JOIN blog_posts p ON p.category=c.name AND p.status='Published' AND p.visibility='Public' AND p.publish_date<=CURRENT_DATE GROUP BY c.id ORDER BY c.name");return rows.map(row=>({...row,postCount:Number(row.postCount)}));}
