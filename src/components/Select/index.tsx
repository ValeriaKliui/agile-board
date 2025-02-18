import { Select as SelectAntd, SelectProps } from 'antd';

const { Option } = SelectAntd;

export const Select = ({ options = [] }: SelectProps) => {
  return (
    <SelectAntd allowClear>
      {options.map(({ value, label }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      ))}
    </SelectAntd>
  );
};
