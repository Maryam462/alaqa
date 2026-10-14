export type BlogCategoryRecord = { id: number; name: string; slug: string; description: string; postCount?: number };
export function categorySlug(value: string) { return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }
