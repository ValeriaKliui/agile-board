import { SearchedSelectProps } from '@containers/SearchedSelect/interfaces';
import { Form, Select } from 'antd';
import { useState } from 'react';

const { Item } = Form;

export const SearchedSelect = <T,>({
  fetchSearchFunc,
  options,
  notFoundContent,
  name,
  label,
  ...selectProps
}: SearchedSelectProps<T>) => {
  const [selectedItems, selectItems] = useState<T[]>([]);

  const fetchSearchedItems = async (searchTerm: string) => {
    await fetchSearchFunc(searchTerm);
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
          notFoundContent={notFoundContent}
          options={options}
          {...selectProps}
        />
      </Item>
    </>
  );
};
