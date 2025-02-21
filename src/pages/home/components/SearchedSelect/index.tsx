import { Form, Select, Spin } from 'antd';
import { useState } from 'react';

import { SearchedSelectProps } from './types';

const { Item } = Form;

export const SearchedSelect = <T,>({
  fetchSearchFunc,
  options,
  isFetching,
  name,
  label,
  ...selectProps
}: SearchedSelectProps<T>) => {
  const [selectedItems, selectItems] = useState<T[]>([]);

  const fetchSearchedItems = async (searchTerm: string) => {
    await fetchSearchFunc(searchTerm);
  };

  const getAddons = () => {
    if (isFetching) return <Spin size="small" />;
    else if (!options) return 'Input...';
    else if (options?.length === 0 && !isFetching) return <>Nothing was found</>;
  };

  return (
    <>
      <Item name={name} label={label}>
        <Select
          onChange={selectItems}
          value={selectedItems}
          mode="multiple"
          labelInValue
          filterOption={false}
          onSearch={fetchSearchedItems}
          notFoundContent={getAddons()}
          options={options}
          {...selectProps}
        />
      </Item>
    </>
  );
};
