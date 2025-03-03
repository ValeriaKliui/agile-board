import { useTaskDraggable } from '@pages/board/hooks';
import { Modal } from '@shared/components';
import { useModal } from '@shared/hooks';
import { observer } from 'mobx-react-lite';

import { TaskCard } from './Card';
import { TaskContent } from './Content';
import { TaskWithUser } from './types';

export const Task = observer(({
    taskID,
    ...task
}: TaskWithUser) => {
    const { attributes, listeners, setNodeRef, x, y } = useTaskDraggable(taskID);
    const { isModalOpen, closeModal, openModal } = useModal();

    return (
        <>
            <TaskCard {...task} onClick={openModal} x={x} y={y} ref={setNodeRef} {...attributes} {...listeners} />
            <Modal isModalOpen={isModalOpen} onOk={closeModal} onClose={closeModal} onCancel={closeModal}>
                <TaskContent taskID={taskID} {...task} />
            </Modal>
        </>
    );
})
