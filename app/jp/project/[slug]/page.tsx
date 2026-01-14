import type { Metadata } from "next";
import JpProjectDetail from "../ProjectDetail";
import { getJpProject } from "@/lib/siteProjectsJp";
import { notFound } from "next/navigation";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getJpProject(slug);
  const title = p ? `${p.title} | プロジェクト` : `プロジェクト | Not Found`;
  const description = p?.description ?? "Project details";
  const url = `/jp/project/${slug}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Rikiya Okawa Portfolio",
      images: p ? [{ url: p.src }] : [],
      locale: "ja_JP",
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
  const p = getJpProject(slug);
  if (!p) notFound();
  return (
    <main className="container mx-auto px-5 py-12">
      <JpProjectDetail slug={slug} inModal={false} />
    </main>
  );
}
