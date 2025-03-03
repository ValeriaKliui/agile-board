import { SelectableUploader } from '@pages/profile/components';
import { Button, Flex, Spin } from 'antd';

import { AvatarsContainer,Container } from './styled';
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
  onUpload, isUpdating
}: AvatarsSelectionProps) => {
  return (
    <Container vertical gap="large" align={isLoading ? 'center' : "flex-start"}>
      {
        isLoading ? (
          <Spin size='large' />
        ) : (
          <AvatarsContainer vertical >
            <Flex vertical gap="middle">
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
            </Flex>
            <Button onClick={onSave} block size='large' loading={isUpdating} type="primary">
              Update avatar
            </Button>
          </AvatarsContainer>
        )
      }

    </Container >
  );
};
