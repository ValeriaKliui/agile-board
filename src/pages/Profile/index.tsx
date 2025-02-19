import { AvatarEditorContainer } from '@containers/AvatarEditorContainer';
import { UpdatePasswordFormContainer } from '@containers/UpdatePasswordFormContainer/index';
import { ProfileInfoContainer } from '@containers/ProfileInfoContainer';
import { Card, Divider, Flex } from 'antd';
import { UpdateUserInfoFormContainer } from '@containers/UpdateUserInfoFormContainer';

export const ProfilePage = () => {
  return (
    <>
      <Card style={{ width: '100%', height: '100%' }}>
        <Flex vertical gap="large">
          <Flex vertical gap="large" align="flex-start">
            <ProfileInfoContainer />
            <AvatarEditorContainer />
          </Flex>

          <Divider />
          <UpdateUserInfoFormContainer />
          <Divider />
          <UpdatePasswordFormContainer />
        </Flex>
      </Card>
    </>
  );
};
