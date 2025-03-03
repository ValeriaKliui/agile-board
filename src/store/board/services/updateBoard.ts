import { BOARDS_COLLECTION_NAME } from '@constants';
import { updateData } from '@shared/services';

import { UpdateBoard } from './types';

export const updateBoard = async ({ board }: UpdateBoard) => {
  try {
    if (board.boardID)
      await updateData({
        collectionPaths: [BOARDS_COLLECTION_NAME, board.boardID],
        data: board,
      });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) throw new Error(error.message);
  }
};
