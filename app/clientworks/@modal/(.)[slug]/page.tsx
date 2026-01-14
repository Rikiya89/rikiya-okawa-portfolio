import type { Metadata } from "next";
import Modal from "@/components/common/Modal";
import ProjectDetail from "../../[slug]/ProjectDetail";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

type Params = { params: Promise<{ slug: string }>; searchParams: Promise<{ m?: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: `/clientworks/${slug}` },
  };
}

export default async function InterceptedModal({ params, searchParams }: Params) {
  const { slug } = await params;
  const { m } = await searchParams;
  try {
    await getProject(slug);
  } catch {
    notFound();
  }
  const modalKey = `${slug}-${m ?? ""}`;
  return (
    <Modal key={modalKey}>
      <ProjectDetail slug={slug} inModal />
    </Modal>
  );
}
