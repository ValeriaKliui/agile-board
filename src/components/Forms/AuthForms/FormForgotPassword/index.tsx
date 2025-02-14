import { Button } from "@components/Button";
import { FormForgotPasswordProps } from "@components/Forms/AuthForms/FormForgotPassword/interfaces";
import { EmailInput } from "@components/Forms/Fields/Email";
import { Modal } from "@components/Modal";
import { Alert, Form, } from "antd";

const { Item } = Form

export const FormForgotPassword = <T,>({ onFormSubmit, onFormChange, error, isLoading, modalProps }: FormForgotPasswordProps<T>) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="forgot_password"
      onFinish={onFormSubmit}
      onChange={onFormChange}
      scrollToFirstError
    >
      <EmailInput />
      {error && <Alert type="error" message={error} />}
      <Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
          centered
        >
          Send new password
        </Button>
      </Item>
      <Modal {...modalProps} />
    </Form>
  );
};
