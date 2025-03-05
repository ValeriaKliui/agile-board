import { Board, BoardDetails } from '@pages/board/components';
import { useBoard } from '@pages/board/hooks';
import { Spin } from 'antd';
import { observer } from 'mobx-react-lite';

import { FlexStyled } from './styled';
import { BoardManagerProps } from './types';

export const BoardManager = observer(({ boardID }: BoardManagerProps) => {
  const { canBeDisplayed } = useBoard(boardID);

  return (
    <FlexStyled
      vertical
      gap="large"
      align={canBeDisplayed ? 'flex-start' : 'center'}
      justify="center"
      $isLoading={!canBeDisplayed}
    >
      {!canBeDisplayed ? (
        <Spin size="large" />
      ) : (
        <>
          <BoardDetails />
          <Board />
        </>
      )}
    </FlexStyled>
  );
});
