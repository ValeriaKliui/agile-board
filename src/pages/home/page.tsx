import { UserBoards, UserBoardsCreator, useUserBoardsInfo } from '@pages/home';
import { userStore } from '@store/user';
import { Flex } from 'antd';
import { observer } from 'mobx-react-lite';

export const HomePage = observer(() => {
  const { isLoading, boardsInfo, fetchBoards } = useUserBoardsInfo(userStore.userID)

  return (
    <Flex vertical gap='large' align='flex-start'>
      <UserBoardsCreator fetchUserBoards={fetchBoards} />
      <UserBoards boardsInfo={boardsInfo} isLoading={isLoading} />
    </Flex>
  );
})