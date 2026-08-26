// app/clientworks_jp/[slug]/ProjectDetailJp.tsx
"use client";
import type { Project } from "@/lib/projects_jp";
import type { ProjectDetails } from "@/lib/projectDetails_jp";
import { useRouter } from "next/navigation";
import { useModalControl } from "@/components/common/Modal";
import ProjectModalContent from "@/components/common/ProjectModalContent";
import { navigateWithFallback } from "@/components/common/navigateWithFallback";

type ProjectDetailJpProps = {
  project: Project;
  details: ProjectDetails | null;
  inModal?: boolean;
};

export default function ProjectDetailJp({ project, details, inModal = false }: ProjectDetailJpProps) {
  const router = useRouter();
  const modalCtl = useModalControl();
  const slug = project.slug;

  const handleVisit = () => {
    const href = `/clientworks_jp/${slug}/description`;
    if (inModal && modalCtl) {
      modalCtl.closeWith(() =>
        navigateWithFallback(router, `${href}?from=modal`, { method: "replace", scroll: true }),
      );
    } else {
      router.push(href, { scroll: true });
    }
  };

  const handleBackToList = () => {
    if (inModal && modalCtl) {
      modalCtl.closeWith(() => router.replace("/clientworks_jp", { scroll: false }));
    } else {
      router.replace("/clientworks_jp", { scroll: false });
    }
  };

  const description = details?.intro ?? project.description;
  return (
    <ProjectModalContent
      title={project.title}
      description={description}
      role={details?.role}
      techStack={details?.techStack}
      techHeading="使用技術"
      locale="jp"
      src={project.src}
      imageAlt={project.alt}
      visitHref={inModal ? undefined : `/clientworks_jp/${slug}/description`}
      onVisit={inModal ? handleVisit : undefined}
      onClose={handleBackToList}
      visitText="詳細を見る"
      closeText="一覧に戻る"
    />
  );
}
