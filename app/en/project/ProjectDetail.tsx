// app/en/project/ProjectDetail.tsx
"use client";
import { useRouter } from "next/navigation";
import { useModalControl } from "@/components/common/Modal";
import { getEnProject } from "@/lib/siteProjectsEn";
import ProjectModalContent from "@/components/common/ProjectModalContent";
import { getProjectDetails, type ProjectDetails } from "@/lib/projectDetails";
import { useEffect, useState } from "react";

export default function EnProjectDetail({ slug, inModal = false }: { slug: string; inModal?: boolean }) {
  const router = useRouter();
  const modalCtl = useModalControl();
  const [details, setDetails] = useState<ProjectDetails | null>(null);
  const p = getEnProject(slug);

  useEffect(() => {
    getProjectDetails(slug).then(setDetails).catch(() => setDetails(null));
  }, [slug]);

  if (!p) return <div className="text-white">Loading...</div>;

  const handleVisit = () => {
    const href = `/en/project/${slug}/description`;
    if (inModal && modalCtl) {
      modalCtl.closeWith(() => {
        router.replace("/en", { scroll: false });
        requestAnimationFrame(() => requestAnimationFrame(() => router.push(href)));
      });
    } else {
      router.push(href);
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
      title={p.title}
      description={details?.intro ?? p.description}
      role={details?.role}
      techStack={details?.techStack}
      src={p.src}
      onVisit={handleVisit}
      onClose={handleClose}
      visitText="Visit"
      closeText="Back to list"
    />
  );
}
