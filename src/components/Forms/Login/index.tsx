import { EmailInput } from "@components/Forms/Fields/Email";
import { PasswordInput } from "@components/Forms/Fields/Password";
import { FormAuthValues } from "@components/Forms/types";
import { loginUser } from "@utils/auth/loginUser";
import { Alert, Button, Flex, Form } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";

const { Item } = Form;

export const LoginForm = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const [authError, setAuthError] = useState<string | null>(null);

  const onFinish = async (formValues: FormAuthValues) => {
    const { result, error = "" } = await loginUser(formValues);

    if (result === "success") navigate("/");
    else setAuthError(error);
  };

  return (
    <Form form={form} name={"login"} onFinish={onFinish} scrollToFirstError>
      <EmailInput />
      <PasswordInput />
      <Flex justify="space-evenly">
        <Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Item>
        {authError && <Alert message={authError} type="error" />}
        <Item>
          <Button type="default">ForgotPassword</Button>
        </Item>
      </Flex>
    </Form>
  );
};
