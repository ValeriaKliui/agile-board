import { TaskWithUser } from '@pages/board/components';
import { CardProps } from 'antd';

export type TaskDraggableProps = CardProps &
  Omit<TaskWithUser, 'description' | 'author' | 'assignedTo'> &
  Partial<Pick<TaskWithUser, 'author' | 'assignedTo'>>;
