import boardsStore from '@store/boards/boardsStore';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

export const UserBoardsInfoContainer = observer(() => {
  useEffect(() => {
    boardsStore.fetchAllBoardsInfo();
  }, []);

  console.log(toJS(boardsStore.boardsInfo));

  // useEffect(() => {
  //     const fetchUserInfo = async () => {
  //         await boardsStore.fetchBoardsInfo(Object.keys(boardsStore.userBoards));
  //     }
  //     fetchUserInfo()
  // }, [])

  // const allUserBoards = boardsStore.boardsByRole;
  // const fetchBoardsInfo = async (boardIDs) => {
  //     await boardsStore.fetchBoardsInfo(boardIDs);
  // };

  // useEffect(() => {
  //     fetchBoardsInfo(Object.keys(boardsStore.userBoards));
  // }, []);

  return <>{/* {allUserBoards.map(([role, boardName]) => role + boardName)} */}</>;
});
