import { CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { BoardCardProps } from '@pages/home/components';
import { Icon, InfoRow } from '@shared/components';
import { ROLES, ROLES_PERMISSIONS } from '@shared/constants';
import { Flex } from 'antd';

import { CardStyled, TextStyled } from './styled';

export const BoardCard = ({ title, createdAt, owner, userRole }: BoardCardProps) => {
  const { icon: IconComponent, color } = ROLES_PERMISSIONS[userRole as ROLES] ?? {};

  return (
    <CardStyled
      hoverable
      variant="borderless"
      title={
        <TextStyled>
          <Icon icon={IconComponent} color={color} />
          {title}
        </TextStyled>
      }
    >
      <Flex vertical gap="small">
        <InfoRow Icon={CalendarOutlined} label="Created" value={createdAt} />
        <InfoRow Icon={UserOutlined} label="Owner" value={owner} />
      </Flex>
    </CardStyled>
  );
};
