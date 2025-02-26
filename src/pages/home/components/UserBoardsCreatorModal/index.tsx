import { Modal, ModalProps } from "@shared/components"

export const UserBoardsCreatorModal = ({ isModalOpen, onClose, children }: ModalProps) => {
    return <Modal isModalOpen={isModalOpen} footer={false} onClose={onClose} onCancel={onClose}>
        {children}
    </Modal>
}