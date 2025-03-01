import { BoardActions, BoardHeader, MembersListManager } from '@pages/board/components';
import { boardStore, } from '@store';
import { Flex, Typography } from 'antd';

const { Text } = Typography;

export const BoardDetails = () => {
    const { title, createdAt, members } = boardStore.currentBoardInfo ?? {};

    return (
        <Flex justify="space-between">
            <Flex gap="large" align="center">
                {title && <BoardHeader title={title} />}
                <MembersListManager members={members} />
            </Flex>
            <Flex gap="small" align="center">
                <Text>
                    <strong>Created:</strong> {createdAt}
                </Text>
                <BoardActions />
            </Flex>
        </Flex>
    );
};
