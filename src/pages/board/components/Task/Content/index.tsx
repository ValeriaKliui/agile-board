import { TaskWithUser } from '@pages/board/components';
import { hasPermission } from '@pages/board/utils';
import { Button } from '@shared/components';
import { PERMISSIONS, ROLES } from '@shared/constants';
import { boardStore, userStore } from '@store';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { TaskEditor } from './Editor';
import { TaskViewer } from './Viewer';

export const TaskContent = observer(({ author, ...task }: TaskWithUser) => {
  const { userID } = userStore.user ?? {};
  const isOwnerOfBoard = boardStore.currentRole === ROLES.OWNER;
  const isAuthorOfTask = userID === author?.userID;
  const canEdit = (hasPermission(PERMISSIONS.tasks.edit) && isAuthorOfTask) || isOwnerOfBoard;

  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => setIsEditing((prev) => !prev);

  const onEditFinish = () => setIsEditing(false);

  return (
    <>
      {canEdit && !isEditing && (
        <Button type="primary" onClick={toggleEditing}>
          Edit
        </Button>
      )}

      {canEdit && isEditing ? (
        <TaskEditor onEditFinish={onEditFinish} isEditing={isEditing} {...task} />
      ) : (
        <TaskViewer author={author} {...task} />
      )}
    </>
  );
});
