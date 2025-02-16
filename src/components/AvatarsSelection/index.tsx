import { AvatarGallery } from "@components/AvatarsGallery";
import { useAvatars } from "@containers/useAvatars";
import userStore from "@store/user/userStore";
import { Button, Flex, UploadFile } from "antd";
import { useState } from "react";

const { VITE_AVATARS_DB_NAME } = import.meta.env;

export const AvatarsSelection = ({ onSave }) => {
  const [selectedAvatar, selectAvatar] = useState<string | null>(null);

  const {
    onRemove,
    onUpload,
    avatars: userAvatars,
    isAvatarsLoading: isUserAvatarsLoading,
    errorLoading: errorUser,
  } = useAvatars(VITE_AVATARS_DB_NAME, userStore.userID);

  const {
    avatars: defaultAvatars,
    isAvatarsLoading: isDefaultAvatarsLoading,
    errorLoading: errorDefault,
  } = useAvatars(VITE_AVATARS_DB_NAME, "default");

  const handleSelection = (elem: UploadFile) => {
    const { uid = "", url = "" } = elem;
    selectAvatar(uid ?? url);
  };

  const onAvatarSave = () => {
    onSave(selectedAvatar);
  };

  return (
    <Flex justify="space-between">
      <AvatarGallery
        title="Default Avatars"
        filesData={defaultAvatars}
        isLoading={isDefaultAvatarsLoading}
        error={errorDefault}
        handleClick={handleSelection}
        selectedAvatar={selectedAvatar}
        maxPhotoAmount={defaultAvatars.length}
        onRemove={onRemove}
      />
      <AvatarGallery
        title="User Avatars"
        filesData={userAvatars}
        error={errorUser}
        isLoading={isUserAvatarsLoading}
        handleClick={handleSelection}
        selectedAvatar={selectedAvatar}
        onRemove={onRemove}
        onUpload={onUpload}
        isEditable
      />
      <Button onClick={onAvatarSave}>Save</Button>
    </Flex>
  );
};
