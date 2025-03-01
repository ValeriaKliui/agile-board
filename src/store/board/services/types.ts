import { BoardInfo, User } from '@store';

export interface UpdateBoard {
  board: Partial<BoardInfo>;
}
export type DeleteBoard = Pick<BoardInfo, 'boardID'> & Pick<User, 'userID'>;
