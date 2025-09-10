import type { Metadata } from "next";
import EnProjectDetail from "../ProjectDetail";
import { getEnProject } from "@/lib/siteProjectsEn";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = getEnProject(params.slug);
  const title = p ? `${p.title} | Projects` : `Projects | Not Found`;
  const description = p?.description ?? "Project details";
  const url = `/en/project/${params.slug}`;
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
      creator: "@rikiya_okawa", // update if you have a handle
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
      <EnProjectDetail slug={params.slug} inModal={false} />
    </main>
  );
}
