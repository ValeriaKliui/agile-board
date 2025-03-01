import { BoardInfo, Column, TaskInitial } from '@store';

export type UseTaskCreatorParams = Pick<Column, 'columnID'> &
  Partial<Pick<BoardInfo, 'boardID'>> & {
    onSuccess: () => void;
    getTaskData: () => TaskInitial;
  };
