import { BOARDS_COLLECTION_NAME } from '@constants';
import { ROLES } from '@shared/constants';
import { addMembersToBoard, formatDatetime, setData } from '@shared/services';
import { BoardCreationParams } from '@store';

export const createBoard = async ({ title, owner, members }: BoardCreationParams) => {
  try {
    members[owner] = ROLES.OWNER;

    const boardData = {
      title,
      createdAt: new Date(),
      owner,
      members,
    };

    const boardID = await setData({
      collectionPaths: [BOARDS_COLLECTION_NAME],
      data: boardData,
    });

    if (!boardID) throw new Error('Board wasn`t created');
    await addMembersToBoard({ boardID, members });

    const formattedData = formatDatetime({ timestamp: boardData.createdAt });

    return { boardID, boardData: { ...boardData, createdAt: formattedData } };
  } catch (error) {
    throw new Error(
      `Error creating board: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
};
