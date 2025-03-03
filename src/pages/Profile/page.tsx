import { ProfileInfoEditor, ProfileInfoHeader, UpdateUserInfoFormManager } from '@pages/profile';
import { Divider, Flex } from 'antd';

import { ContentCard, ProfileInfoContainer } from './styled';

export const ProfilePage = () => {
  return (
    <>
      <ContentCard >
        <Flex vertical gap="large">
          <ProfileInfoContainer vertical gap="large" align="center" justify='center'>
            <ProfileInfoHeader />
            <ProfileInfoEditor />
          </ProfileInfoContainer>

          <Divider />
          <UpdateUserInfoFormManager />
        </Flex>
      </ContentCard>
    </>
  );
};
