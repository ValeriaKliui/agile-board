import { CreatingBoardStepsForm } from "@pages/home/components";
import { Modal, } from "@shared/components";
import { UseModalReturns } from "@shared/hooks";

export const CreatingBoardStepsModal = ({
  isModalOpen,
  closeModal,
}: Omit<UseModalReturns, 'showModal'>) => {
  return (
    <Modal visible={isModalOpen} footer={false} onCancel={closeModal}>
      <CreatingBoardStepsForm />
    </Modal>
  );
};
