// app/en/project/ProjectDetail.tsx
"use client";
import { useRouter } from "next/navigation";
import { useModalControl } from "@/components/common/Modal";
import { getEnProject } from "@/lib/siteProjectsEn";
import ProjectModalContent from "@/components/common/ProjectModalContent";

export default function EnProjectDetail({ slug, inModal = false }: { slug: string; inModal?: boolean }) {
  const router = useRouter();
  const modalCtl = useModalControl();
  const p = getEnProject(slug);
  if (!p) return <div className="text-white">Loading...</div>;

  const handleClose = () => {
    if (inModal && modalCtl) {
      modalCtl.closeWith(() => router.replace("/en"));
    } else {
      router.replace("/en");
    }
  };

  return (
    <ProjectModalContent
      title={p.title}
      description={p.description}
      src={p.src}
      visitHref={p.url}
      onClose={handleClose}
      visitText="Visit"
      closeText="Back to list"
    />
  );
}
