import { getConfirmPasswordRules } from '@shared/utils';
import { Form, FormItemProps, Input } from 'antd';

const { Item } = Form;

export const ConfirmPassword = ({
  dependencies = ['password'],
}: Pick<FormItemProps, 'dependencies'>) => {
  const confirmPasswordRules = getConfirmPasswordRules(dependencies[0]);

  return (
    <Item
      name="confirm"
      label="Confirm Password"
      dependencies={dependencies}
      hasFeedback
      labelAlign="left"
      rules={confirmPasswordRules}
    >
      <Input.Password autoComplete="password" placeholder="Confirm Password" />
    </Item>
  );
};
