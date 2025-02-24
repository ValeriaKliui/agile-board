import { addMembersToBoard, createBoard } from '@shared/services/firebase';
import { BoardCreationInfo } from '@store/boards/types';
import { makeAutoObservable } from 'mobx';

class BoardsStore {
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async createBoard({ title, owner, members, template }: BoardCreationInfo) {
    try {
      this.isLoading = false;

      const boardID = await createBoard({ title, owner, members, template });

      if (boardID) {
        await addMembersToBoard({ boardID, members, owner });
      }
    } catch (error) {
      if (error instanceof Error) this.error = 'Error creating board or adding participants';
    }
  }
}
export const boardsStore = new BoardsStore();
