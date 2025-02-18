import { Button } from '@components/Button';
import { AuthFormPropsDefault } from '@components/Forms/AuthForms/interfaces';
import { EmailInput } from '@components/Forms/Fields/Email';
import { PasswordInput } from '@components/Forms/Fields/Password';
import { getConfirmPasswordRules } from 'services/antd/antd';
import { Alert, Form, Input } from 'antd';

const { Item } = Form;

export const FormRegister = <TFormValues, TForm>({
  form,
  onFormSubmit,
  onFormChange,
  error,
  isLoading,
}: AuthFormPropsDefault<TFormValues, TForm>) => {
  const confirmPasswordRules = getConfirmPasswordRules();

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFormSubmit}
      onChange={onFormChange}
      scrollToFirstError
      colon={false}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      labelWrap
    >
      <EmailInput />

      <Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Item>

      <PasswordInput />

      <Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={confirmPasswordRules}
      >
        <Input.Password autoComplete="password" />
      </Item>

      {error && <Alert type="error" message={error} />}

      <Button type="primary" htmlType="submit" loading={isLoading} centered>
        Register
      </Button>
    </Form>
  );
};
