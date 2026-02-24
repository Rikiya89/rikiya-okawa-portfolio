import type { Metadata } from "next";
import Modal from "@/components/common/Modal";
import ProjectDetailJp from "../../[slug]/ProjectDetailJp";
import { getProject } from "@/lib/projects_jp";
import { notFound } from "next/navigation";

type Params = { params: Promise<{ slug: string }>; searchParams: Promise<{ m?: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: `/clientworks_jp/${slug}` },
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
    <Modal key={modalKey} resetPath="/clientworks_jp">
      <ProjectDetailJp slug={slug} inModal />
    </Modal>
  );
}
