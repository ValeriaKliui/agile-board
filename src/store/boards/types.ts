import { ROLES } from '@constants';

export interface UserBoards {
  [key: string]: keyof typeof ROLES;
}

export interface RoleInfo {
  permissions: string[];
  label: string;
  color: string;
}

export interface BoardInfo {
  createdAt: Date;
  title: string;
  owner: string;
  members: { [key: string]: ROLES };
}
