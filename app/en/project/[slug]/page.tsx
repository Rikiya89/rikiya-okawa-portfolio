import type { Metadata } from "next";
import EnProjectDetail from "../ProjectDetail";
import { getEnProject } from "@/lib/siteProjectsEn";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getEnProject(slug);
  const title = p ? `${p.title} | Projects` : `Projects | Not Found`;
  const description = p?.description ?? "Project details";
  const url = `/en/project/${slug}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Rikiya Okawa Portfolio",
      images: p ? [{ url: p.src }] : [],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: p ? [p.src] : [],
      creator: "@rikiya_okawa",
    },
    alternates: {
      languages: {
        en: `/en/project/${slug}`,
        ja: `/jp/project/${slug}`,
      },
    },
  };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  return (
    <main className="container mx-auto px-5 py-12">
      <EnProjectDetail slug={slug} inModal={false} />
    </main>
  );
}
