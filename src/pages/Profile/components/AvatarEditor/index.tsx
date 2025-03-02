import { AvatarsSelectionManager } from '@pages/profile/components';
import { Button } from '@shared/components';
import { userStore } from '@store';
import { useState } from 'react';

export const AvatarEditor = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleAvatarEditing = () => setIsEditing((prev) => !prev);

  const onAvatarSave = async (selectedAvatar: string | null) => {
    toggleAvatarEditing();
    if (selectedAvatar) await userStore.updateUser({ avatar: selectedAvatar });
  };

  return (
    <>
      {!isEditing && (
        <Button type="dashed" onClick={toggleAvatarEditing}>
          Change avatar
        </Button>
      )}
      {isEditing && <AvatarsSelectionManager onSave={onAvatarSave} />}</>
  );
};
