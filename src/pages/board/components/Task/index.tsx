import { useDraggable } from '@dnd-kit/core';
import { TaskEditor } from '@pages/board/components/Task/Editor';
import { Modal } from '@shared/components';
import { useModal } from '@shared/hooks';
import { Task as TaskProps } from '@store';

import { CardStyled } from './styled';

export const Task = ({ title, taskID, description }: TaskProps) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: taskID });

    const { x = 0, y = 0 } = transform ?? {}

    const { isModalOpen, closeModal, openModal } = useModal();

    return (
        <>
            <CardStyled
                size='small'
                onClick={openModal}
                hoverable
                ref={setNodeRef}
                title={title}
                $transformX={x}
                $transformY={y}
                {...listeners}
                {...attributes}
            >
                {description}
            </CardStyled>
            <Modal isModalOpen={isModalOpen} onOk={closeModal} onClose={closeModal} onCancel={closeModal}>
                <TaskEditor title={title} taskID={taskID} description={description} />
            </Modal>
        </>
    );
};
