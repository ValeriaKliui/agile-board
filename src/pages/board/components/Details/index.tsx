import { BoardHeader, MembersListManager } from '@pages/board/components';
import { formatDatetime } from '@shared/utils';
import { boardStore, } from '@store';
import { Flex, Typography } from 'antd';
import { observer } from 'mobx-react-lite';

import { FlexStyled } from './styled';

const { Text } = Typography;

export const BoardDetails = observer(() => {
    const { title, createdAt } = boardStore.currentBoardInfo ?? {};
    const createdDate = formatDatetime(createdAt)

    return (
        <FlexStyled justify="space-between" vertical>
            <Flex gap="large" align="center">
                {title && <BoardHeader title={title} />}
                <MembersListManager />
            </Flex>
            <Flex gap="small" align="center">
                <Text>
                    <strong>Created:</strong> {createdDate}
                </Text>
            </Flex>
        </FlexStyled>
    );
})