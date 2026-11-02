import type { MetadataRoute } from "next";
import { listEnProjects } from "@/lib/siteProjectsEn";
import { listJpProjects } from "@/lib/siteProjectsJp";
import { projects as clientProjectsEn } from "@/lib/projects";
import { projects as clientProjectsJp } from "@/lib/projects_jp";
import { siteUrl } from "@/lib/siteUrl";

const now = new Date();
const basicAuthEnabled = Boolean(process.env.BASIC_AUTH_USER && process.env.BASIC_AUTH_PASSWORD);

const abs = (path: string) => `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
const page = (path: string): MetadataRoute.Sitemap[number] => ({ url: abs(path), lastModified: now });

// EN + JA entries that list each other as hreflang alternates
const pair = (enPath: string, jaPath: string): MetadataRoute.Sitemap => {
  const alternates = { languages: { en: abs(enPath), ja: abs(jaPath) } };
  return [
    { ...page(enPath), alternates },
    { ...page(jaPath), alternates },
  ];
};

// Case studies are linked as /description pages; the bare /project/[slug] routes only back the modal.
const caseStudy = (lang: "en" | "jp", slug: string) => `/${lang}/project/${slug}/description`;

export default function sitemap(): MetadataRoute.Sitemap {
  const en = listEnProjects();
  const jp = listJpProjects();
  const jpSet = new Set(jp.map((p) => p.slug));
  const enSet = new Set(en.map((p) => p.slug));

  const staticPages: MetadataRoute.Sitemap = [
    ...pair("/en", "/jp"),
    ...pair("/aboutme", "/about-me_jp"),
    ...pair("/guardians_en", "/guardians_jp"),
    ...(basicAuthEnabled ? [] : pair("/clientworks", "/clientworks_jp")),
  ];

  const siteProjectPages: MetadataRoute.Sitemap = [
    ...en.flatMap((p) =>
      jpSet.has(p.slug) ? pair(caseStudy("en", p.slug), caseStudy("jp", p.slug)) : [page(caseStudy("en", p.slug))],
    ),
    ...jp.filter((p) => !enSet.has(p.slug)).map((p) => page(caseStudy("jp", p.slug))),
  ];

  // Client works stay out of the sitemap while Basic Auth protects them
  const clientWorkSlugs = new Set([
    ...clientProjectsEn.map((p) => p.slug),
    ...clientProjectsJp.map((p) => p.slug),
  ]);
  const clientWorksPages: MetadataRoute.Sitemap = basicAuthEnabled
    ? []
    : Array.from(clientWorkSlugs).flatMap((slug) =>
        pair(`/clientworks/${slug}/description`, `/clientworks_jp/${slug}/description`),
      );

  return [...staticPages, ...siteProjectPages, ...clientWorksPages];
}
