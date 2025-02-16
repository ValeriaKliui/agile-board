import { AvatarsSelection } from "@components/AvatarsSelection";
import userStore from "@store/user/userStore";
import { Button } from "antd";
import { useState } from "react";

export const Avatars = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleAvatarEditing = () => setIsEditing((prev) => !prev);
  const onAvatarSave = (selectedAvatar) => {
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
      {isEditing && <AvatarsSelection onSave={onAvatarSave} />}
    </>
  );
};
