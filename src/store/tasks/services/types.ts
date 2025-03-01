import { Task, BoardInfo, Column } from '@store';

export type TaskInitial = Omit<Task, 'createdAt'> & { executionDate: Date };

export type AddTaskParams = {
  task: TaskInitial;
} & Pick<BoardInfo, 'boardID'> &
  Pick<Column, 'columnID'>;
