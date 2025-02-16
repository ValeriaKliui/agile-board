import { AvatarGallery } from "@components/AvatarsGallery";
import { Flex } from "@components/AvatarsSelection/styled";
import { AVATARS_DB_NAME } from "@constants/index";
import { useAvatars } from "@containers/useAvatars";
import userStore from "@store/user/userStore";
import { Button, Spin, UploadFile } from "antd";
import { useState } from "react";

export const AvatarsSelection = ({ onSave }) => {
  const [selectedAvatar, selectAvatar] = useState<string | null>(null);

  const {
    onRemove,
    onUpload,
    avatars: userAvatars,
    isAvatarsLoading: isUserAvatarsLoading,
    errorLoading: errorUser,
  } = useAvatars(AVATARS_DB_NAME, userStore.userID);

  const {
    avatars: defaultAvatars,
    isAvatarsLoading: isDefaultAvatarsLoading,
    errorLoading: errorDefault,
  } = useAvatars(AVATARS_DB_NAME, "default");

  const handleSelection = (elem: UploadFile) => {
    const { uid = "", url = "" } = elem;
    selectAvatar(uid ?? url);
  };

  const onAvatarSave = () => {
    onSave(selectedAvatar);
  };

  const isLoading = isDefaultAvatarsLoading || isUserAvatarsLoading;

  return (
    <Flex vertical gap="middle" align="flex-start">
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <AvatarGallery
            title="Default Avatars"
            filesData={defaultAvatars}
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
            handleClick={handleSelection}
            selectedAvatar={selectedAvatar}
            onRemove={onRemove}
            onUpload={onUpload}
            maxPhotoAmount={4}
            isEditable
          />
        </>
      )}

      <Button onClick={onAvatarSave} type="primary">
        Save new avatar
      </Button>
    </Flex>
  );
};
