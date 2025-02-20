import { useState } from 'react';
import { Button } from '@shared/components';
import { userStore } from '@store/user';
import { AvatarsSelectionManager } from '@pages/Profile/components';

export const AvatarEditor = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleAvatarEditing = () => setIsEditing((prev) => !prev);

  const onAvatarSave = (selectedAvatar: string) => {
    toggleAvatarEditing();
    userStore.updateUser({ ...userStore.user, avatar: selectedAvatar });
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
