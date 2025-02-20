import { PasswordField } from '@shared/components';
import { Alert, Button, Flex, Form } from 'antd';

export const UpdatePasswordForm = ({ form, onSubmit, error }) => {
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
