import type { Metadata } from "next";
import JpProjectDetail from "../ProjectDetail";
import { getJpProject } from "@/lib/siteProjectsJp";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = getJpProject(params.slug);
  const title = p ? `${p.title} | プロジェクト` : `プロジェクト | Not Found`;
  const description = p?.description ?? "Project details";
  const url = `/jp/project/${params.slug}`;
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
        en: `/en/project/${params.slug}`,
        ja: `/jp/project/${params.slug}`,
      },
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="container mx-auto px-5 py-12">
      <JpProjectDetail slug={params.slug} inModal={false} />
    </main>
  );
}
