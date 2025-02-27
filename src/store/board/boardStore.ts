import {
  BOARDS_COLLECTION_NAME,
  BOARDS_TEMPLATE_COLLECTION_NAME,
  COLUMNS_COLLECTION_NAME,
} from '@constants';
import { createBoard, fetchBoard, getCollection, updateData } from '@shared/services/firebase';
import { deleteData } from '@shared/services/firebase/db/deleteData';
import { type Column, columnsStore, userStore } from '@store';
import { makeAutoObservable, runInAction } from 'mobx';

import { BoardCreationInfo, BoardInfo, UpdateBoardInfo } from './types';

class BoardStore {
  isLoading = false;
  error: string | null = null;
  currentBoardInfo: BoardInfo | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async createBoard({ title, owner, members, template }: BoardCreationInfo) {
    this.isLoading = true;
    this.error = null;

    try {
      const { boardID, boardData } = await createBoard({
        title,
        owner,
        members,
      });

      const columns = template ? await this.fetchTemplateColumns({ template }) : [];

      if (columns.length > 0) {
        await columnsStore.addColumns({ boardID, columns });
      }

      runInAction(() => {
        this.currentBoardInfo = { boardID, ...boardData };
      });
    } catch (error) {
      if (error instanceof Error) this.error = error.message;
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  }

  private async fetchTemplateColumns({ template }: Pick<BoardCreationInfo, 'template'>) {
    this.isLoading = true;
    this.error = null;

    try {
      const columns = await getCollection<Column>([
        BOARDS_TEMPLATE_COLLECTION_NAME,
        template,
        COLUMNS_COLLECTION_NAME,
      ]);

      return columns?.map(({ id: _, ...column }) => column) || [];
    } catch (error) {
      if (error instanceof Error) this.error = error.message;
      return [];
    }
  }

  async updateBoard({ boardID, boardData }: UpdateBoardInfo) {
    this.isLoading = true;
    this.error = null;

    try {
      await updateData(BOARDS_COLLECTION_NAME, boardID, boardData);

      runInAction(() => {
        if (this.currentBoardInfo)
          this.currentBoardInfo = { ...this.currentBoardInfo, ...boardData };
      });
    } catch (error) {
      if (error instanceof Error) this.error = error.message;
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  }

  async fetchCurrentBoard({ boardID }: Pick<BoardInfo, 'boardID'>) {
    this.isLoading = true;

    try {
      const boardInfo = await fetchBoard({ boardID });
      await columnsStore.fetchColumns({ boardID });

      runInAction(() => {
        if (boardInfo) this.currentBoardInfo = boardInfo;
      });
    } catch (error) {
      if (error instanceof Error) this.error = error.message;
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  }

  async deleteBoard({ boardID }: Pick<BoardInfo, 'boardID'>) {
    try {
      await deleteData(BOARDS_COLLECTION_NAME, boardID);

      runInAction(() => (this.currentBoardInfo = null));
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
export const boardStore = new BoardStore();
