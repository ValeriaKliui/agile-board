import { AuthFormWrapper } from "@components/Forms/AuthFormWrapper";
import { EmailInput } from "@components/Forms/Fields/Email";
import { PasswordInput } from "@components/Forms/Fields/Password";
import { FormAuthValues } from "@components/Forms/types";
import { getConfirmPasswordRules } from "@utils/antd/antd";
import { registerUser } from "@utils/auth/registerUser";
import { AuthUserReturns } from "@utils/auth/types";
import { Button, Form, Input } from "antd";

const { Item } = Form;

export const FormRegister = () => {
  const confirmPasswordRules = getConfirmPasswordRules();

  return (
    <AuthFormWrapper<FormAuthValues, AuthUserReturns>
      name={"register"}
      authFunction={registerUser}
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

      <Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Item>
    </AuthFormWrapper>
  );
};
