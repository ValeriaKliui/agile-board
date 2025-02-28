export enum TASK_PRIORITY {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent',
}

export interface Task {
  title: string;
  description?: string;
  createdAt: number;
  assignedTo: string;
  author: string;
  priority: TASK_PRIORITY;
}
