import { User } from '@store';

export enum TASK_PRIORITY {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent',
}

export interface Task {
  taskID: string;
  title: string;
  description?: string;
  createdAt: string;
  assignedTo: User;
  author: User;
  priority: TASK_PRIORITY;
  executionDate: string;
}
export type Tasks = Record<string, Task[]>;
