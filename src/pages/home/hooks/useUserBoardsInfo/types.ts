import { ROLES } from '@constants';

export interface UserBoard {
  id: string;
  role: keyof typeof ROLES;
}
