import { fetchTasks, moveDocument } from '@shared/services';
import { defineColumnForTask, updateDataWithID } from '@shared/utils';
import { BoardInfo, Column, Tasks } from '@store';
import { makeAutoObservable, runInAction } from 'mobx';
import { UpdateTaskParams } from 'store/tasks/services/types';
import { updateTask } from 'store/tasks/services/updateTask';

import { addTask, AddTaskParams } from './services';

class TasksStore {
  tasks: Tasks = {};
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  handleError(error: unknown) {
    console.error(error);
    this.error = error instanceof Error ? error.message : 'An unknown error occurred';
  }

  async addTask({ columnID, task, boardID }: AddTaskParams) {
    this.isLoading = true;
    try {
      const taskCreated = await addTask({ boardID, columnID, task });

      runInAction(() => {
        this.tasks[columnID] = [...(this.tasks[columnID] || []), taskCreated];
      });
    } catch (error) {
      this.handleError(error);
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  }

  async updateTask({ taskID, boardID, ...task }: UpdateTaskParams) {
    try {
      this.isLoading = true;
      const columnID = defineColumnForTask(this.tasks, taskID);

      runInAction(() => {
        this.tasks[columnID] = updateDataWithID(this.tasks[columnID], 'taskID', taskID, task);
      });

      await updateTask({ ...task, boardID, columnID, taskID });
    } catch (error) {
      this.handleError(error);
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  }

  async fetchTasks({ columnID, boardID }: Pick<BoardInfo, 'boardID'> & Pick<Column, 'columnID'>) {
    this.isLoading = true;

    try {
      const tasks = await fetchTasks({ columnID, boardID });

      runInAction(() => {
        if (tasks) this.tasks[columnID] = tasks;
      });
    } catch (error) {
      this.handleError(error);
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  }

  async moveTask({ taskID, newColumnID, boardID }) {
    const columnID = defineColumnForTask(this.tasks, taskID);

    runInAction(() => {
      const currTask = this.tasks[columnID].find(({ taskID: prevID }) => taskID === prevID);

      this.tasks[columnID] = this.tasks[columnID].filter(
        ({ taskID: movedID }) => movedID !== taskID,
      );
      if (this.tasks[newColumnID]) this.tasks[newColumnID] = [...this.tasks[newColumnID], currTask];
      else this.tasks[newColumnID] = [currTask];
    });

    await moveDocument({
      collectionPaths: ['boards', boardID, 'columns', columnID, 'tasks', taskID],
      docID: taskID,
      targetCollectionPaths: ['boards', boardID, 'columns', newColumnID, 'tasks'],
    });
  }
}

export const tasksStore = new TasksStore();
