import Modal from "@/components/common/Modal";
import EnProjectDetail from "../../../project/ProjectDetail";

export default function InterceptedModal({ params, searchParams }: { params: { slug: string }; searchParams: { m?: string } }) {
  const modalKey = `${params.slug}-${searchParams?.m ?? ""}`;
  return (
    <Modal key={modalKey} resetPath="/en">
      <EnProjectDetail slug={params.slug} inModal />
    </Modal>
  );
}
