import type { Metadata } from "next";
import EnProjectDetail from "../ProjectDetail";
import { getEnProject } from "@/lib/siteProjectsEn";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = getEnProject(params.slug);
  return {
    title: p ? `${p.title} | Projects` : `Projects | Not Found`,
    description: p?.description ?? "Project details",
    openGraph: { title: p ? `${p.title} | Projects` : `Projects`, description: p?.description ?? "", images: p ? [p.src] : [] },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="container mx-auto px-5 py-12">
      <EnProjectDetail slug={params.slug} inModal={false} />
    </main>
  );
}

