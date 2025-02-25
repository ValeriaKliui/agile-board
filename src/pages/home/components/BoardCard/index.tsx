import { CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { ROLES_PERMISSIONS } from '@constants';
import { BoardCardProps } from '@pages/home/components';
import { formatDatetime } from '@pages/home/services';
import { Flex, Typography } from 'antd';

import { CardStyled, TextStyled } from './styled';

const { Text } = Typography;

export const BoardCard = ({ title, createdAt, owner, userRole }: BoardCardProps) => {
    const { icon: IconComponent, color } = ROLES_PERMISSIONS[userRole];

    const dateTime = formatDatetime({ timestamp: createdAt });

    return (
        <CardStyled
            hoverable
            variant="borderless"
            title={
                <TextStyled >
                    <IconComponent twoToneColor={color} />
                    {title}
                </TextStyled>
            }
        >
            <Flex vertical gap="small">
                <Flex gap="small">
                    <CalendarOutlined />
                    <Text>
                        <strong>Created:</strong> {dateTime}
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
