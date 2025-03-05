import { TaskWithUser } from '@pages/board/components';
import { TASK_PRIORITY } from '@store';

export const sortTasksByPriority = (tasks: TaskWithUser[]) => {
  if (!tasks) return [];

  return tasks.sort((taskA, taskB) => {
    return TASK_PRIORITY[taskA.priority] - TASK_PRIORITY[taskB.priority];
  });
};
