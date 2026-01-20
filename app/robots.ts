import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const fallbackSiteUrl = "https://rikiya-okawa-369.vercel.app";
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_ENV === "production" ? fallbackSiteUrl : undefined) ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
  const base = siteUrl.replace(/\/$/, "");
  const sitemapUrl = `${base}/sitemap.xml`;
  const host = base || undefined;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: sitemapUrl,
    host,
  };
}
