import { ROLES, ROLES_VALUES } from '@constants';
import { Timestamp } from 'firebase/firestore';

export interface RoleInfo {
  permissions: string[];
  label: string;
  color: string;
}

export interface BoardInfo {
  createdAt: Timestamp;
  title: string;
  owner: string;
  members: { [user: string]: ROLES };
  userRole: ROLES_VALUES;
}

export interface BoardCreationInfo extends Omit<BoardInfo, 'createdAt' | 'userRole'> {
  template: string;
}
