import { db } from '@config/firebase';
import { BOARDS_DB_NAME, USER_BOARDS_DB_NAME } from '@constants/common';
import { setData } from '@services/firebase/db/setData';
import { doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

class BoardsStore {
  createBoard = async ({ title, userID, members }) => {
    try {
      const boardId = uuidv4();

      await setData(BOARDS_DB_NAME, boardId, {
        title,
        createdAt: new Date(),
        owner: userID,
        members: members.reduce((acc, member) => {
          acc[member.userID] = member.role;
          return acc;
        }, {}),
      });

      for (const member of members) {
        const userBoardRef = doc(db, USER_BOARDS_DB_NAME, member.userID, BOARDS_DB_NAME, boardId);
        await setDoc(userBoardRef, { role: member.role });
      }
    } catch (error) {
      console.error('Error creating board or adding participants:', error);
    }
  };
  // boardsInfo = {};
  // loading = false;
  // error = null;

  // constructor() {
  //   makeAutoObservable(this);
  // }

  // setUserBoards = (boards) => {
  //   this.userBoards = boards;
  // };

  // async fetchBoardInfo(boardName) {
  //   this.loading = true;
  //   this.error = null;

  //   try {
  //     const boardInfo = await getData(BOARDS_DB_NAME, boardName);

  //     this.boardsInfo[boardName] = boardInfo;
  //   } catch (err) {
  //     console.log(err);
  //     this.error = `Не удалось загрузить информацию для доски ${boardName}`;
  //   } finally {
  //     this.loading = false;
  //   }
  // }

  // async fetchAllBoardsInfo() {
  //   for (const boardName in this.userBoards) {
  //     if (!this.boardsInfo[boardName]) {
  //       await this.fetchBoardInfo(boardName);
  //     }
  //   }
  // }
}
export const boardsStore = new BoardsStore();
