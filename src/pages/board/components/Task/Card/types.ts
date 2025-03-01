import { TaskWithUser } from '@pages/board/components';
import { CardProps } from 'antd';

export type TaskCardProps = CardProps &
  Omit<TaskWithUser, 'taskID' | 'description' | 'author' | 'assignedTo'> &
  Partial<Pick<TaskWithUser, 'author' | 'assignedTo'>> & {
    x: number;
    y: number;
  };
