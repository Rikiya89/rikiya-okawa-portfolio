import type { Metadata } from "next";
import Modal from "@/components/common/Modal";
import JpProjectDetail from "../../../project/ProjectDetail";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: `/jp/project/${params.slug}` },
  };
}

export default function InterceptedModal({ params, searchParams }: { params: { slug: string }; searchParams: { m?: string } }) {
  const modalKey = `${params.slug}-${searchParams?.m ?? ""}`;
  return (
    <Modal key={modalKey} resetPath="/jp">
      <JpProjectDetail slug={params.slug} inModal />
    </Modal>
  );
}
