import { TaskWithUserIDs } from '@pages/board/components';
import { Member } from '@store';

export const mapTasksWithUsers = (tasks: TaskWithUserIDs[], membersInfo: Member[]) =>
  tasks.map(({ assignedTo, author, ...task }) => {
    const authorData = membersInfo.find(({ userID }) => userID === author);
    const assignedToData = membersInfo.find(({ userID }) => userID === assignedTo);

    return { ...task, author: authorData, assignedTo: assignedToData };
  });
