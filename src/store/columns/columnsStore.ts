import { BOARDS_COLLECTION_NAME } from '@constants';
import { addColumnToBoard, getCollection } from '@shared/services/firebase';
import { makeAutoObservable, runInAction } from 'mobx';

import type { AddColumnsProps, BoardColumnProps, Column } from './types';

class ColumnsStore {
  columns: Column[] = [];
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async addColumns({ boardID, columns }: AddColumnsProps) {
    this.isLoading = true;
    try {
      await addColumnToBoard({ id: boardID, columns });

      runInAction(() => (this.columns = [...this.columns, ...columns]));
    } catch (error) {
      if (error instanceof Error) this.error = error.message;
    } finally {
      this.isLoading = false;
    }
  }

  async fetchColumns({ boardID }: BoardColumnProps) {
    try {
      const columns = await getCollection<Column>([BOARDS_COLLECTION_NAME, boardID, 'columns']);

      runInAction(() => {
        if (columns) this.columns = columns;
      });
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    }
  }
}

export const columnsStore = new ColumnsStore();
