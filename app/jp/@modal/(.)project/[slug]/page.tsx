import Modal from "@/components/common/Modal";
import JpProjectDetail from "../../../project/ProjectDetail";

export default function InterceptedModal({ params }: { params: { slug: string } }) {
  return (
    <Modal key={`${params.slug}-${Date.now()}`} resetPath="/jp">
      <JpProjectDetail slug={params.slug} inModal />
    </Modal>
  );
}
