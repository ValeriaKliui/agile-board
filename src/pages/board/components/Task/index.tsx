import { useTaskDraggable } from '@pages/board/hooks';
import { Modal } from '@shared/components';
import { useModal } from '@shared/hooks';
import { Task as TaskProps } from '@store';

import { TaskCard } from './Card';
import { TaskContent } from './Content';

export const Task = ({ title, taskID, description }: TaskProps) => {
    const { attributes, listeners, setNodeRef, x, y } = useTaskDraggable(taskID);

    const { isModalOpen, closeModal, openModal } = useModal();

    return (
        <>
            <TaskCard onClick={openModal} x={x} y={y} ref={setNodeRef} {...attributes} {...listeners} />
            <Modal isModalOpen={isModalOpen} onOk={closeModal} onClose={closeModal} onCancel={closeModal}>
                <TaskContent title={title} taskID={taskID} description={description} />
            </Modal>
        </>
    );
};
