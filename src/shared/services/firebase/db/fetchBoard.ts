import { BOARDS_COLLECTION_NAME } from '@constants';
import { formatDatetime, getData } from '@shared/services/firebase';
import { BoardInfo, BoardInfoResponse } from '@store';

export const fetchBoard = async ({ boardID }: Pick<BoardInfo, 'boardID'>) => {
  try {
    const board = await getData<BoardInfoResponse>(BOARDS_COLLECTION_NAME, boardID);

    if (!board) throw new Error('Board wasnt found');

    const formattedData = formatDatetime({ timestamp: board?.createdAt });

    return { ...board, boardID, createdAt: formattedData };
  } catch (error) {
    console.error(error)
    if (error instanceof Error) throw new Error(error.message);
  }
};
