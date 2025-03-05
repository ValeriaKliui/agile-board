import { Column } from '@pages/board/components';
import { Column as ColumnType } from '@store';
import { Flex } from 'antd';
import { memo } from 'react';

import { ColStyled } from '../styled';
import { ColumnDivider } from './styled';

export const ColumnItem = memo(
  ({ columnID, title, order }: Pick<ColumnType, 'columnID' | 'title' | 'order'>) => (
    <Flex gap="small">
      <ColStyled>
        {columnID}
        <Column columnID={columnID} title={title} order={order} />
      </ColStyled>
      <ColumnDivider type="vertical" variant="dashed" />
    </Flex>
  ),
);
