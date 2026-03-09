// app/en/project/ProjectDetail.tsx
"use client";
import { useRouter } from "next/navigation";
import { useModalControl } from "@/components/common/Modal";
import { getEnProject } from "@/lib/siteProjectsEn";
import ProjectModalContent from "@/components/common/ProjectModalContent";
import type { ProjectDetails } from "@/lib/projectDetails";
import { navigateWithFallback } from "@/components/common/navigateWithFallback";

type Props = {
  slug: string;
  inModal?: boolean;
  initialDetails?: ProjectDetails | null;
};

export default function EnProjectDetail({ slug, inModal = false, initialDetails = null }: Props) {
  const router = useRouter();
  const modalCtl = useModalControl();
  const p = getEnProject(slug);
  const details = initialDetails;

  if (!p) return <div className="text-white">Loading...</div>;

  const handleVisit = () => {
    const href = `/en/project/${slug}/description`;
    if (inModal && modalCtl) {
      modalCtl.closeWith(() =>
        navigateWithFallback(router, href, { method: "replace", scroll: true }),
      );
    } else {
      router.push(href, { scroll: true });
    }
  };

  const handleClose = () => {
    if (inModal && modalCtl) {
      modalCtl.closeWith(() =>
        navigateWithFallback(router, "/en", { method: "replace", scroll: false }),
      );
    } else {
      navigateWithFallback(router, "/en", { method: "replace", scroll: false });
    }
  };

  return (
    <ProjectModalContent
      title={p.title}
      description={details?.intro ?? p.description}
      role={details?.role}
      techStack={details?.techStack}
      src={p.src}
      onVisit={handleVisit}
      onClose={handleClose}
      visitText="View Details"
      closeText="Back to List"
    />
  );
}
