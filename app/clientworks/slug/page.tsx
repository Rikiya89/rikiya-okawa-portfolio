import type { Metadata } from "next";
import ProjectDetail from "./ProjectDetail";
import { getProject } from "@/lib/projects";

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = await getProject(params.slug);
  return {
    title: `${p.title} | Client Works`,
    description: p.description,
    openGraph: { title: `${p.title} | Client Works`, description: p.description, images: [p.src] },
  };
}

export default async function Page({ params }: Params) {
  return (
    <main className="container mx-auto px-5 py-12">
      <ProjectDetail slug={params.slug} />
    </main>
  );
}