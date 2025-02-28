import { Board, BoardDetails } from '@pages/board/components';
import { boardStore, } from '@store';
import { Flex, Spin, } from 'antd';
import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';

import { BoardManagerProps } from './types';

export const BoardManager = observer(({ boardID }: BoardManagerProps) => {
    const fetchCurrentBoard = useCallback(async () => {
        if (boardID) await boardStore.fetchCurrentBoard({ boardID });
    }, [boardID]);

    useEffect(() => {
        fetchCurrentBoard();
    }, [fetchCurrentBoard]);

    if (boardStore.isLoading) return <Spin />;

    return (
        <Flex vertical gap="middle">
            {boardID && <BoardDetails boardID={boardID} />}
            <Board />
        </Flex>
    );
});
