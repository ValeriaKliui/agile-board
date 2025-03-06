import { Board, BoardDetails } from '@pages/board/components';
import { useBoard } from '@pages/board/hooks';
import { Spin } from '@shared/components';
import { Flex } from 'antd';
import { observer } from 'mobx-react-lite';

import { BoardManagerProps } from './types';

export const BoardManager = observer(({ boardID }: BoardManagerProps) => {
  const { canBeDisplayed } = useBoard(boardID);

  return (
    <Flex vertical gap="large" align={canBeDisplayed ? 'flex-start' : 'center'} justify="center">
      {!canBeDisplayed ? (
        <Spin />
      ) : (
        <>
          <BoardDetails />
          <Board />
        </>
      )}
    </Flex>
  );
});
