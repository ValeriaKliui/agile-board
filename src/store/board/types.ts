import { ROLES } from '@constants';
import { WithId } from '@shared/types';
import { Timestamp } from 'firebase/firestore';

export interface RoleInfo {
  permissions: string[];
  label: string;
  color: string;
}

export interface Task extends WithId {
  title: string;
}

export interface BoardInfo extends WithId {
  createdAt: string;
  title: string;
  owner: string;
  members: { [user: string]: ROLES };
  // userRole: ROLES_VALUES;
}

export interface BoardInfoResponse extends Omit<BoardInfo, 'createdAt'> {
  createdAt: Timestamp;
}

export type BoardCreationParams = Pick<BoardInfo, 'title' | 'owner' | 'members'>;

export type BoardCreationInfo = Omit<BoardInfo, 'id' | 'createdAt'> & { template: string };

export interface UpdateBoardInfo extends Partial<WithId> {
  boardData: Partial<BoardInfo>;
}
