import { Avatar, Flex, Typography } from "antd";

const { Title, Text } = Typography;

export const ProfileInfo = ({ username = "", email, avatarLink }) => {
  return (
    <Flex align="flex-end" gap={20}>
      <Avatar src={avatarLink ?? null} size={64}>
        {avatarLink ? "" : username[0]}
      </Avatar>

      <div>
        {username && <Title level={4}>{username}</Title>}
        {email && <Text type="secondary">email: {email}</Text>}
      </div>
    </Flex>
  );
};
