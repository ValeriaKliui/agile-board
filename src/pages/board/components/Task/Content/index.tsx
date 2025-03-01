import { hasPermission } from '@pages/board/utils';
import { Button } from '@shared/components';
import { PERMISSIONS } from '@shared/constants';
import { boardStore, Task, userStore } from '@store';
import { observer } from 'mobx-react-lite';
import { useMemo, useState } from 'react';

import { TaskEditor } from './Editor';
import { TaskViewer } from './Viewer';

export const TaskContent = observer(
    (task: Task) => {
        const boardID = boardStore.currentBoardInfo?.boardID;
        const canEdit = useMemo(() => hasPermission(PERMISSIONS.tasks.edit) && userStore.user?.userID === task.author.userID, [task.author.userID]);
        const [isEditing, setIsEditing] = useState(false)
        const toggleEditing = () => setIsEditing(prev => !prev)

        return (
            <>
                {canEdit && <Button type="primary" disabled={isEditing} onClick={toggleEditing}>Edit</Button>
                }
                {canEdit && isEditing ? (
                    <TaskEditor boardID={boardID} toggleEditing={toggleEditing} isEditing={isEditing} {...task} />
                ) : (
                    <TaskViewer {...task} />
                )}
            </>
        );
    },
);
