import { PATHS } from '@constants';
import { boardStore, userStore } from '@store';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export const useBoard = (boardID?: string) => {
  const [canBeDisplayed, setCanBeDisplayed] = useState(false);
  const isLoading = boardStore.isLoading;
  const currentBoardInfo = boardStore.currentBoardInfo;
  const isBoardReady = !isLoading && currentBoardInfo && currentBoardInfo.boardID === boardID;
  const userID = userStore.user?.userID;
  const navigate = useNavigate();

  const fetchCurrentBoard = useCallback(async () => {
    if (boardID) await boardStore.fetchCurrentBoard({ boardID });
  }, [boardID]);

  useEffect(() => {
    fetchCurrentBoard();
  }, [fetchCurrentBoard]);

  useEffect(() => {
    if (userID && isBoardReady) {
      const boardMembers = currentBoardInfo?.members;
      if (!boardMembers?.[userID]) {
        navigate(PATHS.HOME);
      } else {
        setCanBeDisplayed(true);
      }
    }
  }, [userID, isBoardReady, currentBoardInfo, navigate]);

  return { canBeDisplayed, isBoardReady };
};
