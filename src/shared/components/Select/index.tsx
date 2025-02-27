import { Select as SelectAntd, SelectProps } from 'antd';

export const Select = ({ options = [], ...selectProps }: SelectProps) => {
  return <SelectAntd allowClear options={options} {...selectProps} />;
};
