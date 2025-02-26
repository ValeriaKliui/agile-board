import { User } from '@store';

export interface UserByIDsParams {
  IDs: string[];
  extractKey?: keyof User;
}
