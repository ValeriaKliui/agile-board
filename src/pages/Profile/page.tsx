import {
  AvatarEditor,
  ProfileInfoManager,
  UpdatePasswordFormManager,
  UpdateUserInfoFormManager,
} from '@pages/profile';
import { Card, Divider, Flex } from 'antd';

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
