import type { Metadata } from "next";
import Modal from "@/components/common/Modal";
import JpProjectDetail from "../../../project/ProjectDetail";
import { getJpProject } from "@/lib/siteProjectsJp";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: `/jp/project/${slug}` },
  };
}

export default async function InterceptedModal({ params, searchParams }: { params: { slug: string }; searchParams: { m?: string } }) {
  const { slug } = params;
  const { m } = searchParams;
  if (!getJpProject(slug)) notFound();
  const modalKey = `${slug}-${m ?? ""}`;
  return (
    <Modal key={modalKey} resetPath="/jp">
      <JpProjectDetail slug={slug} inModal />
    </Modal>
  );
}
