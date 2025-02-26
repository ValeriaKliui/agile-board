import { getPasswordRules } from '@shared/utils';
import { Form, Input } from 'antd';
import { KeyboardEvent } from 'react';

const { Item } = Form;

export const PasswordField = ({ name = 'password', label = 'Password' }) => {
  const rules = getPasswordRules();

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ' ') {
      event.preventDefault();
    }
  };

  return (
    <Item name={name} label={label} rules={rules} hasFeedback>
      <Input.Password
        onKeyDown={handleKeyDown}
        autoComplete={name}
        placeholder="Введите ваш пароль"
      />
    </Item>
  );
};
