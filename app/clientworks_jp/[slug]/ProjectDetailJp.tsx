// app/clientworks_jp/[slug]/ProjectDetailJp.tsx
"use client";
import type { ProjectDetails } from "@/lib/projectDetails_jp";
import type { Project } from "@/lib/projects_jp";
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

export default function ProjectDetailJp({
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
    const href = `/clientworks_jp/${slug}/description`;
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
        navigateWithFallback(router, "/clientworks_jp", { method: "replace", scroll: false }),
      );
    } else {
      navigateWithFallback(router, "/clientworks_jp", { method: "replace", scroll: false });
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
      techHeading="使用技術"
      locale="jp"
      src={p.src}
      visitHref={inModal ? undefined : `/clientworks_jp/${slug}/description`}
      onVisit={inModal ? handleVisit : undefined}
      onClose={handleBackToList}
      visitText="詳細を見る"
      closeText="一覧に戻る"
    />
  );
}
