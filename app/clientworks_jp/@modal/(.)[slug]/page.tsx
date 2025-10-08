import type { Metadata } from "next";
import Modal from "@/components/common/Modal";
import ProjectDetailJp from "../../[slug]/ProjectDetailJp";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: `/clientworks_jp/${params.slug}` },
  };
}

export default function InterceptedModal({ params, searchParams }: { params: { slug: string }; searchParams: { m?: string } }) {
  const modalKey = `${params.slug}-${searchParams?.m ?? ""}`;
  return (
    <Modal key={modalKey} resetPath="/clientworks_jp">
      <ProjectDetailJp slug={params.slug} inModal />
    </Modal>
  );
}
