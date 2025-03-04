import { ClockCircleTwoTone } from '@ant-design/icons';
import { TASK_PRIORITY_COLORS } from '@pages/board/constants';
import { getTimeDistance } from '@shared/utils';
import { Flex, Typography } from 'antd';

import { Description } from './styled';
import { TaskMetadataProps } from './types';

const { Title, Text } = Typography;

export const TaskMetadata = ({
  title,
  description,
  priority,
  executionDate,
}: TaskMetadataProps) => {
  const deadline = getTimeDistance(executionDate);
  const priorityColor = TASK_PRIORITY_COLORS[priority];

  return (
    <div>
      <Flex gap="small">
        <ClockCircleTwoTone twoToneColor={priorityColor} />
        <Text className="capitalize">{priority}</Text>
      </Flex>
      <Title level={3}>{title}</Title>
      <Flex vertical gap={'middle'}>
        {description && <Description>{description}</Description>}
        <Text>
          <strong>Deadline in: </strong>
          {deadline}
        </Text>
      </Flex>
    </div>
  );
};
