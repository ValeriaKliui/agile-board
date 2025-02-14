import { Button } from "@components/Button";
import { EmailInput } from "@components/Forms/Fields/Email";
import { PasswordInput } from "@components/Forms/Fields/Password";
import { auth } from "@config/firebase";
import { PATHS } from "@constants/index";
import authStore from "@store/auth/authStore";
import { Alert, Flex, Form } from "antd";
import Link from "antd/es/typography/Link";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";

import { FormAuthValues } from "../types";

const { Item } = Form;

export const LoginForm = observer(() => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onFormSubmit = async (userValues: FormAuthValues) => {
    await authStore.login({ auth, ...userValues });
    if (!authStore.errors.login) navigate(PATHS.HOME);
  };

  const onChange = () => authStore.resetError();

  return (
    <Form
      form={form}
      name={"login"}
      onFinish={onFormSubmit}
      onChange={onChange}
      colon={false}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      labelWrap
    >
      <EmailInput />
      <PasswordInput />
      <Flex vertical gap="middle">
        {authStore.errors.login && (
          <Alert type="error" message={authStore.errors.login} />
        )}
        <Flex justify="space-evenly" align="baseline">
          <Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={authStore.inProgress}
            >
              Log in
            </Button>
          </Item>
          <Link href={PATHS.FORGOT_PASSWORD}>Forgot password?</Link>
        </Flex>
      </Flex>
    </Form>
  );
});
