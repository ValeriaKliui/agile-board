import { BOARDS_TEMPLATE_COLLECTION_NAME, COLUMNS_COLLECTION_NAME } from '@constants';
import { createBoard, fetchBoard, fetchMembersData, getCollection } from '@shared/services';
import { type Column, columnsStore, DeleteBoard, deleteBoard, userStore } from '@store';
import { makeAutoObservable, runInAction } from 'mobx';

import { BoardCreationInfo, BoardInfo, Member, UpdateBoardInfo } from './types';

class BoardStore {
  isLoading = false;
  error: string | null = null;
  currentBoardInfo: BoardInfo | null = null;
  membersInfo: Member[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get currentRole() {
    const { userID } = userStore.user ?? {};
    if (userID) return this.currentBoardInfo?.members[userID];
    return null;
  }

  async createBoard({ title, owner, members, template }: BoardCreationInfo) {
    this.isLoading = true;

    try {
      const { boardID, boardData } = await createBoard({
        title,
        owner,
        members,
      });

      const columns = template ? await this.fetchTemplatedBoard({ template }) : [];

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

  private async fetchTemplatedBoard({ template }: Pick<BoardCreationInfo, 'template'>) {
    this.isLoading = true;
    this.error = null;

    try {
      const columns = await getCollection<Column>({
        collectionPaths: [BOARDS_TEMPLATE_COLLECTION_NAME, template, COLUMNS_COLLECTION_NAME],
      });

      return columns?.map(({ id: _, ...column }) => column) || [];
    } catch (error) {
      if (error instanceof Error) this.error = error.message;
      return [];
    }
  }

  async updateBoard(boardData: UpdateBoardInfo) {
    this.isLoading = true;

    try {
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
      const membersInfo = await fetchMembersData({ members: boardInfo?.members });
      await columnsStore.fetchColumns({ boardID });

      runInAction(() => {
        if (boardInfo) this.currentBoardInfo = boardInfo;
        this.membersInfo = membersInfo;
      });
    } catch (error) {
      if (error instanceof Error) this.error = error.message;
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  }

  async deleteBoard({ boardID, userID }: DeleteBoard) {
    try {
      await deleteBoard({ boardID, userID });

      runInAction(() => (this.currentBoardInfo = null));
    } catch (error) {
      if (error instanceof Error) this.error = error.message;
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  }
}
export const boardStore = new BoardStore();
