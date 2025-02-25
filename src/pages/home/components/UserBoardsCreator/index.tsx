import { CreatingBoardStepsForm } from '@pages/home/components';
import { StepFormValues } from '@pages/home/types';
import { Button, Modal } from '@shared/components';
import { useModal } from '@shared/hooks';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';

import { UserBoardsCreatorProps } from './types';

export const UserBoardsCreator = observer(({ fetchUserBoards }: UserBoardsCreatorProps) => {
  const { openModal, isModalOpen, closeModal } = useModal();
  const [stepForm] = Form.useForm<StepFormValues>();

  const onBoardCreate = () => {
    openModal();
  };

  const onClose = async () => {
    closeModal();
    stepForm.resetFields();
    await fetchUserBoards()
  };

  return (
    <>
      <Button onClick={onBoardCreate} type='primary'> Create board</Button>
      <Modal visible={isModalOpen} footer={false} onClose={onClose} onCancel={onClose}>
        <CreatingBoardStepsForm stepForm={stepForm} onSubmit={onClose} />
      </Modal>
    </>
  );
});
