import { Button } from '@components/Button';
import { CreatingBoardStepsModal } from '@containers/CreatingBoardStepsModal';
import { useModal } from '@hooks/useModal';
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
