import { CalendarOutlined, ClockCircleOutlined, CrownTwoTone, UserOutlined } from '@ant-design/icons';
import { TASK_PRIORITY_COLORS } from '@pages/board/constants';
import { InfoRow } from '@shared/components';
import { ROLES, ROLES_PERMISSIONS } from '@shared/constants';
import { formatDatetime } from '@shared/utils';
import { Flex, } from 'antd';
import { forwardRef } from 'react';

import { CardStyled } from './styled';
import { TaskCardProps } from './types';

export const TaskCard = forwardRef<HTMLDivElement, TaskCardProps>(
    ({ x, y, priority, executionDate, author = {}, assignedTo = {}, createdAt, ...cardProps }, ref) => {
        const createdData = formatDatetime(createdAt)
        const executionData = formatDatetime(executionDate)

        return <CardStyled
            size="small"
            hoverable
            ref={ref}
            $color={TASK_PRIORITY_COLORS[priority]}
            $transformX={x}
            $transformY={y}
            {...cardProps}
        >
            <Flex vertical gap="small">
                <InfoRow Icon={CalendarOutlined} label="Created" value={createdData} />
                <InfoRow Icon={ClockCircleOutlined} label="Execute" value={executionData} />
                <InfoRow
                    Icon={CrownTwoTone}
                    label="Author"
                    value={author.username}
                    twoToneColor={ROLES_PERMISSIONS[ROLES.OWNER].color}
                />
                <InfoRow Icon={UserOutlined} label="Assigned to" value={assignedTo.username} />
            </Flex>
        </CardStyled>
    }
);
