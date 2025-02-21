import { Button, EmailField, Modal } from '@shared/components';
import { Alert, Flex, Form, FormInstance } from 'antd';

import { ForgotPasswordFormProps } from './types';

const { Item } = Form;

export const ForgotPasswordForm = <
  TFormValues,
  TForm extends FormInstance<TFormValues> | undefined,
>({
  onSubmit,
  onChange,
  error,
  isLoading,
  modalProps,
  form,
}: ForgotPasswordFormProps<TFormValues, TForm>) => {
  return (
    <Form
      form={form}
      name="forgot_password"
      onFinish={onSubmit}
      onChange={onChange}
      scrollToFirstError
    >
      <EmailField />
      <Flex vertical gap="middle">
        {error && <Alert type="error" message={error} />}
        <Item>
          <Button type="primary" htmlType="submit" loading={isLoading} centered>
            Send new password
          </Button>
        </Item>
      </Flex>
      <Modal {...modalProps} />
    </Form>
  );
};
