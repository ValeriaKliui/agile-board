import { Task } from '@store';
import { CardProps } from 'antd';

export type TaskCardProps = CardProps &
  Pick<Task, 'description'> & {
    x: number;
    y: number;
  };
