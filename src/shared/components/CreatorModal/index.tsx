import { Modal, ModalProps } from "@shared/components";

export const CreatorModal = ({ onClose, children, ...modalProps }: ModalProps) => {
    return <Modal footer={false} onCancel={onClose} onClose={onClose}{...modalProps}>{children}</Modal>
}