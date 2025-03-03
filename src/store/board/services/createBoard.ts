import { BOARDS_COLLECTION_NAME } from '@constants';
import { ROLES } from '@shared/constants';
import { setData } from '@shared/services';
import { addMembersToBoard, BoardCreationParams } from '@store';

const prepareBoardData = ({ title, owner, members }: BoardCreationParams) => ({
  title,
  createdAt: new Date(),
  owner,
  members: { ...members, [owner]: ROLES.OWNER },
});

const saveBoardAndMembers = async (boardData: BoardCreationParams) => {
  const boardID = await setData({
    collectionPaths: [BOARDS_COLLECTION_NAME],
    data: boardData,
  });

  if (!boardID) throw new Error('Board was not created');

  await addMembersToBoard({ boardID, members: boardData.members });

  return boardID;
};

export const createBoard = async (params: BoardCreationParams) => {
  try {
    const boardData = prepareBoardData(params);
    const boardID = await saveBoardAndMembers(boardData);

    return { boardID, boardData: { ...boardData } };
  } catch (error) {
    console.error(error);
    throw new Error(
      `Error creating board: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
};
