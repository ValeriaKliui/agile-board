import { ConfirmPassword } from '@shared/components';
import { setRequiredRule, validatePassword } from '@shared/utils';
import { Form, Input } from 'antd';
import { KeyboardEvent } from 'react';

const { Item } = Form;

export const PasswordField = ({
  name = 'password',
  label = 'Password',
  validated = true,
  withConfirmation = false,
}) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ' ') {
      event.preventDefault();
    }
  };

  const validator = validated ? validatePassword : undefined;

  return (
    <>
      <Item
        name={name}
        label={label}
        rules={[{ validator, ...setRequiredRule(name), required: true }]}
        hasFeedback
        labelAlign="left"
      >
        <Input.Password onKeyDown={handleKeyDown} autoComplete={name} placeholder="Your password" />
      </Item>
      {withConfirmation && <ConfirmPassword dependencies={[name]} />}
    </>
  );
};
