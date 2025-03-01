import { UserBoards, UserBoardsCreator, useUserBoardsInfo, WelcomeComponent } from '@pages/home';
import { userStore } from '@store';
import { Flex, Spin } from 'antd';
import { observer } from 'mobx-react-lite';

import { ResultStyled } from './styled';

export const HomePage = observer(() => {
   const userID = userStore.user?.userID;
  const isLoggedIn = userStore.isLoggedIn  
 const { isLoading, boardsInfo, fetchBoards } = useUserBoardsInfo(userID);

  const noBoards = boardsInfo.length === 0;


  if (isLoading) {
    return (
      <Flex justify="center" align="center" style={{ height: '100vh' }}>
        <Spin size="large" />
      </Flex>
    );
  }


  if (!isLoggedIn) {
    return <WelcomeComponent />;
  }

  return (
    <Flex vertical align={noBoards ? 'center' : 'start'}>
      {noBoards ? (
        <ResultStyled
          status="404"
          title="You don't have any boards yet"
          subTitle="Create new!"
          extra={<UserBoardsCreator fetchUserBoards={fetchBoards} />}
        />
      ) : (
        <>
          <UserBoardsCreator fetchUserBoards={fetchBoards} />
          <UserBoards boardsInfo={boardsInfo} />
        </>
      )}
    </Flex>
  );
});