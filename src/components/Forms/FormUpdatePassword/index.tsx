import { PasswordInput } from "@components/Forms/Fields/Password";
import { Alert, Button, Flex, Form } from "antd";

export const FormUpdatePassword = ({ form, onSubmit, error }) => {
  return (
    <Form form={form} onFinish={onSubmit}>
      <PasswordInput name="oldPassword" label="Current password" />
      <PasswordInput name="newPassword" label="New password" />
      <Flex vertical align="center" gap={"middle"}>
        {error && <Alert type="error" message={error} />}
        <Button htmlType="submit" type="primary">
          Update password
        </Button>
      </Flex>
    </Form>
  );
};
