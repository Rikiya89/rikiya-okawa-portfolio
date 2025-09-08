import Modal from "@/components/common/Modal";
import ProjectDetail from "../../[slug]/ProjectDetail";

export default function InterceptedModal({ params, searchParams }: { params: { slug: string }; searchParams: { m?: string } }) {
  const modalKey = `${params.slug}-${searchParams?.m ?? ""}`;
  return (
    <Modal key={modalKey}>
      <ProjectDetail slug={params.slug} inModal />
    </Modal>
  );
}
