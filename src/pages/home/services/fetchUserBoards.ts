import {
  BOARDS_COLLECTION_NAME,
  USER_BOARDS_COLLECTION_NAME,
  USERS_COLLECTION_NAME,
} from '@constants';
import { getFulfilledResults, groupArrayByValue } from '@pages/home/utils';
import { ROLES, ROLES_VALUES } from '@shared/constants';
import { getCollection, getData } from '@shared/services';
import { BoardInfo, fetchBoard } from '@store';

import { UserBoard } from './types';

const fetchBoardsWithRoles = async (userBoards: UserBoard[]): Promise<BoardInfo[]> => {
  try {
    const boardDataPromises = userBoards.map(({ id }) => fetchBoard({ boardID: id }));
    const boardsInfo = await getFulfilledResults(boardDataPromises);

    return boardsInfo.map((board, index) => ({
      ...(board as BoardInfo),
      boardID: board?.boardID ?? '',
      title: board?.title ?? 'Untitled',
      createdAt: board?.createdAt ?? new Date(),
      owner: board?.owner ?? 'Unknown',
      userRole: userBoards[index].role,
    }));
  } catch (error) {
    console.error('FetchingBoards error:', error);
    return [];
  }
};

const fetchBoardsWithOwners = async (boards: BoardInfo[]) => {
  try {
    const ownerDataPromises = boards.map(async (board) => {
      const ownerData = board.owner
        ? await getData<{ username: string } | null>(USERS_COLLECTION_NAME, board.owner)
        : null;

      return {
        ...board,
        owner: (ownerData?.username || 'Unknown') as ROLES_VALUES,
      };
    });

    return getFulfilledResults(ownerDataPromises);
  } catch (error) {
    console.error('FetchingBoards error:', error);
    return [];
  }
};

export const fetchUserBoards = async (userID: string | null): Promise<[ROLES, BoardInfo[]][]> => {
  if (!userID) return [];
  const userBoards = await getCollection<UserBoard>({
    collectionPaths: [USER_BOARDS_COLLECTION_NAME, userID, BOARDS_COLLECTION_NAME],
  });

  if (!userBoards?.length) return [];

  const boardsWithRoles = await fetchBoardsWithRoles(userBoards);
  const boardsWithOwners = await fetchBoardsWithOwners(boardsWithRoles);

  const sortedByRole = Object.entries(
    groupArrayByValue<BoardInfo>(boardsWithOwners, 'userRole'),
  ).map(([role, boards]) => [role as ROLES, boards]);
  return sortedByRole as [ROLES, BoardInfo[]][];
};
