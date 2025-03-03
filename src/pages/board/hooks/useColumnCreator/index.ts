import { boardStore, columnsStore } from '@store';
import { useCallback } from 'react';

import { UseColumnCreatorParams } from './types';

export const useColumnCreator = ({ form, onSuccess, lastColumnOrder }: UseColumnCreatorParams) => {
  const newColumnOrder = lastColumnOrder + 1;
  const { isLoading } = columnsStore;

  const createColumn = useCallback(async () => {
    const newColumn = form.getFieldsValue();
    const { boardID } = boardStore.currentBoardInfo ?? {};

    if (!boardID) return;

    await columnsStore.addColumns({ boardID, columns: [newColumn] });
    form.resetFields();
    onSuccess();
  }, [form, onSuccess]);

  return { createColumn, newColumnOrder, isLoading };
};
