import type { Metadata } from "next";
import ProjectDetailJp from "./ProjectDetailJp";
import { getProject } from "@/lib/projects_jp";
import { notFound } from "next/navigation";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  try {
    const p = await getProject(slug);
    const title = `${p.title} | クライアントワーク`;
    const description = p.description;
    const url = `/clientworks_jp/${slug}`;
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
    return { title: `クライアントワーク`, description: `プロジェクトが見つかりませんでした` };
  }
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  try {
    await getProject(slug);
  } catch {
    notFound();
  }
  return (
    <main className="container mx-auto px-5 py-12">
      <ProjectDetailJp slug={slug} inModal={false} />
    </main>
  );
}
