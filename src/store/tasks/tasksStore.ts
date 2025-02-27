import { db } from '@config';
import { BOARDS_COLLECTION_NAME, COLUMNS_COLLECTION_NAME } from '@constants';
import { fetchTasks } from '@shared/services/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { makeAutoObservable, runInAction } from 'mobx';
import { BoardInfo, boardStore } from 'store/board';
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
  async addTask({
    columnID,
    task,
  }: Pick<Column, 'columnID'> & {
    task: Task;
  }) {
    try {
      const boardID = boardStore.currentBoardInfo?.boardID;

      await addDoc(
        collection(db, BOARDS_COLLECTION_NAME, boardID, COLUMNS_COLLECTION_NAME, columnID, 'tasks'),
        task,
      );

      runInAction(() => {
        const currentTasks = this.tasks[columnID];
        this.tasks[columnID] = [...currentTasks, task];
      });
    } catch (error) {
      console.error(error);
      if (error instanceof Error) this.error = error.message;
    }
  }
}

export const tasksStore = new TasksStore();
