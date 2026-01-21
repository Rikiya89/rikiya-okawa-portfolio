// app/jp/project/ProjectDetail.tsx
"use client";
import { useRouter } from "next/navigation";
import { useModalControl } from "@/components/common/Modal";
import { getJpProject } from "@/lib/siteProjectsJp";
import ProjectModalContent from "@/components/common/ProjectModalContent";
import { getProjectDetails, type ProjectDetails } from "@/lib/projectDetails_jp";
import { useEffect, useState } from "react";

export default function JpProjectDetail({ slug, inModal = false }: { slug: string; inModal?: boolean }) {
  const router = useRouter();
  const modalCtl = useModalControl();
  const [details, setDetails] = useState<ProjectDetails | null>(null);
  const p = getJpProject(slug);
  if (!p) return <div className="text-white">Loading...</div>;

  useEffect(() => {
    getProjectDetails(slug).then(setDetails).catch(() => setDetails(null));
  }, [slug]);

  const handleVisit = () => {
    const href = `/jp/project/${slug}/description`;
    if (inModal && modalCtl) {
      modalCtl.closeWith(() => {
        router.replace("/jp", { scroll: false });
        requestAnimationFrame(() => requestAnimationFrame(() => router.push(href)));
      });
    } else {
      router.push(href);
    }
  };

  const handleClose = () => {
    if (inModal && modalCtl) {
      modalCtl.closeWith(() => router.replace("/jp", { scroll: false }));
    } else {
      router.replace("/jp", { scroll: false });
    }
  };

  return (
    <ProjectModalContent
      title={p.title}
      description={details?.intro ?? p.description}
      role={details?.role}
      techStack={details?.techStack}
      techHeading="使用技術"
      src={p.src}
      onVisit={handleVisit}
      onClose={handleClose}
      visitText="サイトを見る"
      closeText="一覧に戻る"
    />
  );
}
