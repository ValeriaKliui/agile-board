import { BOARDS_DB_NAME, ROLES } from '@constants';
import { addMembersToBoard, createBoard, getCollection, getData } from '@shared/services/firebase';
import { updateData } from '@shared/services/firebase/db/updateData';
import {
  BoardCreationInfo,
  BoardInfo,
  Column,
  Task,
  UpdateBoardInfo,
  WithId,
} from '@store/boards/types';
import { userStore } from '@store/user';
import { makeAutoObservable, runInAction } from 'mobx';

class BoardsStore {
  isLoading = false;
  error: string | null = null;
  currentBoardInfo: BoardInfo | null = null;
  currentBoardID: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async createBoard({ title, owner, members, template }: BoardCreationInfo) {
    try {
      this.isLoading = false;

      members[owner] = ROLES.OWNER;

      const id = await createBoard({ title, owner, members, template });

      if (id) {
        await addMembersToBoard({ id, members });
      }
    } catch (error) {
      if (error instanceof Error) this.error = 'Error creating board or adding participants';
    }
  }

  async updateBoard({ id, boardData }: UpdateBoardInfo) {
    this.isLoading = false;

    try {
      this.isLoading = true;
      await updateData(BOARDS_DB_NAME, id, boardData);

      runInAction(() => (this.currentBoardInfo = { ...this.currentBoardInfo, ...boardData }));
    } catch (error) {
      if (error instanceof Error) this.error = error.message;
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  }

  async fetchCurrentBoard({ id }: WithId) {
    this.isLoading = false;

    try {
      this.isLoading = true;
      const board = await getData<BoardInfo>(BOARDS_DB_NAME, id);
      const columns = await getCollection<Column>([BOARDS_DB_NAME, id, 'columns']);
      this.currentBoardID = id;

      runInAction(() => {
        if (board) this.currentBoardInfo = { ...board, columns };
      });
    } catch (error) {
      if (error instanceof Error) this.error = error.message;
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  }

  async fetchTasksForColumn({ id }: WithId) {
    try {
      if (this.currentBoardID) {
        const tasks = await getCollection<Task>([
          BOARDS_DB_NAME,
          this.currentBoardID,
          'columns',
          id,
          'tasks',
        ]);
        console.log(tasks);

        return tasks;
      }

      return [];
    } catch (error) {
      if (error instanceof Error) this.error = error.message;
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  }

  get currentRole() {
    return this.currentBoardInfo?.members[userStore.userID] || null;
  }
}
export const boardsStore = new BoardsStore();
