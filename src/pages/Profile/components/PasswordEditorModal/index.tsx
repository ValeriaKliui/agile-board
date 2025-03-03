import { PasswordEditorFormManager } from "@pages/profile/components";
import { Modal, ModalProps } from "@shared/components";

export const PasswordEditorModal = ({ isModalOpen, onClose }: ModalProps) => {
    return <Modal isModalOpen={isModalOpen} onCancel={onClose} onClose={onClose}>
        <PasswordEditorFormManager />
    </Modal >
}