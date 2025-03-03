import { BoardHeader, MembersListManager } from '@pages/board/components';
import { boardStore, } from '@store';
import { Flex, Typography } from 'antd';
import { observer } from 'mobx-react-lite';

const { Text } = Typography;

export const BoardDetails = observer(() => {
    const { title, createdAt } = boardStore.currentBoardInfo ?? {};

    return (
        <Flex justify="space-between">
            <Flex gap="large" align="center">
                {title && <BoardHeader title={title} />}
                <MembersListManager />
            </Flex>
            <Flex gap="small" align="center">
                <Text>
                    <strong>Created:</strong> {createdAt}
                </Text>
            </Flex>
        </Flex>
    );
})