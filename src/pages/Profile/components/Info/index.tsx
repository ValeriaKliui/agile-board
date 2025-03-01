import { Avatar, Flex, Typography } from 'antd';

import { ProfileInfoProps } from './types';

const { Title, Text } = Typography;

export const ProfileInfo = ({ username, email, avatar }: ProfileInfoProps) => {
  return (
    <Flex align="flex-end" gap={20}>
      <Avatar src={avatar ?? null} size={64}>
        {avatar ? '' : username[0]}
      </Avatar>

      <div>
        {username && <Title level={4}>{username}</Title>}
        {email && <Text type="secondary">email: {email}</Text>}
      </div>
    </Flex>
  );
};
