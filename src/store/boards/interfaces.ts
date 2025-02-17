import { ROLES } from '@constants/roles';

export interface UserBoards {
  [key: string]: keyof typeof ROLES;
}

export interface RoleInfo {
  permissions: string[];
  label: string;
  color: string;
}
