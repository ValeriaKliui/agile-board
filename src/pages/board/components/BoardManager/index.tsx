import { Board, BoardDetails } from '@pages/board/components';
import { boardStore } from '@store';
import { Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';

import { FlexStyled } from './styled';
import { BoardManagerProps } from './types';

export const BoardManager = observer(({ boardID }: BoardManagerProps) => {
    const isLoading = boardStore.isLoading

    const fetchCurrentBoard = useCallback(async () => {
        if (boardID) await boardStore.fetchCurrentBoard({ boardID });
    }, [boardID]);

    useEffect(() => {
        fetchCurrentBoard();
    }, [fetchCurrentBoard]);

    return (
        <FlexStyled vertical gap="large" align={isLoading ? 'center' : 'flex-start'} justify='center' >
            {isLoading ? (
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
