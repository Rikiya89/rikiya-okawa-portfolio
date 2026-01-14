import type { Metadata } from "next";
import Modal from "@/components/common/Modal";
import JpProjectDetail from "../../../project/ProjectDetail";
import { getJpProject } from "@/lib/siteProjectsJp";
import { notFound } from "next/navigation";

type Params = { params: Promise<{ slug: string }>; searchParams: Promise<{ m?: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: `/jp/project/${slug}` },
  };
}

export default async function InterceptedModal({ params, searchParams }: Params) {
  const { slug } = await params;
  const { m } = await searchParams;
  if (!getJpProject(slug)) notFound();
  const modalKey = `${slug}-${m ?? ""}`;
  return (
    <Modal key={modalKey} resetPath="/jp">
      <JpProjectDetail slug={slug} inModal />
    </Modal>
  );
}
