import { BoardHeader, MembersListManager } from '@pages/board/components';
import { formatDatetime } from '@shared/utils';
import { boardStore } from '@store';
import { Flex, Typography } from 'antd';
import { observer } from 'mobx-react-lite';

import { FlexStyled, MembersContainer } from './styled';

const { Text } = Typography;

export const BoardDetails = observer(() => {
  const { title, createdAt } = boardStore.currentBoardInfo ?? {};
  const createdDate = formatDatetime(createdAt);

  return (
    <FlexStyled justify="space-between" vertical gap="large">
      <MembersContainer gap="large" vertical>
        {title && <BoardHeader title={title} />}
        <MembersListManager />
      </MembersContainer>
      <Flex gap="small" align="center">
        <Text>
          <strong>Created:</strong> {createdDate}
        </Text>
      </Flex>
    </FlexStyled>
  );
});
