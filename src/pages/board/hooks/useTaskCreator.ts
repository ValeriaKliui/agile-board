import { getMembersOptions, getPriorityOptions } from '@pages/board/utils';
import { boardStore, tasksStore, userStore } from '@store';
import { FormInstance } from 'antd';
import { useCallback, useMemo } from 'react';

export const useTaskCreator = (form: FormInstance, columnID: string, closeModal: () => void) => {
  const onFinish = useCallback(async () => {
    const taskData = form.getFieldsValue(true);
    const userID = userStore.user?.userID;

    if (userID) {
      await tasksStore.addTask({ columnID, task: { ...taskData, author: userID } });
      closeModal();
    }
  }, [closeModal, columnID, form]);

  const membersOptions = useMemo(() => getMembersOptions(boardStore.membersInfo), []);
  const priorityOptions = useMemo(() => getPriorityOptions(), []);

  return {
    onFinish,
    membersOptions,
    priorityOptions,
  };
};
