import { BOARDS_DB_NAME } from '@constants/common';
import { UserBoards } from '@store/boards/interfaces';
import { getData } from '@utils/firebase/db/getData';
import { makeAutoObservable } from 'mobx';

class BoardsStore {
  userBoards: UserBoards = {};
  boardsInfo = {};
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUserBoards = (boards) => {
    this.userBoards = boards;
  };

  async fetchBoardInfo(boardName) {
    this.loading = true;
    this.error = null;

    try {
      const boardInfo = await getData(BOARDS_DB_NAME, boardName);

      this.boardsInfo[boardName] = boardInfo;
    } catch (err) {
      console.log(err);
      this.error = `Не удалось загрузить информацию для доски ${boardName}`;
    } finally {
      this.loading = false;
    }
  }

  async fetchAllBoardsInfo() {
    for (const boardName in this.userBoards) {
      if (!this.boardsInfo[boardName]) {
        await this.fetchBoardInfo(boardName);
      }
    }
  }
}
export default new BoardsStore();
