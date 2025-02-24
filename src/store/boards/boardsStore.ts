import { BOARDS_DB_NAME, ROLES } from '@constants';
import { addMembersToBoard, createBoard, getData } from '@shared/services/firebase';
import { BoardCreationInfo, BoardInfo } from '@store/boards/types';
import { userStore } from '@store/user';
import { makeAutoObservable, runInAction, toJS } from 'mobx';

class BoardsStore {
  isLoading = false;
  error: string | null = null;
  currentBoardInfo: BoardInfo | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async createBoard({ title, owner, members, template }: BoardCreationInfo) {
    try {
      this.isLoading = false;

      members[owner] = ROLES.OWNER;

      const boardID = await createBoard({ title, owner, members, template });

      if (boardID) {
        await addMembersToBoard({ boardID, members, owner });
      }
    } catch (error) {
      if (error instanceof Error) this.error = 'Error creating board or adding participants';
    }
  }

  async fetchCurrentBoard({ boardID }) {
    this.isLoading = false;

    try {
      this.isLoading = true;
      const board = await getData<BoardInfo>(BOARDS_DB_NAME, boardID);

      runInAction(() => {
        if (board) this.currentBoardInfo = board;
      });
    } catch (error) {
      if (error instanceof Error) this.error = error.message;
    } finally {
      this.isLoading = false;
    }
  }

  get currentRole() {
    console.log(toJS(this.currentBoardInfo?.members), userStore.userID);
    return this.currentBoardInfo?.members[userStore.userID] || null;
  }
}
export const boardsStore = new BoardsStore();
