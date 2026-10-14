// A custom domain can override the automatically supplied Vercel origin.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || (vercelHost ? "https://" + vercelHost : "http://localhost:3000")).replace(/\/$/, "");
