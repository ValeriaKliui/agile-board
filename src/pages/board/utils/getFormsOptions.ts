import { TASK_PRIORITY_TEXT } from '@store';

export const getPriorityOptions = () =>
  Object.values(TASK_PRIORITY_TEXT).map((value) => ({ value, label: value }));
