import { EmailInput } from "@components/Forms/Fields/Email";
import { PasswordInput } from "@components/Forms/Fields/Password";
import { auth } from "@config/firebase";
import { PATHS } from "@constants/index";
import { useAuthHandler } from "@hooks/useAuthHandler";
import { getConfirmPasswordRules } from "@utils/antd/antd";
import { registerUser } from "@utils/auth/auth";
import { Alert, Button, Form, Input } from "antd";

const { Item } = Form;

export const FormRegister = () => {
  const [form] = Form.useForm();

  const { onFormChange, onFormSubmit, authError } = useAuthHandler({
    auth,
    authFunction: registerUser,
    redirectPath: PATHS.LOGIN,
  });

  const confirmPasswordRules = getConfirmPasswordRules();

  return (
    <Form
      form={form}
      name={"register"}
      onFinish={onFormSubmit}
      onChange={onFormChange}
      scrollToFirstError
    >
      <EmailInput />
      <PasswordInput />
      <Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={confirmPasswordRules}
      >
        <Input.Password autoComplete="password" />
      </Item>

      {authError && <Alert type="warning" message={authError} />}
      <Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Item>
    </Form>
  );
};
