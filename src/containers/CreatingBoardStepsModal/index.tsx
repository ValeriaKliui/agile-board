import { Modal } from '@components/Modal';
import { CreatingBoardStepsForm } from '@containers/CreatingBoardStepsForm';
import { UseModalReturns } from '@hooks/useModal';

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
