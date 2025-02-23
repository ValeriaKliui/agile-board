import { UserBoards, UserBoardsCreator } from '@pages/home';
import { Flex } from 'antd';

export const HomePage = () => {
  return (
    <Flex vertical gap='large' align='flex-start'>
      <UserBoardsCreator />
      <UserBoards />
    </Flex>
  );
};
