// app/clientworks_jp/[slug]/ProjectDetailJp.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/lib/projects_jp";
import { getProjectDetails, type ProjectDetails } from "@/lib/projectDetails_jp";
import { useRouter } from "next/navigation";
import { useModalControl } from "@/components/common/Modal";
import { useEffect, useState } from "react";
import ProjectModalContent from "@/components/common/ProjectModalContent";

export default function ProjectDetailJp({ slug, inModal = false }: { slug: string; inModal?: boolean }) {
  const [project, setProject] = useState<{ title: string; description: string; src: string } | null>(null);
  const [details, setDetails] = useState<ProjectDetails | null>(null);
  const router = useRouter();
  const modalCtl = useModalControl();

  useEffect(() => {
    getProject(slug).then(setProject).catch(() => setProject(null));
    getProjectDetails(slug).then(setDetails).catch(() => setDetails(null));
  }, [slug]);

  const handleVisit = () => {
    const href = `/clientworks_jp/${slug}/description`;
    if (inModal && modalCtl) {
      modalCtl.closeWith(() => {
        router.replace("/clientworks_jp", { scroll: false });
        // Ensure the parallel modal slot is cleared before pushing
        requestAnimationFrame(() => requestAnimationFrame(() => router.push(href)));
      });
    } else {
      router.push(href);
    }
  };

  const handleBackToList = () => {
    if (inModal && modalCtl) {
      modalCtl.closeWith(() => router.replace("/clientworks_jp", { scroll: false }));
    } else {
      router.replace("/clientworks_jp", { scroll: false });
    }
  };

  if (!project) return <div className="text-white">Loading...</div>;

  const p = project;
  const description = details?.intro ?? p.description;
  return (
    <ProjectModalContent
      title={p.title}
      description={description}
      role={details?.role}
      techStack={details?.techStack}
      techHeading="使用技術"
      locale="jp"
      src={p.src}
      visitHref={inModal ? undefined : `/clientworks_jp/${slug}/description`}
      onVisit={inModal ? handleVisit : undefined}
      onClose={handleBackToList}
      visitText="詳細を見る"
      closeText="一覧に戻る"
    />
  );
}
