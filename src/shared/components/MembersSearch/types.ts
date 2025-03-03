import { User } from '@store';

export interface MembersSearchProps {
  fetchFunc: (values: string) => Promise<User[] | undefined>;
  name: string;
}
