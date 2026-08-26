// app/jp/project/ProjectDetail.tsx
"use client";
import { useRouter } from "next/navigation";
import { useModalControl } from "@/components/common/Modal";
import type { SiteProject } from "@/lib/siteProjectsJp";
import ProjectModalContent from "@/components/common/ProjectModalContent";
import type { ProjectDetails } from "@/lib/projectDetails_jp";
import { navigateWithFallback } from "@/components/common/navigateWithFallback";

type JpProjectDetailProps = {
  project: SiteProject;
  details: ProjectDetails | null;
  inModal?: boolean;
};

export default function JpProjectDetail({ project, details, inModal = false }: JpProjectDetailProps) {
  const router = useRouter();
  const modalCtl = useModalControl();
  const slug = project.slug;

  const handleVisit = () => {
    const href = `/jp/project/${slug}/description`;
    if (inModal && modalCtl) {
      modalCtl.closeWith(() =>
        navigateWithFallback(router, `${href}?from=modal`, { method: "replace", scroll: true }),
      );
    } else {
      router.push(href, { scroll: true });
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
      title={project.title}
      description={details?.intro ?? project.description}
      role={details?.role}
      techStack={details?.techStack}
      techHeading="使用技術"
      locale="jp"
      src={project.src}
      onVisit={handleVisit}
      onClose={handleClose}
      visitText="詳しく見る"
      closeText="一覧に戻る"
    />
  );
}
