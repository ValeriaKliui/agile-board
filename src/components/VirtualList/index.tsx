import { VirtualListProps } from '@components/VirtualList/interfaces';
import { List } from 'antd';
import VirtualListLib from 'rc-virtual-list';

export const VirtualList = <T,>({
  data,
  height = 300,
  itemHeight = 30,
  itemKey,
  renderItem,
}: VirtualListProps<T>) => {
  return (
    <List>
      <VirtualListLib data={data} height={height} itemHeight={itemHeight} itemKey={itemKey}>
        {(item) => renderItem(item)}
      </VirtualListLib>
    </List>
  );
};
