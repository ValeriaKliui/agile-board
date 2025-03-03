import { PasswordField } from '@shared/components';
import { Alert, Button, Flex, Form, FormInstance } from 'antd';

import { UpdatePasswordFormProps } from './types';

export const UpdatePasswordForm = <TForm extends FormInstance<TFormValues> | undefined, TFormValues>({ form, onSubmit, error }: UpdatePasswordFormProps<TForm, TFormValues>) => {
  return (
    <Form form={form} onFinish={onSubmit} labelCol={{ span: 10 }}
      wrapperCol={{ span: 18 }} labelWrap
    >
      <Flex vertical gap='middle'>
        <div>
          <PasswordField name="oldPassword" label="Current password" />
          <PasswordField name="newPassword" label="New password" />
        </div>
        <Flex vertical align="center" gap={'middle'}>
          {error && <Alert type="error" message={error} />}
          <Button htmlType="submit" type="primary" size='large' block>
            Update password
          </Button>
        </Flex>
      </Flex>
    </Form>
  );
};
