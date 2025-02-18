import { useState } from 'react';
import userStore from '@store/user/userStore';
import { AvatarEditor } from '@components/AvatarEditor';

export const AvatarEditorContainer = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleAvatarEditing = () => setIsEditing((prev) => !prev);

  const onAvatarSave = (selectedAvatar: string) => {
    toggleAvatarEditing();
    userStore.updateUser({ ...userStore.user, avatar: selectedAvatar });
  };

  return (
    <AvatarEditor isEditing={isEditing} onToggleEdit={toggleAvatarEditing} onSave={onAvatarSave} />
  );
};
