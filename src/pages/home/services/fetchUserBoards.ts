import {
  BOARDS_COLLECTION_NAME,
  ROLES_VALUES,
  USER_BOARDS_COLLECTION_NAME,
  USERS_COLLECTION_NAME,
} from '@constants';
import { getFulfilledResults, groupArrayByValue } from '@pages/home/utils';
import { fetchBoard,  getData } from '@shared/services/firebase';
import { BoardInfo } from '@store';

import { getCollection } from '../../../shared/services/firebase/db/getCollection';
import { UserBoard } from './types';

const fetchBoardsWithRoles = async (userBoards: UserBoard[]) => {
  try {
    const boardDataPromises = userBoards.map(({ id }) => fetchBoard({ boardID: id }));
    const boardsInfo = await getFulfilledResults(boardDataPromises);

    return boardsInfo.map((board, index) => ({
      ...board,
      userRole: userBoards[index].role,
    }));
  } catch (error) {
    console.error('FetchingBoards error:', error);
    if (error instanceof Error) throw new Error(error.message);
    return [];
  }
};

const fetchBoardsWithOwners = async (boards: BoardInfo[]) => {
  try {
    const ownerDataPromises = boards.map(async (board) => {
      const ownerData = board.owner
        ? await getData<{ username: string } | null>(USERS_COLLECTION_NAME, board.owner)
        : null;
        console.log(ownerData)

      return {
        ...board,
        owner: (ownerData?.username || 'Unknown') as ROLES_VALUES,
      };
    });

    return getFulfilledResults(ownerDataPromises);
  } catch (error) {
    console.error('FetchingBoards error:', error);
    if (error instanceof Error) throw new Error(error.message);
    return [];
  }
};

export const fetchUserBoards = async (
  userID: string | null,
): Promise<[ROLES_VALUES, BoardInfo[]][]> => {
  if (!userID) return [];

  const userBoards = await getCollection<UserBoard>({
    collectionPaths: [
      USER_BOARDS_COLLECTION_NAME,
      userID,
      BOARDS_COLLECTION_NAME,
    ]
  }
    );

  if (!userBoards?.length) return [];


  const boardsWithRoles = await fetchBoardsWithRoles(userBoards);
  const boardsWithOwners = await fetchBoardsWithOwners(boardsWithRoles);

  return Object.entries(groupArrayByValue<Partial<BoardInfo>>(boardsWithOwners, 'userRole'));
};
