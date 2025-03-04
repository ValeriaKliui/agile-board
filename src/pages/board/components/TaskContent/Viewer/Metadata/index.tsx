import { TASK_PRIORITY_COLORS } from '@pages/board/constants';
import { Typography } from 'antd';

import { Description, PriorityStyled } from './styled';
import { TaskMetadataProps } from './types';

const { Title } = Typography;

export const TaskMetadata = ({ title, description, priority }: TaskMetadataProps) => (
  <div>
    <PriorityStyled $color={TASK_PRIORITY_COLORS[priority]}>Urgency: {priority}</PriorityStyled>
    <Title level={4}>{title}</Title>
    {description && <Description>{description}</Description>}
  </div>
);
