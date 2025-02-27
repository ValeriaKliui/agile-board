import { getEmailRules } from '@shared/utils';
import { Form, Input } from 'antd';

const { Item } = Form;

export const EmailField = () => {
  const emailRules = getEmailRules();

  return (
    <Item name="email" label="E-mail" rules={emailRules}>
      <Input autoComplete="email" placeholder="example@gmail.com" />
    </Item>
  );
};
