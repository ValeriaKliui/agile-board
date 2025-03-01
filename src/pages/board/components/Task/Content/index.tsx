import { hasPermission } from '@pages/board/utils';
import { PERMISSIONS } from '@shared/constants';
import { boardStore, Task } from '@store';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';

import { TaskEditor } from './Editor';
import { TaskViewer } from './Viewer';

export const TaskContent = observer(
    ({ title, description, taskID }: Pick<Task, 'title' | 'taskID' | 'description'>) => {
        const boardID = boardStore.currentBoardInfo?.boardID;
        const canEdit = useMemo(() => hasPermission({ permission: PERMISSIONS.tasks.edit }), []);

        return (
            <>
                {canEdit ? (
                    <TaskEditor taskID={taskID} boardID={boardID} title={title} description={description} />
                ) : (
                    <TaskViewer title={title} description={description} />
                )}
            </>
        );
    },
);
