import type { MetadataRoute } from "next";
import { listEnProjects } from "@/lib/siteProjectsEn";
import { listJpProjects } from "@/lib/siteProjectsJp";
import { projects as clientProjects } from "@/lib/projects";

const base = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");
const now = new Date();

const abs = (path: string) => {
  if (!base) return path; // fallback (Next may prefix via metadataBase)
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const en = listEnProjects();
  const jp = listJpProjects();
  const jpSet = new Set(jp.map((p) => p.slug));
  const enSet = new Set(en.map((p) => p.slug));

  // Static top-level pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: abs("/en"), lastModified: now },
    { url: abs("/jp"), lastModified: now },
    { url: abs("/aboutme"), lastModified: now },
    { url: abs("/about-me_jp"), lastModified: now },
    { url: abs("/clientworks"), lastModified: now },
    { url: abs("/guardians_en"), lastModified: now },
    { url: abs("/guardians_jp"), lastModified: now },
  ];

  // EN/JP site projects with hreflang alternates
  const siteProjectPages: MetadataRoute.Sitemap = en.flatMap((p) => {
    const enUrl = abs(`/en/project/${p.slug}`);
    const jpUrl = jpSet.has(p.slug) ? abs(`/jp/project/${p.slug}`) : undefined;
    const baseEntry = {
      url: enUrl,
      lastModified: now,
      alternates: jpUrl ? { languages: { en: enUrl, ja: jpUrl } } : undefined,
    } as MetadataRoute.Sitemap[number];
    const entries: MetadataRoute.Sitemap = [baseEntry];
    if (jpUrl) {
      entries.push({
        url: jpUrl,
        lastModified: now,
        alternates: { languages: { en: enUrl, ja: jpUrl } },
      });
    }
    return entries;
  });

  // Include JP-only projects (if any) not present in EN
  const jpOnlyPages: MetadataRoute.Sitemap = jp
    .filter((p) => !enSet.has(p.slug))
    .map((p) => ({ url: abs(`/jp/project/${p.slug}`), lastModified: now }));

  // Client works
  const clientWorksPages: MetadataRoute.Sitemap = clientProjects.flatMap((p) => [
    { url: abs(`/clientworks/${p.slug}`), lastModified: now },
    { url: abs(`/clientworks/${p.slug}/description`), lastModified: now },
  ]);

  return [
    ...staticPages,
    ...siteProjectPages,
    ...jpOnlyPages,
    ...clientWorksPages,
  ];
}

