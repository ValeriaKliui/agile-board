import {
  columnsStore,
  createBoard,
  fetchBoardInfo,
  fetchTemplateBoard,
  updateBoard,
  userStore,
} from '@store';
import { makeAutoObservable, runInAction } from 'mobx';

import { BoardCreationInfo, BoardInfo, Member, TemplatedBoard, UpdateBoardInfo } from './types';

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
    return userID ? this.currentBoardInfo?.members[userID] : null;
  }

  private setLoading(state: boolean) {
    runInAction(() => {
      this.isLoading = state;
    });
  }

  private handleError(error: unknown) {
    if (error instanceof Error) {
      runInAction(() => {
        this.error = error.message;
      });
    }
  }

  async createBoard({ title, owner, members, template }: BoardCreationInfo) {
    this.setLoading(true);

    try {
      const { boardID, boardData } = await createBoard({ title, owner, members });

      if (template) {
        await this.createTemplatedBoard({ template, boardID });
      }

      runInAction(() => {
        this.currentBoardInfo = { boardID, ...boardData };
      });
    } catch (error) {
      this.handleError(error);
    } finally {
      this.setLoading(false);
    }
  }

  private async createTemplatedBoard({ template, boardID }: TemplatedBoard) {
    this.setLoading(true);

    try {
      const columns = await fetchTemplateBoard({ template });

      if (columns.length > 0) {
        await columnsStore.addColumns({ boardID, columns });
      }
    } catch (error) {
      this.handleError(error);
    } finally {
      this.setLoading(false);
    }
  }

  async updateBoard(board: UpdateBoardInfo) {
    this.setLoading(true);

    try {
      await updateBoard({ board });

      runInAction(() => {
        if (this.currentBoardInfo) {
          this.currentBoardInfo = { ...this.currentBoardInfo, ...board };
        }
      });
    } catch (error) {
      this.handleError(error);
    } finally {
      this.setLoading(false);
    }
  }

  async fetchCurrentBoard({ boardID }: Pick<BoardInfo, 'boardID'>) {
    this.setLoading(true);

    try {
      const { boardInfo, membersInfo } = await fetchBoardInfo({ boardID });
      await columnsStore.fetchColumns({ boardID });

      runInAction(() => {
        this.currentBoardInfo = boardInfo;
        this.membersInfo = membersInfo;
      });
    } catch (error) {
      this.handleError(error);
    } finally {
      this.setLoading(false);
    }
  }
}

export const boardStore = new BoardStore();
