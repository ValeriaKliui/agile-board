import { fetchTasks } from '@shared/services/firebase/db/fetchTasks';
import { makeAutoObservable, runInAction } from 'mobx';
import { BoardInfo } from 'store/board';
import { Column } from 'store/columns';

import { Task } from './types';

class TasksStore {
  tasks: Record<string, Task[]> = {};
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchTasks({ columnID, boardID }: Pick<BoardInfo, 'boardID'> & Pick<Column, 'columnID'>) {
    this.isLoading = true;

    try {
      const tasks = await fetchTasks({ columnID, boardID });

      runInAction(() => {
        if (tasks) this.tasks[columnID] = tasks;
      });
    } catch (error) {
      runInAction(() => (this.error = error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      this.isLoading = false;
    }
  }
}

export const tasksStore = new TasksStore();
