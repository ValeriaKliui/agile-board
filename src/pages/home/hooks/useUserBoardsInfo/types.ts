import { ROLES } from '@constants';
import { BoardInfo } from '@store/boards/types';

export type UserBoardsInfo = [ROLES, BoardInfo[]];
