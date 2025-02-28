import { boardStore, columnsStore } from '@store';
import { FormInstance } from 'antd';
import { useCallback } from 'react';

export const useColumnCreator = (
  form: FormInstance,
  closeModal: () => void,
  lastColumnOrder: number,
) => {
  const newColumnOrder = lastColumnOrder + 1;

  const createColumn = useCallback(async () => {
    const newColumn = form.getFieldsValue();
    const boardID = boardStore.currentBoardInfo?.boardID;

    if (!boardID) return;

    await columnsStore.addColumns({ boardID, columns: [newColumn] });
    form.resetFields();
    closeModal();
  }, [form, closeModal]);

  return { createColumn, newColumnOrder };
};
