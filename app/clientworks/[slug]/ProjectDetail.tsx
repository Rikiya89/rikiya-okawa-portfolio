// app/clientworks/[slug]/ProjectDetail.tsx
"use client";
import type { ProjectDetails } from "@/lib/projectDetails";
import type { Project } from "@/lib/projects";
import { useRouter } from "next/navigation";
import { useModalControl } from "@/components/common/Modal";
import ProjectModalContent from "@/components/common/ProjectModalContent";
import { navigateWithFallback } from "@/components/common/navigateWithFallback";

type Props = {
  slug: string;
  inModal?: boolean;
  initialProject: Project;
  initialDetails?: ProjectDetails | null;
};

export default function ProjectDetail({
  slug,
  inModal = false,
  initialProject,
  initialDetails = null,
}: Props) {
  const router = useRouter();
  const modalCtl = useModalControl();
  const project = initialProject;
  const details = initialDetails;

  const handleVisit = () => {
    const href = `/clientworks/${slug}/description`;
    if (inModal && modalCtl) {
      modalCtl.closeWith(() =>
        navigateWithFallback(router, href, { method: "replace", scroll: true }),
      );
    } else {
      router.push(href, { scroll: true });
    }
  };

  const handleBackToList = () => {
    if (inModal && modalCtl) {
      modalCtl.closeWith(() =>
        navigateWithFallback(router, "/clientworks", { method: "replace", scroll: false }),
      );
    } else {
      navigateWithFallback(router, "/clientworks", { method: "replace", scroll: false });
    }
  };

  const p = project;
  const description = details?.intro ?? p.description;
  return (
    <ProjectModalContent
      title={p.title}
      description={description}
      role={details?.role}
      techStack={details?.techStack}
      techHeading="Technologies"
      src={p.src}
      visitHref={inModal ? undefined : `/clientworks/${slug}/description`}
      onVisit={inModal ? handleVisit : undefined}
      onClose={handleBackToList}
      visitText="View Details"
      closeText="Back to List"
    />
  );
}
