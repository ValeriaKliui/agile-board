import { BoardInfo, fetchBoard, fetchMembersData } from '@store';

export const fetchBoardInfo = async ({ boardID }: Pick<BoardInfo, 'boardID'>) => {
  try {
    const boardInfo = await fetchBoard({ boardID });
    if (!boardInfo) throw new Error('Error getting board info');

    const membersInfo = await fetchMembersData({ members: boardInfo?.members });

    if (!membersInfo) throw new Error('Error getting members info');

    return { boardInfo, membersInfo };
  } catch (error) {
    console.error(error);
    throw new Error(
      `Error fetching board info: ${error instanceof Error ? error.message : 'Unknown error'}`,
    );
  }
};
