import { BoardInfo, User } from '@store';

export interface UpdateBoard {
  board: Partial<BoardInfo>;
}
export type DeleteBoard = Pick<BoardInfo, 'boardID'> & Pick<User, 'userID'>;
export type AddingMembersProps = Pick<BoardInfo, 'members' | 'boardID'>;
export interface UserByIDsParams {
  IDs: string[];
  extractKey?: keyof User;
}
