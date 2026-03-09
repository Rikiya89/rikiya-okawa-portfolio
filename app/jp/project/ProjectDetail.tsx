// app/jp/project/ProjectDetail.tsx
"use client";
import { useRouter } from "next/navigation";
import { useModalControl } from "@/components/common/Modal";
import { getJpProject } from "@/lib/siteProjectsJp";
import ProjectModalContent from "@/components/common/ProjectModalContent";
import type { ProjectDetails } from "@/lib/projectDetails_jp";
import { navigateWithFallback } from "@/components/common/navigateWithFallback";

type Props = {
  slug: string;
  inModal?: boolean;
  initialDetails?: ProjectDetails | null;
};

export default function JpProjectDetail({ slug, inModal = false, initialDetails = null }: Props) {
  const router = useRouter();
  const modalCtl = useModalControl();
  const p = getJpProject(slug);
  const details = initialDetails;

  if (!p) return <div className="text-white">Loading...</div>;

  const handleVisit = () => {
    const href = `/jp/project/${slug}/description`;
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
        navigateWithFallback(router, "/jp", { method: "replace", scroll: false }),
      );
    } else {
      navigateWithFallback(router, "/jp", { method: "replace", scroll: false });
    }
  };

  return (
    <ProjectModalContent
      title={p.title}
      description={details?.intro ?? p.description}
      role={details?.role}
      techStack={details?.techStack}
      techHeading="使用技術"
      locale="jp"
      src={p.src}
      onVisit={handleVisit}
      onClose={handleClose}
      visitText="詳しく見る"
      closeText="一覧に戻る"
    />
  );
}
