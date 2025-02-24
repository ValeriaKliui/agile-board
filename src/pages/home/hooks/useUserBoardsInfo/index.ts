import { ROLES } from '@constants';
import { fetchUserBoards } from '@pages/home/services';
import { BoardInfo } from '@store/boards/types';
import { useCallback, useEffect, useState } from 'react';

export const useUserBoardsInfo = (userID: string) => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [boardsInfo, setBoardsInfo] = useState<[ROLES, BoardInfo[]] | []>([]);

  const fetchBoards = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fetchUserBoards(userID);
      setBoardsInfo(data);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [userID]);

  useEffect(() => {
    fetchBoards();
  }, [fetchBoards]);

  return { boardsInfo, isLoading, fetchBoards, error };
};
