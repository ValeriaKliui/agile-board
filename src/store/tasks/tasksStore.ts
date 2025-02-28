import { BOARDS_COLLECTION_NAME, COLUMNS_COLLECTION_NAME } from '@constants';
import { fetchTasks, setData } from '@shared/services/firebase';
import { moveDocument } from '@shared/services/firebase/db/moveDocument';
import { defineColumnForTask } from '@shared/utils';
import { makeAutoObservable, runInAction, toJS } from 'mobx';
import { BoardInfo, boardStore } from 'store/board';
import { Column } from 'store/columns';

import { Task, Tasks } from './types';

class TasksStore {
  tasks: Tasks = {};
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

      if (boardID)
        await setData({
          collectionPaths: [
            BOARDS_COLLECTION_NAME,
            boardID,
            COLUMNS_COLLECTION_NAME,
            columnID,
            'tasks',
          ],
          data: task,
        });

      runInAction(() => {
        const currentTasks = this.tasks[columnID];
        if (currentTasks) this.tasks[columnID] = [...currentTasks, task];
        else this.tasks[columnID] = [task];
      });
    } catch (error) {
      console.error(error);
      if (error instanceof Error) this.error = error.message;
    }
  }
  async moveTask({ taskID, newColumnID, boardID }) {
    const columnID = defineColumnForTask(this.tasks, taskID);

    runInAction(() => {
      const currTask = this.tasks[columnID].find(({ taskID: prevID }) => taskID === prevID);

      this.tasks[columnID] = this.tasks[columnID].filter(
        ({ taskID: movedID }) => movedID !== taskID,
      );
      this.tasks[newColumnID] = [...this.tasks[newColumnID], currTask];
      console.log(toJS(this.tasks[newColumnID]));
    });

    await moveDocument({
      collectionPaths: ['boards', boardID, 'columns', columnID, 'tasks', taskID],
      docID: taskID,
      targetCollectionPaths: ['boards', boardID, 'columns', newColumnID, 'tasks'],
    });
  }
}

export const tasksStore = new TasksStore();
