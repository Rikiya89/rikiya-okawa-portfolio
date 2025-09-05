import type { Metadata } from "next";
import JpProjectDetail from "../ProjectDetail";
import { getJpProject } from "@/lib/siteProjectsJp";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = getJpProject(params.slug);
  return {
    title: p ? `${p.title} | プロジェクト` : `プロジェクト | Not Found`,
    description: p?.description ?? "Project details",
    openGraph: { title: p ? `${p.title} | プロジェクト` : `プロジェクト`, description: p?.description ?? "", images: p ? [p.src] : [] },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="container mx-auto px-5 py-12">
      <JpProjectDetail slug={params.slug} inModal={false} />
    </main>
  );
}

