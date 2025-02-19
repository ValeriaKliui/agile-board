import { Select, Spin } from 'antd';
import { DebounceSelectProps, SelectOption } from '@components/DebounceSelect/interfaces';
import { useDebouncedFetch } from '@hooks/useDebouncedFetch';

export const DebounceSelect = <T extends SelectOption>({
  fetchFunc,
  debounceTimeout = 800,
  ...props
}: DebounceSelectProps<T>) => {
  const {
    fetching,
    result = [],
    debounceFetcher,
  } = useDebouncedFetch<SelectOption[]>(fetchFunc, debounceTimeout);

  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      options={result}
      {...props}
    />
  );
};
