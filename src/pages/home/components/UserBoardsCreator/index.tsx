import { CreatingBoardStepsForm, } from '@pages/home/components';
import { StepFormValues } from '@pages/home/types';
import { Button, CreatorModal, } from '@shared/components';
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
      <Button size='large' onClick={onBoardCreate} type='primary'> Create board</Button>
      <CreatorModal isModalOpen={isModalOpen} onClose={closeModal}>
        <CreatingBoardStepsForm stepForm={stepForm} onSubmit={onClose} />
      </CreatorModal>
    </>
  );
});

