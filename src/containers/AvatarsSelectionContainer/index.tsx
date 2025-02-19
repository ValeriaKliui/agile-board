import { useState } from 'react';
import { AvatarsSelection } from '@components/AvatarsSelection';
import { userStore } from '@store/user';
import { UploadFile } from 'antd';
import { AVATARS_DB_NAME } from '@constants/common';
import { useAvatars } from '@hooks';

export const AvatarsSelectionContainer = ({ onSave }) => {
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
  } = useAvatars(AVATARS_DB_NAME, 'default');

  const handleSelection = (elem: UploadFile) => {
    selectAvatar(elem.url || '');
  };

  const onAvatarSave = () => {
    onSave(selectedAvatar);
  };

  return (
    <AvatarsSelection
      isLoading={isDefaultAvatarsLoading || isUserAvatarsLoading}
      defaultAvatars={defaultAvatars}
      userAvatars={userAvatars}
      errorDefault={errorDefault}
      errorUser={errorUser}
      selectedAvatar={selectedAvatar}
      onSelect={handleSelection}
      onSave={onAvatarSave}
      onRemove={onRemove}
      onUpload={onUpload}
    />
  );
};
