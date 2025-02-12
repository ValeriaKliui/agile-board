import { EmailInput } from "@components/Forms/Fields/Email";
import { PasswordInput } from "@components/Forms/Fields/Password";
import { FormAuthValues } from "@components/Forms/types";
import { getConfirmPasswordRules } from "@utils/antd/antd";
import { registerUser } from "@utils/auth/registerUser";
import { Alert, Button, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";

const { Item } = Form;

export const FormRegister = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [authError, setAuthError] = useState<string | null>(null);
  const confirmPasswordRules = getConfirmPasswordRules();

  const onFinish = async (formValues: FormAuthValues) => {
    const { result, error = "" } = await registerUser(formValues);

    if (result === "success") navigate("/login");
    else setAuthError(error);
  };

  const onChange = () => setAuthError(null);

  return (
    <Form
      form={form}
      name={"register"}
      onFinish={onFinish}
      onChange={onChange}
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
