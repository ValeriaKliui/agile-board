import { BoardInfo, User } from '@store';

export interface UpdateBoard {
  board: Partial<BoardInfo>;
}
export type AddingMembersProps = Pick<BoardInfo, 'members' | 'boardID'>;
export interface UserByIDsParams {
  IDs: string[];
  extractKey?: keyof User;
}
