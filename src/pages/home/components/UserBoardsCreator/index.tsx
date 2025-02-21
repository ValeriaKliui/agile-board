import { CreatingBoardStepsForm } from '@pages/home/components';
import { Button, Modal } from '@shared/components';
import { useModal } from '@shared/hooks';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';

export const UserBoardsCreator = observer(() => {
  const { showModal, isModalOpen, closeModal } = useModal();
  const [stepForm] = Form.useForm();

  const onBoardCreate = () => {
    showModal();
  };

  const onClose = () => {
    closeModal();
    stepForm.resetFields();
  };

  return (
    <>
      <Button onClick={onBoardCreate}>Create board</Button>
      <Modal visible={isModalOpen} footer={false} onClose={onClose} onCancel={onClose}>
        <CreatingBoardStepsForm stepForm={stepForm} />
      </Modal>
    </>
  );
});
