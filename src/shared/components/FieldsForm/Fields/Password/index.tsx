import { getPasswordRules } from '@shared/utils';
import { Form, Input } from 'antd';
import {useState} from 'react'

const { Item } = Form;

export const PasswordField = ({ name = 'password', label = 'Password' }) => {
  const passwordRules = getPasswordRules();

  return (
    <Item name={name} label={label} rules={passwordRules} hasFeedback >
      <Input.Password autoComplete={name}  />
    </Item>
  );
};
