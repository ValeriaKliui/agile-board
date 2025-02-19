import { getPasswordRules } from '@utils/formRules';
import { Form, Input } from 'antd';

const { Item } = Form;

export const PasswordInput = ({ name = 'password', label = 'Password' }) => {
  const passwordRules = getPasswordRules();

  return (
    <Item name={name} label={label} rules={passwordRules} hasFeedback>
      <Input.Password autoComplete={name} />
    </Item>
  );
};
