import type { Metadata } from "next";
import Modal from "@/components/common/Modal";
import ProjectDetail from "../../[slug]/ProjectDetail";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: `/clientworks/${params.slug}` },
  };
}

export default function InterceptedModal({ params, searchParams }: { params: { slug: string }; searchParams: { m?: string } }) {
  const modalKey = `${params.slug}-${searchParams?.m ?? ""}`;
  return (
    <Modal key={modalKey}>
      <ProjectDetail slug={params.slug} inModal />
    </Modal>
  );
}
