import { SelectProps } from 'antd';

export interface DebounceSelectProps<T> extends Omit<SelectProps<T | T[]>, 'options' | 'children'> {
  fetchFunc: (search: string) => Promise<T[]>;
  debounceTimeout?: number;
}

export interface SelectOption {
  key?: string;
  label: React.ReactNode;
  value: string | number;
}
