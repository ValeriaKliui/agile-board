import { BoardInfo, Column, Task } from '@store';
import { Timestamp } from 'firebase/firestore';

export type BoardColumnParams = Pick<BoardInfo, 'boardID'> & Pick<Column, 'columnID'>;
export type TaskInitial = Omit<Task, 'createdAt'> & { executionDate: Date };
export type AddTaskParams = {
  task: TaskInitial;
} & BoardColumnParams;
export type UpdateTaskParams = BoardColumnParams & Task;
export type FetchTaskParams = BoardColumnParams;
export type TaskResponse = Omit<Task, 'createdAt' | 'executionDate'> & {
  createdAt: Timestamp;
  executionDate: Timestamp;
};
export type MoveTaskParams = Pick<Task, 'taskID'> &
  Pick<BoardInfo, 'boardID'> & {
    newColumnID: string;
  };
export type MoveTask = MoveTaskParams &
  Pick<Column, 'columnID'> & {
    task?: Task;
  };
