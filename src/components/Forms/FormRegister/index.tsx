import { Button } from "@components/Button";
import { EmailInput } from "@components/Forms/Fields/Email";
import { PasswordInput } from "@components/Forms/Fields/Password";
import { auth } from "@config/firebase";
import { PATHS } from "@constants/index";
import { useAuthHandler } from "@hooks/useAuthHandler";
import { getConfirmPasswordRules } from "@utils/antd/antd";
import { registerUser } from "@utils/auth/registerUser";
import { Alert, Form, Input } from "antd";

const { Item } = Form;

export const FormRegister = () => {
  const [form] = Form.useForm();

  const { onFormChange, onFormSubmit, authError, isLoading } = useAuthHandler({
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
      colon={false}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      labelWrap
    >
      <EmailInput />

      <Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Item>
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
      <Button type="primary" htmlType="submit" loading={isLoading} centered>
        Register
      </Button>
    </Form>
  );
};
