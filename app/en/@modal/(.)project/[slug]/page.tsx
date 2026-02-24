import type { Metadata } from "next";
import Modal from "@/components/common/Modal";
import EnProjectDetail from "../../../project/ProjectDetail";
import { getEnProject } from "@/lib/siteProjectsEn";
import { notFound } from "next/navigation";

type Params = { params: Promise<{ slug: string }>; searchParams: Promise<{ m?: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: `/en/project/${slug}` },
  };
}

export default async function InterceptedModal({ params, searchParams }: Params) {
  const { slug } = await params;
  const { m } = await searchParams;
  if (!getEnProject(slug)) notFound();
  const modalKey = `${slug}-${m ?? ""}`;
  return (
    <Modal key={modalKey} resetPath="/en">
      <EnProjectDetail slug={slug} inModal />
    </Modal>
  );
}
