import { Button } from "@components/Button";
import { EmailInput } from "@components/Forms/Fields/Email";
import { PasswordInput } from "@components/Forms/Fields/Password";
import { auth } from "@config/firebase";
import { PATHS } from "@constants/index";
import authStore from "@store/auth/authStore";
import { getConfirmPasswordRules } from "@utils/antd/antd";
import { Alert, Form, Input } from "antd";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";

import { FormAuthValues } from "../types";

const { Item } = Form;

export const FormRegister = observer(() => {
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const confirmPasswordRules = getConfirmPasswordRules();

  const onFormSubmit = async (userValues: FormAuthValues) => {
    await authStore.register({ auth, ...userValues });
    if (!authStore.errors.register) navigate(PATHS.LOGIN);
  };

  const onChange = () => authStore.resetError();

  return (
    <Form
      form={form}
      name={"register"}
      onFinish={onFormSubmit}
      onChange={onChange}
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

      {authStore.errors.register && (
        <Alert type="error" message={authStore.errors.register} />
      )}
      <Button
        type="primary"
        htmlType="submit"
        loading={authStore.inProgress}
        centered
      >
        Register
      </Button>
    </Form>
  );
});
