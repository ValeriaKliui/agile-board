export enum TASK_PRIORITY {
  urgent,
  high,
  medium,
  low,
}

export enum TASK_PRIORITY_TEXT {
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
  assignedTo: string;
  author: string;
  priority: TASK_PRIORITY_TEXT;
  executionDate: Date;
}
export type Tasks = Record<string, Task[]>;
