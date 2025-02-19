import { getPasswordRules } from '@utils';
import { Form, Input } from 'antd';

const { Item } = Form;

export const PasswordField = ({ name = 'password', label = 'Password' }) => {
  const passwordRules = getPasswordRules();

  return (
    <Item name={name} label={label} rules={passwordRules} hasFeedback>
      <Input.Password autoComplete={name} />
    </Item>
  );
};
