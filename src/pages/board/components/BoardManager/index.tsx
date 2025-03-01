import { Board, BoardDetails } from '@pages/board/components';
import { boardStore, } from '@store';
import { Flex, Spin, Typography, } from 'antd';
import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';

import { BoardManagerProps } from './types';

const { Text } = Typography

export const BoardManager = observer(({ boardID }: BoardManagerProps) => {
    const fetchCurrentBoard = useCallback(async () => {
        if (boardID) await boardStore.fetchCurrentBoard({ boardID });
    }, [boardID]);

    useEffect(() => {
        fetchCurrentBoard();
    }, [fetchCurrentBoard]);

    if (boardStore.isLoading) return <Spin />;
    if (boardStore.error) {
        return (
            <Flex vertical gap="middle" align="center">
                <Text type="danger">{boardStore.error}</Text>
            </Flex>
        );
    }

    return (
        <Flex vertical gap="middle">
            {boardID && <BoardDetails boardID={boardID} />}
            <Board />
        </Flex>
    );
});
