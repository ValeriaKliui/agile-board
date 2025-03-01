import { BoardInfo, Task } from '@store';

export type TaskEditorProps = Pick<Task, 'taskID' | 'title' | 'description'> &
  Partial<Pick<BoardInfo, 'boardID'>>;
