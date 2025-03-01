import { User } from '@store';

export interface MembersSearchProps {
  fetchFunc: () => Promise<User[]>;
  name: string;
}
