import type { Metadata } from "next";
import ProjectDetail from "./ProjectDetail";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  try {
    const p = await getProject(params.slug);
    const title = `${p.title} | Client Works`;
    const description = p.description;
    const url = `/clientworks/${params.slug}`;
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url,
        siteName: "Rikiya Okawa Portfolio",
        images: [{ url: p.src }],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [p.src],
        creator: "@rikiya_okawa",
      },
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
