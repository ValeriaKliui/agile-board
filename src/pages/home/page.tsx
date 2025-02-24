import { UserBoards, UserBoardsCreator, useUserBoardsInfo, WelcomeComponent } from '@pages/home';
import { userStore } from '@store/user';
import { Flex, } from 'antd';
import Title from 'antd/es/typography/Title';
import { observer } from 'mobx-react-lite';

export const HomePage = observer(() => {
  const isLoggedIn = userStore.isLoggedIn;
  const { isLoading, boardsInfo, fetchBoards } = useUserBoardsInfo(userStore.userID);
  const noBoards = boardsInfo.length === 0;

  return (
    <>
      {isLoggedIn ? (
        <Flex vertical gap="large" align="flex-start">
          {noBoards && (
            <Title level={2}>Create new board</Title>
          )}
          <UserBoardsCreator fetchUserBoards={fetchBoards} />
          <UserBoards boardsInfo={boardsInfo} isLoading={isLoading} />
        </Flex>
      ) : (
        <WelcomeComponent />
      )}
    </>
  );
});
