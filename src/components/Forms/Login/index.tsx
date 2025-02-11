import { AuthFormWrapper } from "@components/Forms/AuthFormWrapper";
import { EmailInput } from "@components/Forms/Fields/Email";
import { PasswordInput } from "@components/Forms/Fields/Password";
import { loginUser } from "@utils/auth/loginUser";
import { Button, Flex, Form } from "antd";

const { Item } = Form;

export const LoginForm = () => {
  return (
    <AuthFormWrapper name="login" authFunction={loginUser}>
      <EmailInput />
      <PasswordInput />
      <Flex justify="space-evenly">
        <Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Item>
        <Item>
          <Button type="default">ForgotPassword</Button>
        </Item>
      </Flex>
    </AuthFormWrapper>
  );
};
