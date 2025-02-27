import { useDraggable } from '@dnd-kit/core';
import { Modal } from '@shared/components';
import { useModal } from '@shared/hooks';
import { Task as TaskProps } from '@store';

import { CardStyled } from './styled';

export const Task = ({ title, taskID }: TaskProps) => {
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
                $transformX={x}
                $transformY={y}
                title={title}
                {...listeners}
                {...attributes}
            >
                {title}
            </CardStyled>
            <Modal isModalOpen={isModalOpen} onOk={closeModal} onClose={closeModal} onCancel={closeModal}>
                OPENED
            </Modal>
        </>
    );
};
