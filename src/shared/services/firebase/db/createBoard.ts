import { BOARDS_DB_NAME } from '@constants';
import { addMembersToBoard, formatDatetime,setData } from '@shared/services/firebase';
import { BoardCreationParams } from '@store';
import { Timestamp } from 'firebase/firestore';

export const createBoard = async ({ title, owner, members }: BoardCreationParams) => {
  try {
    const boardData = {
      title,
      createdAt: Timestamp.fromDate(new Date()),
      owner,
      members,
    };
    const id = await setData(BOARDS_DB_NAME, null, boardData);
    if (!id) throw new Error('Board wasn`t created');

    const formattedData = formatDatetime({ timestamp: boardData.createdAt });

    await addMembersToBoard({ id, members });

    return { id, boardData: { ...boardData, createdAt: formattedData } };
  } catch (error) {
    throw new Error(
      `Error creating board: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
};
