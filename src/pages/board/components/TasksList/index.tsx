import { Task } from '@pages/board/components';
import { boardStore } from '@store';
import { observer } from 'mobx-react-lite';

import { TaskListProps } from './types';

export const TasksList = observer(({ tasks }: TaskListProps) => {
    const membersInfo = boardStore.membersInfo;

    const tasksWithUsers = tasks?.map(({ assignedTo, author, ...task }) => {
        const authorData = membersInfo.find(({ userID }) => userID === author);
        const assignedToData = membersInfo.find(({ userID }) => userID === assignedTo);

        return { ...task, author: authorData, assignedTo: assignedToData };
    });

    if (!tasks || !tasks.length) return false;

    return <>{tasksWithUsers?.map(({ taskID, ...task }) => <Task key={taskID} taskID={taskID} {...task} />)}</>;
});
