import { TaskWithUser } from '@pages/board/components';

export type TaskDetailsProps = Pick<
  TaskWithUser,
  'createdAt' | 'assignedTo' | 'author' | 'executionDate'
>;
