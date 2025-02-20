import { SelectProps } from 'antd';
import { ReactNode } from 'react';

export interface SearchedSelectProps<T> extends SelectProps {
  fetchSearchFunc: (searchTerm: string) => Promise<T>;
  options: { label: string; value: string }[];
  notFoundContent: ReactNode | null;
  name: string;
  label: string;
}
