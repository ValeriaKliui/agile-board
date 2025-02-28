import { TASK_PRIORITY, User } from '@store';

export const getMembersOptions = (membersInfo: User[]) =>
  membersInfo.map(({ userID, username }) => ({ label: username, value: userID }));

export const getPriorityOptions = () =>
  Object.values(TASK_PRIORITY).map((value) => ({ value, label: value }));
