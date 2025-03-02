import { AvatarEditor, ProfileInfoManager, UpdatePasswordFormManager, UpdateUserInfoFormManager } from '@pages/profile';
import { Card, Divider, Flex } from 'antd';

import { AvatarEditorContainer } from './styled';

export const ProfilePage = () => {
  return (
    <>
      <Card style={{ width: '100%', height: '100%' }}>
        <Flex vertical gap="large">
          <AvatarEditorContainer vertical gap="large" align="flex-start">
            <ProfileInfoManager />
            <AvatarEditor />
          </AvatarEditorContainer>

          <Divider />
          <UpdateUserInfoFormManager />
          <Divider />
          <UpdatePasswordFormManager />
        </Flex>
      </Card>
    </>
  );
};
