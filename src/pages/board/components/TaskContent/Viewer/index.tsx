import { TaskWithUser } from '@pages/board/components';
import { Flex } from 'antd';

import { TaskDetails } from './Details';
import { TaskMetadata } from './Metadata';
import { Container, Details } from './styled';

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
        <TaskMetadata title={title} description={description} priority={priority} />
      </Flex>
      <Details vertical gap="middle">
        <TaskDetails
          createdAt={createdAt}
          executionDate={executionDate}
          author={author}
          assignedTo={assignedTo}
        />
      </Details>
    </Container>
  );
};
