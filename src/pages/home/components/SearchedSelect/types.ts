import { SelectProps } from 'antd';

export interface SearchedSelectProps<T> extends SelectProps {
  fetchOptions: (searchTerm: string) => Promise<T>;
  options?: { label: string; value: string }[];
  name: string;
  label: string;
  isFetching: boolean;
}
