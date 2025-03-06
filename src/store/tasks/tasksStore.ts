import { defineColumnForTask, updateDataWithID } from '@shared/utils';
import {
  addTask,
  AddTaskParams,
  FetchTaskParams,
  fetchTasks,
  moveTask,
  MoveTaskParams,
  Tasks,
  updateTask,
  UpdateTaskParams,
} from '@store';
import { makeAutoObservable, runInAction } from 'mobx';

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

  private setLoadingState(state: boolean) {
    runInAction(() => {
      this.isLoading = state;
    });
  }

  private async performTaskOperation(taskOperation: () => Promise<void>) {
    try {
      this.error = null;
      this.setLoadingState(true);
      await taskOperation();
    } catch (error) {
      this.handleError(error);
    } finally {
      this.setLoadingState(false);
    }
  }

  private getTaskByID(taskID: string) {
    const columnID = defineColumnForTask(this.tasks, taskID);

    return this.tasks[columnID]?.find(({ taskID: prevID }) => taskID === prevID);
  }

  async addTask({ columnID, task, boardID }: AddTaskParams) {
    await this.performTaskOperation(async () => {
      const taskCreated = await addTask({ boardID, columnID, task });
      runInAction(() => {
        this.tasks[columnID] = [...(this.tasks[columnID] || []), taskCreated];
      });
    });
  }

  async updateTask({ taskID, boardID, ...task }: UpdateTaskParams) {
    await this.performTaskOperation(async () => {
      const columnID = defineColumnForTask(this.tasks, taskID);
      await updateTask({ ...task, boardID, columnID, taskID });
      runInAction(() => {
        this.tasks[columnID] = updateDataWithID(this.tasks[columnID], 'taskID', taskID, task);
      });
    });
  }

  async fetchTasks({ columnID, boardID }: FetchTaskParams) {
    await this.performTaskOperation(async () => {
      const tasks = await fetchTasks({ columnID, boardID });
      runInAction(() => {
        if (tasks) this.tasks[columnID] = tasks;
      });
    });
  }

  async moveTask({ taskID, newColumnID, boardID }: MoveTaskParams) {
    await this.performTaskOperation(async () => {
      const columnID = defineColumnForTask(this.tasks, taskID);
      const isSameColumn = columnID === newColumnID;

      const currTask = this.getTaskByID(taskID);

      runInAction(() => {
        this.tasks[columnID] =
          this.tasks[columnID]?.filter(({ taskID: movedID }) => movedID !== taskID) || [];
        if (currTask) this.tasks[newColumnID] = [...(this.tasks[newColumnID] || []), currTask];
      });

      if (!isSameColumn) await moveTask({ task: currTask, boardID, columnID, taskID, newColumnID });
    });
  }
}

export const tasksStore = new TasksStore();
