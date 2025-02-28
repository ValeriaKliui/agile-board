import { CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { ROLES_PERMISSIONS } from '@constants';
import { BoardCardProps } from '@pages/home/components';
import { Icon } from '@shared/components';
import { Flex, Typography } from 'antd';

import { CardStyled, TextStyled } from './styled';

const { Text } = Typography;

export const BoardCard = ({ title, createdAt, owner, userRole }: BoardCardProps) => {
    const { icon: IconComponent, color } = ROLES_PERMISSIONS[userRole];

    return (
        <CardStyled
            hoverable
            variant="borderless"
            title={
                <TextStyled >
                    <Icon icon={IconComponent} color={color} />
                    {title}
                </TextStyled>
            }
        >
            <Flex vertical gap="small">
                <Flex gap="small">
                    <CalendarOutlined />
                    <Text>
                        <strong>Created:</strong> {createdAt}
                    </Text>
                </Flex>
                <Flex gap="small">
                    <UserOutlined />
                    <Text>
                        <strong>Owner:</strong> {owner}
                    </Text>
                </Flex>
            </Flex>
        </CardStyled>
    );
};
