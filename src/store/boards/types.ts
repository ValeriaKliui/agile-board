import { ROLES } from '@constants';

export interface RoleInfo {
  permissions: string[];
  label: string;
  color: string;
}

export interface BoardInfo {
  createdAt: Date;
  title: string;
  owner: string;
  members: { [user: string]: ROLES };
}
