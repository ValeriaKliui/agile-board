import { getConfirmPasswordRules } from '@pages/register/utils';
import { Button, EmailField, PasswordField } from '@shared/components';
import { AuthFormPropsDefault } from '@shared/types';
import { Alert, Flex, Form, FormInstance, Input } from 'antd';

const { Item } = Form;

export const RegisterForm = <TFormValues, TForm extends FormInstance<TFormValues> | undefined>({
  form,
  onSubmit,
  onChange,
  error,
  isLoading,
}: AuthFormPropsDefault<TFormValues, TForm>) => {
  const confirmPasswordRules = getConfirmPasswordRules();

  return (
    <Form
      form={form}
      name="register"
      onFinish={onSubmit}
      onChange={onChange}
      scrollToFirstError
      colon={false}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      labelWrap
    >
      <EmailField />

      <Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Item>

      <PasswordField />

      <Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={confirmPasswordRules}
      >
        <Input.Password autoComplete="password" />
      </Item>

      <Flex vertical gap={'middle'}>
        {error && <Alert type="error" message={error} />}

        <Button type="primary" htmlType="submit" loading={isLoading} centered>
          Register
        </Button>
      </Flex>
    </Form>
  );
};
