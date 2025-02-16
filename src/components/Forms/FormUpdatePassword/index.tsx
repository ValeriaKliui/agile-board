import { PasswordInput } from "@components/Forms/Fields/Password";
import { Alert, Button, Form } from "antd";

export const FormUpdatePassword = ({ form, onSubmit, error }) => {
  return (
    <Form form={form} onFinish={onSubmit}>
      <PasswordInput name="oldPassword" label="Current password" />
      <PasswordInput name="newPassword" label="New password" />
      {error && <Alert type="error" message={error} />}
      <Button htmlType="submit">Update password</Button>
    </Form>
  );
};
