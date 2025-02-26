import { User } from '@store';

export interface MemberItemProps extends Pick<User, 'username'> {
  color: string;
}
