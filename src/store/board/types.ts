import { ROLES } from '@shared/constants';
import { User } from '@store';
import { Timestamp } from 'firebase/firestore';

export interface RoleInfo {
  permissions: string[];
  label: string;
  color: string;
}
export interface BoardInfo {
  boardID: string;
  createdAt: string;
  title: string;
  owner: string;
  members: { [user: string]: ROLES };
  userRole?: string;
}

export interface BoardInfoResponse extends Omit<BoardInfo, 'createdAt' | 'boardID'> {
  id: string;
  createdAt: Timestamp;
}

export type BoardCreationParams = Pick<BoardInfo, 'title' | 'owner' | 'members'>;

export type BoardCreationInfo = Omit<BoardInfo, 'boardID' | 'createdAt'> & { template: string };

export type UpdateBoardInfo = Pick<BoardInfo, 'boardID'> & Partial<BoardInfo>;

export interface Member extends User {
  userRole: ROLES;
  color: string;
}
export type TemplatedBoard = Pick<BoardInfo, 'boardID'> & Pick<BoardCreationInfo, 'template'>;
