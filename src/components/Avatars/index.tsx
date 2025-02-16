import { AvatarsSelection } from "@components/AvatarsSelection";
import { AvatarContainer } from "@containers/AvatarContainer";
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
      <AvatarContainer />
      {!isEditing && (
        <Button type="primary" onClick={toggleAvatarEditing}>
          Change avatar
        </Button>
      )}
      {isEditing && <AvatarsSelection onSave={onAvatarSave} />}
    </>
  );
};
