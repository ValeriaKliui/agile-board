import { Member, Task } from '@store';

export const mapTasksWithUsers = (tasks: Task[], membersInfo: Member[]) =>
  tasks.map(({ assignedTo, author, ...task }) => {
    const authorData = membersInfo.find(({ userID }) => userID === author);
    const assignedToData = membersInfo.find(({ userID }) => userID === assignedTo);

    return { ...task, author: authorData, assignedTo: assignedToData };
  });
