import { ListProps } from 'rc-virtual-list';
import { ReactNode } from 'react';

export type ListPropsWithoutChildren<T> = Omit<ListProps<T>, 'children'>;

export interface VirtualListProps<T> extends ListPropsWithoutChildren<T> {
  renderItem: (item: T) => ReactNode;
}
