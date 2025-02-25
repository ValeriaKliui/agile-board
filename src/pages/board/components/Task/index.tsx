import { useDraggable } from '@dnd-kit/core';
import { CardStyled } from './styled';
import { Modal } from '@shared/components';
import { useModal } from '@shared/hooks';
import { Task as TaskProps } from '@store/boards/types';

export const Task = ({ title, id }: TaskProps) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

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
            <Modal visible={isModalOpen} onOk={closeModal} onClose={closeModal} onCancel={closeModal}>
                OPENED
            </Modal>
        </>
    );
};
