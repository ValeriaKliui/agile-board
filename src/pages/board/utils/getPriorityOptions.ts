import { transformObjectToOptions } from '@shared/utils';
import { TASK_PRIORITY } from '@store';

export const getPriorityOptions = () => {
  return transformObjectToOptions(TASK_PRIORITY).map(({ value, label }) => ({
    value,
    label: label.toLowerCase(),
    key: value,
  }));
};
