import { CalendarOutlined, ClockCircleOutlined, CrownTwoTone, UserOutlined } from '@ant-design/icons';
import { TASK_PRIORITY_COLORS } from '@pages/board/constants';
import { ROLES, ROLES_PERMISSIONS } from '@shared/constants';
import { Flex, Typography } from 'antd';
import { forwardRef } from 'react';

import { CardStyled } from './styled';
import { TaskCardProps } from './types';

const { Text } = Typography

export const TaskCard = forwardRef<HTMLDivElement, TaskCardProps>(({ x, y, priority, executionDate, author, assignedTo, createdAt, ...cardProps }, ref) => (
    <CardStyled size="small" hoverable ref={ref} $color={TASK_PRIORITY_COLORS[priority]} $transformX={x} $transformY={y} {...cardProps}>
        <Flex vertical gap='small'>
            <Flex gap="small">
                <CalendarOutlined />
                <Text>
                    <strong>Created:</strong> {createdAt}
                </Text>
            </Flex>
            <Flex gap="small">
                <ClockCircleOutlined />
                <Text>
                    <strong>Execute:</strong> {executionDate}
                </Text>
            </Flex>
            <Flex gap="small">
                <CrownTwoTone twoToneColor={ROLES_PERMISSIONS[ROLES.OWNER].color} />
                <Text>
                    <strong>Author:</strong> {author.username}
                </Text>
            </Flex>
            <Flex gap="small">
                <UserOutlined />
                <Text>
                    <strong>Assigned to:</strong> {assignedTo.username}
                </Text>
            </Flex>
        </Flex>
    </CardStyled>
));
