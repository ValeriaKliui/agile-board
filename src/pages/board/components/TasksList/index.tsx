import { Task } from '@pages/board/components';
import { mapTasksWithUsers } from '@pages/board/utils';
import { sortTasksByPriority } from '@pages/board/utils';
import { boardStore } from '@store';
import { observer } from 'mobx-react-lite';

import { TaskListProps } from './types';

export const TasksList = observer(({ tasks }: TaskListProps) => {
  const membersInfo = boardStore.membersInfo;
  const tasksWithUsers = tasks && mapTasksWithUsers(tasks, membersInfo);
  const tasksSortedByPriority = sortTasksByPriority(tasksWithUsers);

  return (
    <>
      {tasksSortedByPriority?.map(({ taskID, ...task }) => (
        <Task key={taskID} taskID={taskID} {...task} />
      ))}
    </>
  );
});
