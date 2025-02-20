import { Button, EmailField, Modal } from '@shared/components';
import { Alert, Form } from 'antd';

import { ForgotPasswordFormProps } from './types';

const { Item } = Form;

export const ForgotPasswordForm = <TFormValues, TForm>({
  onFormSubmit,
  onFormChange,
  error,
  isLoading,
  modalProps,
  form,
}: ForgotPasswordFormProps<TFormValues, TForm>) => {
  return (
    <Form
      form={form}
      name="forgot_password"
      onFinish={onFormSubmit}
      onChange={onFormChange}
      scrollToFirstError
    >
      <EmailField />
      {error && <Alert type="error" message={error} />}
      <Item>
        <Button type="primary" htmlType="submit" loading={isLoading} centered>
          Send new password
        </Button>
      </Item>
      <Modal {...modalProps} />
    </Form>
  );
};
