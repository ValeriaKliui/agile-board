import { UserBoardsHeader, UserBoardsList } from '@pages/home/components';
import { useUserBoardsInfo } from '@pages/home/hooks';
import { Spin } from '@shared/components';
import { userStore } from '@store';
import { observer } from 'mobx-react-lite';

export const UserBoards = observer(() => {
  const { userID } = userStore.user ?? {};
  const { isLoading, boardsInfo, fetchBoards } = useUserBoardsInfo(userID);

  if (isLoading) return <Spin />;

  return (
    <>
      {boardsInfo && boardsInfo.length > 0 && <UserBoardsHeader fetchBoards={fetchBoards} />}
      <UserBoardsList boardsInfo={boardsInfo} fetchBoards={fetchBoards} />
    </>
  );
});
