import { getMembersOptions } from '@shared/utils';
import { boardStore, tasksStore } from '@store';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';

import { TaskEditorForm } from './Form';
import { TaskEditorProps } from './types';

export const TaskEditor = observer(
  ({ isEditing, onEditFinish, taskID, ...task }: TaskEditorProps) => {
    const [form] = Form.useForm();
    const { boardID } = boardStore.currentBoardInfo ?? {};
    const membersOptions = useMemo(() => getMembersOptions(boardStore.membersInfo), []);
    const isUpdating = tasksStore.isLoading;

    const onFinishEdit = async () => {
      const task = form.getFieldsValue(true);

      if (boardID) await tasksStore.updateTask({ ...task, boardID, taskID });
      onEditFinish();
    };

    return (
      <TaskEditorForm
        form={form}
        membersOptions={membersOptions}
        isUpdating={isUpdating}
        onSubmit={onFinishEdit}
        disabled={!isEditing}
        {...task}
      />
    );
  },
);
