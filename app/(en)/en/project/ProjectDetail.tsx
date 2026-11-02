// app/en/project/ProjectDetail.tsx
"use client";
import { useRouter } from "next/navigation";
import { useModalControl } from "@/components/common/Modal";
import type { SiteProject } from "@/lib/siteProjectsEn";
import ProjectModalContent from "@/components/common/ProjectModalContent";
import type { ProjectDetails } from "@/lib/projectDetails";
import { navigateWithFallback } from "@/components/common/navigateWithFallback";

type EnProjectDetailProps = {
  project: SiteProject;
  details: ProjectDetails | null;
  inModal?: boolean;
};

export default function EnProjectDetail({ project, details, inModal = false }: EnProjectDetailProps) {
  const router = useRouter();
  const modalCtl = useModalControl();
  const slug = project.slug;

  const handleVisit = () => {
    const href = `/en/project/${slug}/description`;
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
      modalCtl.closeWith(() => router.replace("/en", { scroll: false }));
    } else {
      router.replace("/en", { scroll: false });
    }
  };

  return (
    <ProjectModalContent
      title={project.title}
      description={details?.intro ?? project.description}
      role={details?.role}
      techStack={details?.techStack}
      src={project.src}
      onVisit={handleVisit}
      onClose={handleClose}
      visitText="View Details"
      closeText="Back to List"
    />
  );
}
