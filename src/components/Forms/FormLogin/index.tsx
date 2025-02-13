import { Button } from "@components/Button";
import { EmailInput } from "@components/Forms/Fields/Email";
import { PasswordInput } from "@components/Forms/Fields/Password";
import { auth } from "@config/firebase";
import { PATHS } from "@constants/index";
import { useAuthHandler } from "@hooks/useAuthHandler";
import { loginUser } from "@utils/auth/auth";
import { Alert, Flex, Form } from "antd";
import Link from "antd/es/typography/Link";

const { Item } = Form;

export const LoginForm = () => {
  const [form] = Form.useForm();

  const { onFormChange, onFormSubmit, authError, isLoading } = useAuthHandler({
    auth,
    authFunction: loginUser,
    redirectPath: "/",
  });

  return (
    <Form
      form={form}
      name={"login"}
      onFinish={onFormSubmit}
      onChange={onFormChange}
      scrollToFirstError
    >
      <EmailInput />
      <PasswordInput />
      <Flex justify="space-evenly">
        <Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Log in
          </Button>
        </Item>
        {authError && <Alert message={authError} type="error" />}
        <Link href={PATHS.FORGOT_PASSWORD}>Forgot password?</Link>
      </Flex>
    </Form>
  );
};
