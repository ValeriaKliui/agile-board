import { TaskContent } from '@pages/board/components';
import { Modal } from '@shared/components';
import { useModal } from '@shared/hooks';
import { observer } from 'mobx-react-lite';

import { TaskDraggable } from './Draggable';
import { TaskWithUser } from './types';

export const Task = observer(({ taskID, ...task }: TaskWithUser) => {
  const { isModalOpen, closeModal, openModal } = useModal();

  return (
    <>
      <TaskDraggable taskID={taskID} onClick={openModal} {...task} />
      <Modal isModalOpen={isModalOpen} onOk={closeModal} onClose={closeModal} onCancel={closeModal}>
        <TaskContent taskID={taskID} {...task} />
      </Modal>
    </>
  );
});
