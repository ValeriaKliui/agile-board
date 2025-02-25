import { ROLES, ROLES_VALUES } from '@constants';
import { Timestamp } from 'firebase/firestore';

export interface WithId {
  id: string;
}

export interface RoleInfo {
  permissions: string[];
  label: string;
  color: string;
}

export interface Column extends WithId {
  order: number;
  title: string;
}

export interface Task extends WithId {
  title: string;
}
export interface BoardInfo extends WithId {
  createdAt: Timestamp;
  title: string;
  owner: string;
  members: { [user: string]: ROLES };
  userRole: ROLES_VALUES;
  columns?: Column[];
}

export interface BoardCreationInfo extends Omit<BoardInfo, 'createdAt' | 'userRole'> {
  template: string;
}

export interface UpdateBoardInfo extends WithId {
  boardData: Partial<BoardInfo>;
}
