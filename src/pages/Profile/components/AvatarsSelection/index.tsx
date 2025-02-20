import { SelectableUploader } from '@pages/profile/components';
import { Button, Flex, Spin } from 'antd';

import { AvatarsSelectionProps } from './types';

export const AvatarsSelection = ({
  isLoading,
  defaultAvatars,
  userAvatars,
  errorDefault,
  errorUser,
  selectedAvatar,
  onSelect,
  onSave,
  onRemove,
  onUpload,
}: AvatarsSelectionProps) => {
  return (
    <Flex vertical gap="middle" align="flex-start">
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <SelectableUploader
            title="Default Avatars"
            filesData={defaultAvatars}
            error={errorDefault}
            handleClick={onSelect}
            selectedAvatar={selectedAvatar}
            maxPhotoAmount={defaultAvatars.length}
            onRemove={onRemove}
            checkIsSelected={({ url, uid }) => (url || uid) === selectedAvatar}
          />
          <SelectableUploader
            title="User Avatars"
            filesData={userAvatars}
            error={errorUser}
            handleClick={onSelect}
            selectedAvatar={selectedAvatar}
            onRemove={onRemove}
            onUpload={onUpload}
            maxPhotoAmount={4}
            isEditable
            checkIsSelected={({ url, uid }) => (url || uid) === selectedAvatar}
          />
        </>
      )}
      <Button onClick={onSave} type="primary">
        Update avatar
      </Button>
    </Flex>
  );
};
