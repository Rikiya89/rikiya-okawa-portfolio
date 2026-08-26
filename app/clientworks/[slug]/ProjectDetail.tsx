// app/clientworks/[slug]/ProjectDetail.tsx
"use client";
import type { Project } from "@/lib/projects";
import type { ProjectDetails } from "@/lib/projectDetails";
import { useRouter } from "next/navigation";
import { useModalControl } from "@/components/common/Modal";
import ProjectModalContent from "@/components/common/ProjectModalContent";
import { navigateWithFallback } from "@/components/common/navigateWithFallback";

type ProjectDetailProps = {
  project: Project;
  details: ProjectDetails | null;
  inModal?: boolean;
};

export default function ProjectDetail({ project, details, inModal = false }: ProjectDetailProps) {
  const router = useRouter();
  const modalCtl = useModalControl();
  const slug = project.slug;

  const handleVisit = () => {
    const href = `/clientworks/${slug}/description`;
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
      modalCtl.closeWith(() => router.replace("/clientworks", { scroll: false }));
    } else {
      router.replace("/clientworks", { scroll: false });
    }
  };

  const description = details?.intro ?? project.description;
  return (
    <ProjectModalContent
      title={project.title}
      description={description}
      role={details?.role}
      techStack={details?.techStack}
      techHeading="Technologies"
      src={project.src}
      imageAlt={project.alt}
      visitHref={inModal ? undefined : `/clientworks/${slug}/description`}
      onVisit={inModal ? handleVisit : undefined}
      onClose={handleBackToList}
      visitText="View Details"
      closeText="Back to List"
    />
  );
}
