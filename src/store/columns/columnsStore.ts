import { addColumnToBoard, fetchColumns, tasksStore } from '@store';
import { makeAutoObservable, runInAction } from 'mobx';

import type { AddColumnsProps, BoardColumnProps, Column } from './types';

class ColumnsStore {
  columns: Column[] = [];
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  private handleError(error: unknown) {
    console.error(error);
    this.error = error instanceof Error ? error.message : 'An unknown error occurred';
  }

  private setLoadingState(state: boolean) {
    runInAction(() => {
      this.isLoading = state;
    });
  }

  private async performAsyncOperation(operation: () => Promise<void>) {
    try {
      this.error = null;
      this.setLoadingState(true);
      await operation();
    } catch (error) {
      this.handleError(error);
    } finally {
      this.setLoadingState(false);
    }
  }

  async addColumns({ boardID, columns }: AddColumnsProps) {
    await this.performAsyncOperation(async () => {
      const newColumns = await addColumnToBoard({ boardID, columns });
      runInAction(() => {
        if (newColumns) this.columns = newColumns;
      });
    });
  }

  async fetchColumns({ boardID }: BoardColumnProps) {
    await this.performAsyncOperation(async () => {
      const columns = await fetchColumns({ boardID });
      runInAction(() => {
        if (columns) {
          this.columns = columns;
          columns.forEach(({ columnID }) => tasksStore.fetchTasks({ columnID, boardID }));
        }
      });
    });
  }
}

export const columnsStore = new ColumnsStore();
