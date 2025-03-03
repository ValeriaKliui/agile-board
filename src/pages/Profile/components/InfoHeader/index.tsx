import { Avatar } from '@shared/components';
import { userStore } from '@store';
import { Flex, Typography, } from 'antd';
import { observer } from 'mobx-react-lite';

import { AvatarText } from './styled';

const { Title, Text } = Typography;

export const ProfileInfoHeader = observer(() => {
  const { username = '', avatar, email = '' } = userStore.user ?? {};

  return <header>
    <Flex vertical align='center' gap={20}>
      <Avatar src={avatar} size={150}>
        <AvatarText >
          {avatar ? '' : username[0]}
        </AvatarText>
      </Avatar>

      <Flex vertical align='center'>
        {username && <Title level={4}>{username}</Title>}
        {email && <Text type="secondary">email: {email}</Text>}
      </Flex>
    </Flex>
  </header>
});
