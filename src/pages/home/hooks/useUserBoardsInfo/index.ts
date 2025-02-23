import { ROLES } from '@constants';
import { fetchUserBoards } from '@pages/home/services';
import { BoardInfo } from '@store/boards/types';
import { userStore } from '@store/user';
import { useCallback, useEffect, useState } from 'react';

export const useUserBoardsInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [boardsInfo, setBoardsInfo] = useState<[ROLES, BoardInfo[]]>([]);

  const onFetch = useCallback(async () => {
    const data = await fetchUserBoards(userStore.userID);
    return data;
  }, []);

  useEffect(() => {
    const loadBoards = async () => {
      setIsLoading(true);
      const data = await onFetch();
      setBoardsInfo(data);
      setIsLoading(false);
    };

    loadBoards();
  }, [
    // userStore.userID,
    onFetch,
  ]);

  return { boardsInfo, isLoading, onFetch };
};
