import { transformObjectToOptions } from '@shared/utils';
import { TASK_PRIORITY_TEXT } from '@store';

export const getPriorityOptions = () => {
  return transformObjectToOptions(TASK_PRIORITY_TEXT).map(({ value, label }) => ({
    value,
    label: label.toLowerCase(),
    key: value,
  }));
};
