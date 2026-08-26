import type { Metadata } from "next";
import JpProjectDetail from "../ProjectDetail";
import { getJpProject } from "@/lib/siteProjectsJp";
import { getProjectDetails } from "@/lib/projectDetails_jp";
import Modal from "@/components/common/Modal";
import { notFound } from "next/navigation";

type Params = { params: Promise<{ slug: string }> };
type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ m?: string | string[] }>;
};

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

export default async function Page({ params, searchParams }: PageProps) {
  const [{ slug }, { m }] = await Promise.all([params, searchParams]);
  const p = getJpProject(slug);
  if (!p) notFound();
  const details = await getProjectDetails(slug);

  const modalToken = Array.isArray(m) ? m[0] : m;
  if (modalToken) {
    return (
      <Modal key={`${slug}-${modalToken}`} resetPath="/jp">
        <JpProjectDetail project={p} details={details} inModal />
      </Modal>
    );
  }

  return (
    <main className="container mx-auto px-5 py-12">
      <JpProjectDetail project={p} details={details} inModal={false} />
    </main>
  );
}
