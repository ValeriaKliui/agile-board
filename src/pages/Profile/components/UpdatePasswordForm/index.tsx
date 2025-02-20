import { UpdatePasswordFormProps } from '@pages/profile/components/UpdatePasswordForm/types';
import { PasswordField } from '@shared/components';
import { Alert, Button, Flex, Form, FormInstance } from 'antd';

export const UpdatePasswordForm = <TForm extends FormInstance<TFormValues> | undefined, TFormValues>({ form, onSubmit, error }: UpdatePasswordFormProps<TForm, TFormValues>) => {
  return (
    <Form form={form} onFinish={onSubmit}>
      <PasswordField name="oldPassword" label="Current password" />
      <PasswordField name="newPassword" label="New password" />
      <Flex vertical align="center" gap={'middle'}>
        {error && <Alert type="error" message={error} />}
        <Button htmlType="submit" type="primary">
          Update password
        </Button>
      </Flex>
    </Form>
  );
};
