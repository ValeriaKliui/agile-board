import { ROLES } from '@shared/constants';
import { BoardInfo } from '@store';

export interface UserBoardsProps {
  boardsInfo: Array<[ROLES, BoardInfo[]]> | null;
  fetchBoards: () => Promise<void>;
}
