import { boardStore, tasksStore, userStore } from '@store';
import { FormInstance } from 'antd';
import { useCallback, useMemo } from 'react';

export const useTaskCreator = ({
  form,
  columnID,
  onSuccess,
}: {
  form: FormInstance;
  columnID: string;
  onSuccess: () => void;
}) => {
  const boardID = useMemo(() => boardStore.currentBoardInfo?.boardID, []);
  const userID = useMemo(() => userStore.user?.userID, []);
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
    } catch (error) {
      console.error('Task creation failed:', error);
    }
  }, [columnID, boardID, userID, form, onSuccess]);

  return { onFinish, isCreating };
};
