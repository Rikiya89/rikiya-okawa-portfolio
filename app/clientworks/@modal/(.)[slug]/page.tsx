import Modal from "@/components/common/Modal";
import ProjectDetail from "../../[slug]/ProjectDetail";

export default function InterceptedModal({ params }: { params: { slug: string } }) {
  return (
    <Modal key={`${params.slug}-${Date.now()}`}>
      <ProjectDetail slug={params.slug} inModal />
    </Modal>
  );
}
