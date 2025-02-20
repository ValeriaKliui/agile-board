import { AVATARS_DB_NAME } from '@constants';
import { AvatarsSelection } from '@pages/profile/components';
import { useAvatars } from '@pages/profile/hooks';
import { userStore } from '@store/user';
import { UploadFile } from 'antd';
import { useState } from 'react';

import { AvatarsSelectionManagerProps } from './types';


export const AvatarsSelectionManager = ({ onSave }: AvatarsSelectionManagerProps) => {
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
