import { TASK_PRIORITY } from '@store';

export const getPriorityOptions = () =>
  Object.values(TASK_PRIORITY).map((value) => ({ value, label: value }));
