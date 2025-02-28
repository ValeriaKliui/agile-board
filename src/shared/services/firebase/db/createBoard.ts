import { BOARDS_COLLECTION_NAME, ROLES } from '@constants';
import { addMembersToBoard, formatDatetime, setData } from '@shared/services/firebase';
import { BoardCreationParams } from '@store';
import { Timestamp } from 'firebase/firestore';

export const createBoard = async ({ title, owner, members }: BoardCreationParams) => {
  try {
    members[owner] = ROLES.OWNER;

    const boardData = {
      title,
      createdAt: Timestamp.fromDate(new Date()),
      owner,
      members,
    };

    const boardID = await setData({
      collectionPaths: [BOARDS_COLLECTION_NAME],
      data: boardData,
    });

    if (!boardID) throw new Error('Board wasn`t created');

    const formattedData = formatDatetime({ timestamp: boardData.createdAt });

    await addMembersToBoard({ boardID, members });

    return { boardID, boardData: { ...boardData, createdAt: formattedData } };
  } catch (error) {
    throw new Error(
      `Error creating board: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
};
