import { Select as SelectAntd, SelectProps } from 'antd';

const { Option } = SelectAntd;

export const Select = ({ options = [], ...selectProps }: SelectProps) => {
  return (
    <SelectAntd allowClear {...selectProps}>
      {options.map(({ value, label }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      ))}
    </SelectAntd>
  );
};
