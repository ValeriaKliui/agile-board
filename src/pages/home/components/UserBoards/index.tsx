import { UserBoardsHeader, UserBoardsList } from '@pages/home/components';
import { useUserBoardsInfo } from '@pages/home/hooks';
import { userStore } from '@store';
import { Flex, Spin } from 'antd';
import { observer } from 'mobx-react-lite';

export const UserBoards = observer(() => {
  const { userID } = userStore.user ?? {};
  const { isLoading, boardsInfo, fetchBoards } = useUserBoardsInfo(userID);

  if (isLoading) {
    return (
      <Flex justify="center" align="center" style={{ height: '100vh' }}>
        <Spin size="large" />
      </Flex>
    );
  }

  return (
    <>
      {boardsInfo && boardsInfo.length > 0 && <UserBoardsHeader fetchBoards={fetchBoards} />}
      <UserBoardsList boardsInfo={boardsInfo} fetchBoards={fetchBoards} />
    </>
  );
});
