import {
  CalendarOutlined,
  ClockCircleOutlined,
  CrownTwoTone,
  UserOutlined,
} from '@ant-design/icons';
import { TASK_PRIORITY_COLORS } from '@pages/board/constants';
import { useTaskDraggable } from '@pages/board/hooks';
import { InfoRow } from '@shared/components';
import { ROLES, ROLES_PERMISSIONS } from '@shared/constants';
import { formatDatetime } from '@shared/utils';
import { Flex } from 'antd';

import { CardStyled } from './styled';
import { TaskDraggableProps } from './types';

export const TaskDraggable = ({
  taskID,
  createdAt,
  executionDate,
  priority,
  author,
  assignedTo,
}: TaskDraggableProps) => {
  const { attributes, listeners, setNodeRef, x, y } = useTaskDraggable(taskID);
  const createdData = formatDatetime(createdAt);
  const executionData = formatDatetime(executionDate);

  return (
    <CardStyled
      size="small"
      hoverable
      ref={setNodeRef}
      $color={TASK_PRIORITY_COLORS[priority]}
      $transformX={x}
      $transformY={y}
      {...attributes}
      {...listeners}
    >
      <Flex vertical gap="small">
        <InfoRow Icon={CalendarOutlined} label="Created" value={createdData} />
        <InfoRow Icon={ClockCircleOutlined} label="Execute" value={executionData} />
        <InfoRow
          Icon={CrownTwoTone}
          label="Author"
          value={author?.username}
          twoToneColor={ROLES_PERMISSIONS[ROLES.OWNER].color}
        />
        <InfoRow Icon={UserOutlined} label="Assigned to" value={assignedTo?.username} />
      </Flex>
    </CardStyled>
  );
};
