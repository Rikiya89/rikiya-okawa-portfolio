import type { Metadata } from "next";
import Modal from "@/components/common/Modal";
import EnProjectDetail from "../../../project/ProjectDetail";
import { getEnProject } from "@/lib/siteProjectsEn";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: `/en/project/${slug}` },
  };
}

export default async function InterceptedModal({ params, searchParams }: { params: { slug: string }; searchParams: { m?: string } }) {
  const { slug } = params;
  const { m } = searchParams;
  if (!getEnProject(slug)) notFound();
  const modalKey = `${slug}-${m ?? ""}`;
  return (
    <Modal key={modalKey} resetPath="/en">
      <EnProjectDetail slug={slug} inModal />
    </Modal>
  );
}
