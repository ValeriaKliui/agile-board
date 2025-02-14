import { Button } from "@components/Button";
import { AuthFormPropsDefault } from "@components/Forms/AuthForms/interfaces";
import { EmailInput } from "@components/Forms/Fields/Email";
import { PasswordInput } from "@components/Forms/Fields/Password";
import { PATHS } from "@constants/index";
import { Alert, Flex, Form } from "antd";
import Link from "antd/es/typography/Link";

const { Item } = Form;

export const FormLogin = <T,>({ onFormSubmit, onFormChange, error, isLoading }: AuthFormPropsDefault<T>) => {
  const [form] = Form.useForm();

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
        {error && (
          <Alert type="error" message={error} />
        )}
        <Flex justify="space-evenly" align="baseline">
          <Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
            >
              Log in
            </Button>
          </Item>
          <Link href={PATHS.FORGOT_PASSWORD}>Forgot password?</Link>
        </Flex>
      </Flex>
    </Form>
  );
}