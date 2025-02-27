import { addColumnToBoard, fetchColumns } from '@shared/services/firebase';
import { tasksStore } from '@store';
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
      const newColumns = await addColumnToBoard({ boardID, columns });

      runInAction(() => {
        if (newColumns) this.columns = newColumns;
      });
    } catch (error) {
      if (error instanceof Error) this.error = error.message;
    } finally {
      this.isLoading = false;
    }
  }

  async fetchColumns({ boardID }: BoardColumnProps) {
    try {
      const columns = await fetchColumns({ boardID });

      runInAction(() => {
        if (columns) {
          this.columns = columns;
          columns.forEach(({ columnID }) => tasksStore.fetchTasks({ columnID, boardID }));
        }
      });
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
    }
  }
}

export const columnsStore = new ColumnsStore();
