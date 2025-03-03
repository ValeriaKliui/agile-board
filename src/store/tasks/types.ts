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
  createdAt: Date;
  assignedTo: Date;
  author: string;
  priority: TASK_PRIORITY;
  executionDate: Date;
}
export type Tasks = Record<string, Task[]>;
