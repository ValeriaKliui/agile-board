import { BOARDS_DB_NAME, USER_BOARDS_DB_NAME } from '@constants';
import { BoardInfo } from '@store/boards/types';
import { userStore } from '@store/user';
import { reaction } from 'mobx';
import { useEffect, useState } from 'react';
import { getCollection, getData } from 'services/firebase';

import { UserBoard } from './types';

export const useUserBoardsInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [boardsInfo, setBoardsInfo] = useState<BoardInfo[]>([]);

  useEffect(() => {
    const disposer = reaction(
      () => userStore.userID,
      (userID) => {
        const fetchUserBoards = async () => {
          setIsLoading(true);
          const userBoards = await getCollection<UserBoard>([
            USER_BOARDS_DB_NAME,
            userID,
            BOARDS_DB_NAME,
          ]);

          if (userBoards) {
            const boardsInfo = await Promise.all(
              userBoards.map((board) => getData(BOARDS_DB_NAME, board.id)),
            );
            if (boardsInfo) setBoardsInfo(boardsInfo);
          }
          setIsLoading(false);
        };

        if (userID) fetchUserBoards();
      },
    );

    return () => disposer();
  }, []);

  return { boardsInfo, isLoading };
};
