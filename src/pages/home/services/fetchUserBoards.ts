import { BOARDS_DB_NAME, ROLES_VALUES, USER_BOARDS_DB_NAME, USERS_DB_NAME } from '@constants';
import { getFulfilledResults, groupArrayByValue } from '@pages/home/utils';
import { getCollection, getData } from '@services/firebase';
import { BoardInfo } from '@store/boards/types';

import { UserBoard } from './types';

export const fetchUserBoards = async (
  userID: string | null,
): Promise<[ROLES_VALUES, BoardInfo[]][]> => {
  if (!userID) return [];

  const userBoards = await getCollection<UserBoard>([USER_BOARDS_DB_NAME, userID, BOARDS_DB_NAME]);

  if (!userBoards?.length) return [];

  const boardDataPromises = userBoards.map(({ id }) =>
    getData<BoardInfo | null>(BOARDS_DB_NAME, id),
  );
  const boardsInfo = await getFulfilledResults(boardDataPromises);

  const boardsWithRoles = boardsInfo.map((board, index) => ({
    ...board,
    userRole: userBoards[index].role,
  }));

  const ownerDataPromises = boardsWithRoles.map(async (board) => {
    const ownerData = board.owner
      ? await getData<{ username: string } | null>(USERS_DB_NAME, board.owner)
      : null;
    return { ...board, owner: (ownerData?.username || 'Unknown') as ROLES_VALUES };
  });

  const boardsInfoWithOwners = await getFulfilledResults(ownerDataPromises);
  return Object.entries(groupArrayByValue<Partial<BoardInfo>>(boardsInfoWithOwners, 'userRole'));
};
