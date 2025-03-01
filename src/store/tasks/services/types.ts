import { BoardInfo, Column, Task } from '@store';

export type TaskInitial = Omit<Task, 'createdAt'> & { executionDate: Date };

export type AddTaskParams = {
  task: TaskInitial;
} & Pick<BoardInfo, 'boardID'> &
  Pick<Column, 'columnID'>;

export type UpdateTaskParams = Pick<BoardInfo, 'boardID'> & Pick<Column, 'columnID'> & Task;
