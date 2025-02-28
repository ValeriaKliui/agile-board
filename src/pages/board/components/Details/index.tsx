import { PATHS } from '@constants';
import { BoardHeader, MembersListManager } from '@pages/board/components';
import { Button } from '@shared/components';
import { BoardInfo, boardStore, userStore } from '@store';
import { Flex, Typography } from 'antd';
import { useCallback, } from 'react';
import { useNavigate } from 'react-router';

const { Text } = Typography;

export const BoardDetails = ({ boardID }: Pick<BoardInfo, 'boardID'>) => {
    const navigate = useNavigate()
    const { title, createdAt, members } = boardStore.currentBoardInfo ?? {};

    const onDelete = useCallback(async () => {
        const userID = userStore.user?.userID
        if (boardID && userID) {
            await boardStore.deleteBoard({ boardID, userID })
            navigate(PATHS.HOME)
        }
    }, [boardID, navigate])

    return < Flex justify="space-between" >
        <Flex gap="large" align="center">
            {title && <BoardHeader title={title} />}
            <MembersListManager members={members} />
        </Flex>
        <Flex gap="small" align="center">
            <Text><strong>Created:</strong> {createdAt}</Text>
            <Button type="dashed" onClick={onDelete}>Delete board</Button>
        </Flex>
    </Flex >
}
