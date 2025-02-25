import { UserBoards, UserBoardsCreator, useUserBoardsInfo } from '@pages/home';
import { ResultStyled } from './styled';
import { userStore } from '@store/user';
import { Flex, } from 'antd';
import { observer } from 'mobx-react-lite';

export const HomePage = observer(() => {
  const { isLoading, boardsInfo, fetchBoards } = useUserBoardsInfo(userStore.userID);
  const noBoards = boardsInfo.length === 0;

  return (
    <Flex vertical align={noBoards ? 'center' : 'flex-start'}>
      {noBoards ?
        <ResultStyled
          status="404"
          title="You don't have any boards yet"
          subTitle="Create new!"
          extra={<UserBoardsCreator fetchUserBoards={fetchBoards} />}
        /> : <UserBoardsCreator fetchUserBoards={fetchBoards} />}
      <UserBoards boardsInfo={boardsInfo} isLoading={isLoading} />
    </Flex>
  );
});
