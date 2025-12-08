import type { Metadata } from "next";
import Modal from "@/components/common/Modal";
import ProjectDetail from "../../[slug]/ProjectDetail";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: `/clientworks/${slug}` },
  };
}

export default async function InterceptedModal({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ m?: string }> }) {
  const { slug } = await params;
  const { m } = await searchParams;
  const modalKey = `${slug}-${m ?? ""}`;
  return (
    <Modal key={modalKey}>
      <ProjectDetail slug={slug} inModal />
    </Modal>
  );
}
