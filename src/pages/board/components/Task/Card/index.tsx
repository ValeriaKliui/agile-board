import { CalendarOutlined, ClockCircleOutlined, CrownTwoTone, UserOutlined } from '@ant-design/icons';
import { TASK_PRIORITY_COLORS } from '@pages/board/constants';
import { ROLES, ROLES_PERMISSIONS } from '@shared/constants';
import { Flex, } from 'antd';
import { forwardRef } from 'react';

import { InfoRow } from '../../InfoRow';
import { CardStyled } from './styled';
import { TaskCardProps } from './types';

export const TaskCard = forwardRef<HTMLDivElement, TaskCardProps>(
    ({ x, y, priority, executionDate, author = {}, assignedTo = {}, createdAt, ...cardProps }, ref) => (
        <CardStyled
            size="small"
            hoverable
            ref={ref}
            $color={TASK_PRIORITY_COLORS[priority]}
            $transformX={x}
            $transformY={y}
            {...cardProps}
        >
            <Flex vertical gap="small">
                <InfoRow Icon={CalendarOutlined} label="Created" value={createdAt} />
                <InfoRow Icon={ClockCircleOutlined} label="Execute" value={executionDate} />
                <InfoRow
                    Icon={CrownTwoTone}
                    label="Author"
                    value={author.username}
                    twoToneColor={ROLES_PERMISSIONS[ROLES.OWNER].color}
                />
                <InfoRow Icon={UserOutlined} label="Assigned to" value={assignedTo.username} />
            </Flex>
        </CardStyled>
    )
);
