// app/clientworks/[slug]/ProjectDetail.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/lib/projects";
import { getProjectDetails, type ProjectDetails } from "@/lib/projectDetails";
import { useRouter } from "next/navigation";
import { useModalControl } from "@/components/common/Modal";
import { useEffect, useState } from "react";
import ProjectModalContent from "@/components/common/ProjectModalContent";

export default function ProjectDetail({ slug, inModal = false }: { slug: string; inModal?: boolean }) {
  const [project, setProject] = useState<{ title: string; description: string; src: string } | null>(null);
  const [details, setDetails] = useState<ProjectDetails | null>(null);
  const router = useRouter();
  const modalCtl = useModalControl();

  useEffect(() => {
    getProject(slug).then(setProject).catch(() => setProject(null));
    getProjectDetails(slug).then(setDetails).catch(() => setDetails(null));
  }, [slug]);

  const handleVisit = () => {
    const href = `/clientworks/${slug}/description`;
    if (inModal && modalCtl) {
      modalCtl.closeWith(() => {
        router.replace("/clientworks", { scroll: false });
        // Ensure the parallel modal slot is cleared before pushing
        requestAnimationFrame(() => requestAnimationFrame(() => router.push(href)));
      });
    } else {
      router.push(href);
    }
  };

  const handleBackToList = () => {
    if (inModal && modalCtl) {
      modalCtl.closeWith(() => router.replace("/clientworks", { scroll: false }));
    } else {
      router.replace("/clientworks", { scroll: false });
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
      techHeading="Technologies"
      src={p.src}
      visitHref={inModal ? undefined : `/clientworks/${slug}/description`}
      onVisit={inModal ? handleVisit : undefined}
      onClose={handleBackToList}
      visitText="Visit"
      closeText="Back to list"
    />
  );
}
