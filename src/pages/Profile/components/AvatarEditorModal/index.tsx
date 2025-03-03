import { AvatarsSelectionManager } from "@pages/profile/components";
import { Modal, ModalProps } from "@shared/components";
import { userStore } from "@store";
import { observer } from "mobx-react-lite";

export const AvatarEditorModal = observer(({ isModalOpen, onClose }: ModalProps) => {
    const isUpdating = userStore.loadingUser;

    const onAvatarSave = async (selectedAvatar: string | null) => {
        if (selectedAvatar) await userStore.updateUser({ avatar: selectedAvatar });
        onClose?.()
    };

    return <Modal isModalOpen={isModalOpen} onCancel={onClose} onClose={onClose}>
        <AvatarsSelectionManager onSave={onAvatarSave} isUpdating={isUpdating} />
    </Modal >
})