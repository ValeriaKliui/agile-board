import { Button } from "@components/Button";
import { EmailInput } from "@components/Forms/Fields/Email";
import { PasswordInput } from "@components/Forms/Fields/Password";
import { auth } from "@config/firebase";
import { PATHS } from "@constants/index";
import { useAuthHandler } from "@hooks/useAuthHandler";
import { loginUser } from "@utils/auth/loginUser";
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
      colon={false}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      labelWrap
    >
      <EmailInput />
      <PasswordInput />
      <Flex vertical gap="middle">
        {authError && <Alert message={authError} type="error" />}
        <Flex justify="space-evenly" align="baseline">
          <Item>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Log in
            </Button>
          </Item>
          <Link href={PATHS.FORGOT_PASSWORD}>Forgot password?</Link>
        </Flex>
      </Flex>
    </Form>
  );
};
