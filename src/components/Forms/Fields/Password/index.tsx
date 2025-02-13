import { getPasswordRules } from "@utils/antd/antd";
import { Form, Input } from "antd";

const { Item } = Form;

export const PasswordInput = () => {
  const passwordRules = getPasswordRules();

  return (
    <Item name="password" label="Password" rules={passwordRules} hasFeedback>
      <Input.Password autoComplete="password" />
    </Item>
  );
};
