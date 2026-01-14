import type { Metadata } from "next";
import Modal from "@/components/common/Modal";
import ProjectDetailJp from "../../[slug]/ProjectDetailJp";
import { getProject } from "@/lib/projects_jp";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: `/clientworks_jp/${slug}` },
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
    <Modal key={modalKey} resetPath="/clientworks_jp">
      <ProjectDetailJp slug={slug} inModal />
    </Modal>
  );
}
