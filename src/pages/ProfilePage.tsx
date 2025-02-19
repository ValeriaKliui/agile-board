import { AvatarEditorContainer } from '@containers/AvatarEditorContainer';
import { FormUpdatePasswordContainer } from '@containers/FormUpdatePasswordContainer/index';
import { FormUpdateUserInfoContainer } from '@containers/FormUpdateUserInfoContainer/index';
import { ProfileInfoContainer } from '@containers/ProfileInfoContainer';
import { Card, Divider, Flex } from 'antd';

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
          <FormUpdateUserInfoContainer />
          <Divider />
          <FormUpdatePasswordContainer />
        </Flex>
      </Card>
    </>
  );
};
