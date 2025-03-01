import {
  BOARDS_COLLECTION_NAME,
  BOARDS_TEMPLATE_COLLECTION_NAME,
  COLUMNS_COLLECTION_NAME,
  USER_BOARDS_COLLECTION_NAME,
} from '@constants';
import { getCollection } from '@pages/home/services';
import { ROLES } from '@shared/constants';
import {
  createBoard,
  deleteCollection,
  deleteData,
  fetchBoard,
  fetchMembersData,
  updateData,
} from '@shared/services';
import { type Column, columnsStore, userStore } from '@store';
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
  async createBoard({ title, owner, members, template }: BoardCreationInfo) {
    this.isLoading = true;
    this.error = null;

    try {
      members[owner] = ROLES.OWNER;

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

  async fetchTemplateColumns({ template }: Pick<BoardCreationInfo, 'template'>) {
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

  async updateBoard({ boardID, boardData }: UpdateBoardInfo) {
    this.isLoading = true;
    this.error = null;

    try {
      await updateData({
        collectionPaths: [BOARDS_COLLECTION_NAME, boardID],
        data: boardData,
      });

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

  async deleteBoard({ boardID, userID }: Pick<BoardInfo, 'boardID'>) {
    try {
      await deleteData(BOARDS_COLLECTION_NAME, boardID);
      await deleteCollection({
        collectionPaths: [USER_BOARDS_COLLECTION_NAME, userID, BOARDS_COLLECTION_NAME],
        docID: boardID,
      });

      runInAction(() => (this.currentBoardInfo = null));
    } catch (error) {
      if (error instanceof Error) this.error = error.message;
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  }

  get currentRole() {
    const userID = userStore.user?.userID;
    if (userID) return this.currentBoardInfo?.members[userID];
    return null;
  }
}
export const boardStore = new BoardStore();
