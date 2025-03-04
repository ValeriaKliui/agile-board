import {
  CalendarOutlined,
  ClockCircleOutlined,
  CrownOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { InfoRow } from '@shared/components';
import { formatDatetime } from '@shared/utils';

import { Container } from './styled';
import { TaskDetailsProps } from './types';

export const TaskDetails = ({ createdAt, executionDate, author, assignedTo }: TaskDetailsProps) => {
  const createdData = formatDatetime(createdAt);
  const executionData = formatDatetime(executionDate);

  return (
    <Container>
      <InfoRow Icon={CalendarOutlined} vertical label="Created" value={createdData} />
      <InfoRow Icon={ClockCircleOutlined} vertical label="Execute" value={executionData} />
      <InfoRow Icon={CrownOutlined} vertical label="Author" value={author?.username} />
      <InfoRow Icon={UserOutlined} vertical label="Assigned to" value={assignedTo?.username} />
    </Container>
  );
};
