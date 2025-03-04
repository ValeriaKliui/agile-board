import {
  CalendarOutlined,
  ClockCircleOutlined,
  CrownOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { InfoRow } from '@shared/components';
import { formatDatetime, getTimeDistance } from '@shared/utils';
import { Flex, Typography } from 'antd';

import { TaskDetailsProps } from './types';

export const TaskDetails = ({ createdAt, executionDate, author, assignedTo }: TaskDetailsProps) => {
  const createdData = formatDatetime(createdAt);
  const executionData = formatDatetime(executionDate);
  const deadline = getTimeDistance(executionDate);

  return (
    <Flex vertical gap="middle">
      <Typography.Text>
        <strong>Deadline in: </strong>
        {deadline}
      </Typography.Text>
      <InfoRow Icon={CalendarOutlined} label="Created" value={createdData} />
      <InfoRow Icon={ClockCircleOutlined} label="Execute" value={executionData} />
      <InfoRow Icon={CrownOutlined} label="Author" value={author?.username} />
      <InfoRow Icon={UserOutlined} label="Assigned to" value={assignedTo?.username} />
    </Flex>
  );
};
