export interface Task {
  taskID: string;
  title: string;
  columnID: string;
  description?: string;
  createdAt: number;
  assignedTo: string;
}
