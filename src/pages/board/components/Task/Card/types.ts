import { Task } from '@store';
import { CardProps } from 'antd';

export type TaskCardProps = CardProps &
  Omit<Task, 'taskID' | 'description'> & {
    x: number;
    y: number;
  };
