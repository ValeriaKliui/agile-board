import { CreatingBoardStepsModal } from '@pages/home/components';
import { Button } from '@shared/components';
import { useModal } from '@shared/hooks';
import { observer } from 'mobx-react-lite';

export const UserBoardsInfo = observer(() => {
  const { showModal, isModalOpen, closeModal } = useModal();

  const onBoardCreate = () => {
    showModal();
  };

  return (
    <>
      <Button onClick={onBoardCreate}>Create board</Button>
      <CreatingBoardStepsModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
});
