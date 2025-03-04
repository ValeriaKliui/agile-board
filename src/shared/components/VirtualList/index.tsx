import { List } from 'antd';
import VirtualListLib from 'rc-virtual-list';

import { VirtualListProps } from './types';

export const VirtualList = <T,>({
  data,
  itemHeight = 30,
  itemKey,
  renderItem,
}: VirtualListProps<T>) => {
  return (
    <List>
      <VirtualListLib data={data} itemHeight={itemHeight} itemKey={itemKey}>
        {(item) => renderItem(item)}
      </VirtualListLib>
    </List>
  );
};
