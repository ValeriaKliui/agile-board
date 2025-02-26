import { User } from '@store';

export interface MemberItemType extends Pick<User, 'username'> {
  color: string;
}
