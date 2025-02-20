import { Card, Divider, Flex } from 'antd';
import { AvatarEditor, ProfileInfoManager, UpdateUserInfoFormManager, UpdatePasswordFormManager } from '@pages/Profile';

export const ProfilePage = () => {
  return (
    <>
      <Card style={{ width: '100%', height: '100%' }}>
        <Flex vertical gap="large">
          <Flex vertical gap="large" align="flex-start">
            <ProfileInfoManager />
            <AvatarEditor />
          </Flex>

          <Divider />
          <UpdateUserInfoFormManager />
          <Divider />
          <UpdatePasswordFormManager />
        </Flex>
      </Card>
    </>
  );
};
