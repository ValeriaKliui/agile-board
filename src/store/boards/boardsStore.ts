import { db } from '@config';
import { BOARDS_DB_NAME, ROLES, USER_BOARDS_DB_NAME } from '@constants';
import { getCollection, setData } from '@services/firebase';
import { BoardInfo } from '@store/boards/types';
import { doc, setDoc } from 'firebase/firestore';

class BoardsStore {
  async createBoard({ title, owner, members }: Omit<BoardInfo, 'createdAt'>) {
    try {
      const boardId = await setData(BOARDS_DB_NAME, null, {
        title,
        createdAt: new Date(),
        owner,
        members,
      });

      const membersArray = Object.entries(members);
      membersArray.push([owner, ROLES.OWNER]);

      for (const [userID, role] of membersArray) {
        const userBoardRef = doc(db, USER_BOARDS_DB_NAME, userID, BOARDS_DB_NAME, boardId);
        await setDoc(userBoardRef, { role });
      }
    } catch (error) {
      console.error('Error creating board or adding participants:', error);
    }
  }
  async fetchTemplates() {
    const doc = await getCollection(['boards_templates']);
    console.log(doc);
  }
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
