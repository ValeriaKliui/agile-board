import { AvatarEditorModal, PasswordEditorModal } from '@pages/profile/components';
import { Button } from '@shared/components';
import { useModal } from '@shared/hooks';

import { ProfileActions } from './styled';

export const ProfileInfoEditor = () => {
  const { openModal: openAvatarEditor, isModalOpen: isEditingAvatar, closeModal: closeAvatarEditor } = useModal()
  const { openModal: openPasswordEditor, isModalOpen: isChangingPassword, closeModal: closePasswordEditor } = useModal()

  return (
    <>
      <ProfileActions vertical gap='middle'>
        <Button type="dashed" size='large' onClick={openAvatarEditor}>
          Update avatar
        </Button>
        <Button type="dashed" size='large' onClick={openPasswordEditor}>
          Change password
        </Button>
      </ProfileActions>
      <AvatarEditorModal isModalOpen={isEditingAvatar} onClose={closeAvatarEditor} />
      <PasswordEditorModal isModalOpen={isChangingPassword} onClose={closePasswordEditor} />
    </>
  )
};
