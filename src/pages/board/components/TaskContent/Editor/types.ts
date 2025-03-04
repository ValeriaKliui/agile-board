import { TaskWithUser } from '@pages/board/components';
import { BoardInfo } from '@store';

export type TaskEditorProps = Omit<TaskWithUser, 'author'> &
  Partial<Pick<BoardInfo, 'boardID'>> & {
    isEditing: boolean;
    onEditFinish: () => void;
  };
