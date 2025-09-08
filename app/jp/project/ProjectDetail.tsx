// app/jp/project/ProjectDetail.tsx
"use client";
import { useRouter } from "next/navigation";
import { useModalControl } from "@/components/common/Modal";
import { getJpProject } from "@/lib/siteProjectsJp";
import ProjectModalContent from "@/components/common/ProjectModalContent";

export default function JpProjectDetail({ slug, inModal = false }: { slug: string; inModal?: boolean }) {
  const router = useRouter();
  const modalCtl = useModalControl();
  const p = getJpProject(slug);
  if (!p) return <div className="text-white">Loading...</div>;

  const handleClose = () => {
    if (inModal && modalCtl) {
      modalCtl.closeWith(() => router.replace("/jp", { scroll: false }));
    } else {
      router.replace("/jp", { scroll: false });
    }
  };

  return (
    <ProjectModalContent
      title={p.title}
      description={p.description}
      src={p.src}
      visitHref={p.url}
      onClose={handleClose}
      visitText="サイトを見る"
      closeText="一覧に戻る"
    />
  );
}
