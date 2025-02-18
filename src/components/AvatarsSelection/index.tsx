import { AvatarGallery } from '@components/AvatarsGallery';
import { Flex } from '@components/AvatarsSelection/styled';
import { Button, Spin } from 'antd';
import { AvatarsSelectionProps } from './interfaces';

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
          <AvatarGallery
            title="Default Avatars"
            filesData={defaultAvatars}
            error={errorDefault}
            handleClick={onSelect}
            selectedAvatar={selectedAvatar}
            maxPhotoAmount={defaultAvatars.length}
            onRemove={onRemove}
          />
          <AvatarGallery
            title="User Avatars"
            filesData={userAvatars}
            error={errorUser}
            handleClick={onSelect}
            selectedAvatar={selectedAvatar}
            onRemove={onRemove}
            onUpload={onUpload}
            maxPhotoAmount={4}
            isEditable
          />
        </>
      )}
      <Button onClick={onSave} type="primary">
        Update avatar
      </Button>
    </Flex>
  );
};
