// Set NEXT_PUBLIC_SITE_URL to the real public origin when deploying.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
