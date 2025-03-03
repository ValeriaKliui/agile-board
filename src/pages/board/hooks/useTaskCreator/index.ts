import { UseTaskCreatorParams } from './types';
import { boardStore, tasksStore, userStore } from '@store';
import { useCallback } from 'react';

export const useTaskCreator = ({ form, columnID, onSuccess }: UseTaskCreatorParams) => {
  const { boardID } = boardStore.currentBoardInfo ?? {};
  const { userID } = userStore.user ?? {};

  const isCreating = tasksStore.isLoading;

  const onFinish = useCallback(async () => {
    try {
      const taskData = form.getFieldsValue(true);
      const executionDate = taskData.executionDate?.toDate?.();
      if (!userID || !boardID) throw new Error('User ID or Board ID is missing');

      await tasksStore.addTask({
        columnID,
        boardID,
        task: { ...taskData, executionDate, author: userID },
      });
      onSuccess();
      form.resetFields()
    } catch (error) {
      console.error('Task creation failed:', error);
    }
  }, [columnID, boardID, userID, form, onSuccess]);

  return { onFinish, isCreating };
};
