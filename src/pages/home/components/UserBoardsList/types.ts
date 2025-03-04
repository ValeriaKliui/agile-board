import { ROLES } from '@shared/constants';
import { BoardInfo } from '@store';

export interface UserBoardsProps {
  boardsInfo: Array<[ROLES, BoardInfo[]]>;
  fetchBoards: () => Promise<void>;
}
