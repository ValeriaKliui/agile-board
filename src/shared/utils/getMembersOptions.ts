import { User } from '@store';

export const getMembersOptions = (members: User[] | null) =>
  members?.map(({ username, userID }) => ({
    label: username,
    value: userID,
  }));
