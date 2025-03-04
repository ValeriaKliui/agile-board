import { TaskWithUser } from '@pages/board/components';
import { Flex } from 'antd';

import { TaskDetails } from './Details';
import { TaskMetadata } from './Metadata';
import { Container, DividerStyled } from './styled';

export const TaskViewer = ({
  title,
  description,
  createdAt,
  assignedTo,
  author,
  executionDate,
  priority,
}: TaskWithUser) => {
  return (
    <Container>
      <Flex vertical gap="middle">
        <TaskMetadata
          executionDate={executionDate}
          title={title}
          description={description}
          priority={priority}
        />
      </Flex>
      <Flex gap="small">
        <DividerStyled type="vertical" />
        <TaskDetails
          createdAt={createdAt}
          executionDate={executionDate}
          author={author}
          assignedTo={assignedTo}
        />
      </Flex>
    </Container>
  );
};
