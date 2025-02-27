import { BOARDS_COLLECTION_NAME, ROLES_VALUES, USER_BOARDS_COLLECTION_NAME, USERS_COLLECTION_NAME } from '@constants';
import { getFulfilledResults, groupArrayByValue } from '@pages/home/utils';
import { getCollection, getData } from '@shared/services/firebase';
import { BoardInfo } from '@store/boards/types';

import { UserBoard } from './types';

export const fetchUserBoards = async (
  userID: string | null,
): Promise<[ROLES_VALUES, BoardInfo[]][]> => {
  if (!userID) return [];

  const userBoards = await getCollection<UserBoard>([USER_BOARDS_COLLECTION_NAME, userID, BOARDS_COLLECTION_NAME]);

  if (!userBoards?.length) return [];

  const boardDataPromises = userBoards.map(({ id }) =>
    getData<BoardInfo | null>(BOARDS_COLLECTION_NAME, id),
  );
  const boardsInfo = await getFulfilledResults(boardDataPromises);

  const boardsWithRoles = boardsInfo.map((board, index) => ({
    ...board,
    userRole: userBoards[index].role,
  }));

  const ownerDataPromises = boardsWithRoles.map(async (board) => {
    const ownerData = board.owner
      ? await getData<{ username: string } | null>(USERS_COLLECTION_NAME, board.owner)
      : null;
    return { ...board, owner: (ownerData?.username || 'Unknown') as ROLES_VALUES };
  });

  const boardsInfoWithOwners = await getFulfilledResults(ownerDataPromises);
  return Object.entries(groupArrayByValue<Partial<BoardInfo>>(boardsInfoWithOwners, 'userRole'));
};
