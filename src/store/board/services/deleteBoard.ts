import { BOARDS_COLLECTION_NAME, USER_BOARDS_COLLECTION_NAME } from '@constants';
import { deleteCollection, deleteData } from '@shared/services';

import { DeleteBoard } from './types';

export const deleteBoard = async ({ boardID, userID }: DeleteBoard) => {
  try {
    await deleteData(BOARDS_COLLECTION_NAME, boardID);
    await deleteCollection({
      collectionPaths: [USER_BOARDS_COLLECTION_NAME, userID, BOARDS_COLLECTION_NAME],
      docID: boardID,
    });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) throw new Error(error.message);
  }
};
