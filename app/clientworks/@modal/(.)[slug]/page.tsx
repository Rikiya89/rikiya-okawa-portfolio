import type { Metadata } from "next";
import Modal from "@/components/common/Modal";
import ProjectDetail from "../../[slug]/ProjectDetail";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: `/clientworks/${slug}` },
  };
}

export default async function InterceptedModal({ params, searchParams }: { params: { slug: string }; searchParams: { m?: string } }) {
  const { slug } = params;
  const { m } = searchParams;
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
