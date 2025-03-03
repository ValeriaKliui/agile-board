import { setRequiredRule, validatePassword } from '@shared/utils';
import { Form, Input } from 'antd';
import { KeyboardEvent } from 'react';

const { Item } = Form;

export const PasswordField = ({ name = 'password', label = 'Password' }) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ' ') {
      event.preventDefault();
    }
  };

  return (
    <Item
      name={name}
      label={label}
      rules={[{ validator: validatePassword, ...setRequiredRule(name), required: true }]}
      hasFeedback
      labelAlign='left'
    >
      <Input.Password onKeyDown={handleKeyDown} autoComplete={name} placeholder="Your password"
      />
    </Item>
  );
};
