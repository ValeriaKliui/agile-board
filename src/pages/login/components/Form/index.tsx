import { PATHS } from '@constants';
import { Button, EmailField, PasswordField } from '@shared/components';
import { AuthFormPropsDefault } from '@shared/types';
import { Alert, Flex, Form, FormInstance } from 'antd';
import Link from 'antd/es/typography/Link';

const { Item } = Form;

export const LoginForm = <TFormValues, TForm extends FormInstance<TFormValues>>({
  onSubmit,
  onChange,
  form,
  error,
  isLoading,
}: AuthFormPropsDefault<TFormValues, TForm>) => {
  return (
    <Form
      form={form}
      name={'login'}
      onFinish={onSubmit}
      onChange={onChange}
      colon={false}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      labelWrap
    >
      <Flex vertical gap='small'>
        <EmailField />
        <PasswordField />
        <Flex vertical gap="middle">
          {error && <Alert type="error" message={error} />}
          <Flex justify="space-evenly" align="baseline">
            <Item>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Log in
              </Button>
            </Item>
            <Link href={PATHS.FORGOT_PASSWORD}>Forgot password?</Link>
          </Flex>
        </Flex>
      </Flex>
    </Form>
  );
};
