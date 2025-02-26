import { Modal, ModalProps } from "@shared/components";

export const ColumnCreatorModal = ({ onClose, children, ...modalProps }: ModalProps) => {
    return <Modal footer={false} onCancel={onClose} onClose={onClose}{...modalProps}>{children}</Modal>
}