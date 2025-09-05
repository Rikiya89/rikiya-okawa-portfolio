import Modal from "@/components/common/Modal";
import EnProjectDetail from "../../../project/ProjectDetail";

export default function InterceptedModal({ params }: { params: { slug: string } }) {
  return (
    <Modal key={`${params.slug}-${Date.now()}`} resetPath="/en">
      <EnProjectDetail slug={params.slug} inModal />
    </Modal>
  );
}
