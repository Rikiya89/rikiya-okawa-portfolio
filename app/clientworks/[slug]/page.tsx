import type { Metadata } from "next";
import ProjectDetail from "./ProjectDetail";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  try {
    const p = await getProject(params.slug);
    return {
      title: `${p.title} | Client Works`,
      description: p.description,
      openGraph: { title: `${p.title} | Client Works`, description: p.description, images: [p.src] },
    };
  } catch {
    return { title: `Client Works`, description: `Project not found` };
  }
}

export default async function Page({ params }: Params) {
  try {
    await getProject(params.slug);
  } catch {
    notFound();
  }
  return (
    <main className="container mx-auto px-5 py-12">
      <ProjectDetail slug={params.slug} inModal={false} />
    </main>
  );
}
