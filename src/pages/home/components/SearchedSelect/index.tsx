import { Flex, Form, Select, Spin, Typography } from 'antd';
import { useState } from 'react';

import { SearchedSelectProps } from './types';

const { Item } = Form;
const { Text } = Typography

export const SearchedSelect = <T,>({
  fetchOptions,
  options,
  isFetching,
  name,
  label,
  ...selectProps
}: SearchedSelectProps<T>) => {
  const [selectedItems, selectItems] = useState<T[]>([]);

  const fetchSearchedItems = async (searchTerm: string) => {
    await fetchOptions(searchTerm);
  };

  const getAddons = () => {
    if (isFetching) return <Spin size="small" />;
    else if (!options) return 'Input...';
    else if (options?.length === 0 && !isFetching) return <>Nothing was found</>;
  };

  return (
    <Flex vertical gap='middle'>
      <Text strong>{label}</Text>
      <Item name={name} >
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
    </Flex>
  );
};
