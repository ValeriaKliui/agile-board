import { InputProps } from 'antd';

export interface InputEditableProps extends InputProps {
  onFinishEdit: (value: string) => void;
  strong?: boolean;
}
