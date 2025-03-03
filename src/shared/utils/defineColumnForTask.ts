import { Tasks } from '@store';

export const defineColumnForTask = (tasks: Tasks, targetTaskID: string) => {
  const column =
    Object.entries(tasks).find(([_, taskList]) =>
      taskList.some((task) => task.taskID === targetTaskID),
    )?.[0] || '';

  return column;
};
