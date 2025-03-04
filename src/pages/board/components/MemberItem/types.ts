import { Member } from '@store';

export interface MemberItemType extends Pick<Member, 'username' | 'role'> {
  color: string;
}
