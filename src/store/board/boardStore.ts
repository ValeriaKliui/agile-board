import { BOARDS_COLLECTION_NAME, BOARDS_TEMPLATE_COLLECTION_NAME, ROLES } from '@constants';
import { createBoard, fetchBoard, getCollection, updateData } from '@shared/services/firebase';
import { WithId } from '@shared/types';
import { type Column, columnsStore, userStore } from '@store';
import { makeAutoObservable, runInAction } from 'mobx';

import { BoardCreationInfo, BoardInfo, UpdateBoardInfo } from './types';

class BoardStore {
  isLoading = false;
  error: string | null = null;
  currentBoardInfo: BoardInfo | null = null;
  boards: BoardInfo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async createBoard({ title, owner, members, template }: BoardCreationInfo) {
    this.isLoading = true;
    this.error = null;
    members[owner] = ROLES.OWNER;

    try {
      const { id, boardData } = await createBoard({
        title,
        owner,
        members,
      });

      if (template) {
        const columns = await getCollection<Column>([
          BOARDS_TEMPLATE_COLLECTION_NAME,
          template,
          'columns',
        ]);
        columnsStore.addColumns({ boardID: id, columns });
      }

      runInAction(() => {
        this.currentBoardInfo = { id, ...boardData };
      });
    } catch (error) {
      if (error instanceof Error) this.error = error.message;
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  }

  async updateBoard({ id, boardData }: UpdateBoardInfo) {
    this.isLoading = true;
    const boardID = id ?? this.currentBoardInfo.id;

    try {
      await updateData(BOARDS_COLLECTION_NAME, boardID, boardData);

      runInAction(() => (this.currentBoardInfo = { ...this.currentBoardInfo, ...boardData }));
    } catch (error) {
      if (error instanceof Error) this.error = error.message;
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  }

  async fetchCurrentBoard({ id }: WithId) {
    this.isLoading = true;

    try {
      const boardInfo = await fetchBoard({ id });
      await columnsStore.fetchColumns({ boardID: id });

      runInAction(() => {
        if (boardInfo) {
          this.currentBoardInfo = boardInfo;
        }
      });
    } catch (error) {
      if (error instanceof Error) this.error = error.message;
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  }

  //   async fetchTasksForColumn({ id }: WithId) {
  //     try {
  //       if (this.currentBoardID) {
  //         const tasks = await getCollection<Task>([
  //           BOARDS_COLLECTION_NAME,
  //           this.currentBoardID,
  //           'columns',
  //           id,
  //           'tasks',
  //         ]);

  //         return tasks;
  //       }

  //       return [];
  //     } catch (error) {
  //       if (error instanceof Error) this.error = error.message;
  //     } finally {
  //       runInAction(() => (this.isLoading = false));
  //     }
  //   }

  get currentRole() {
    return this.currentBoardInfo?.members[userStore.userID] || null;
  }
}
export const boardStore = new BoardStore();
