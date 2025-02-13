import { Button } from "@components/Button";
import { EmailInput } from "@components/Forms/Fields/Email";
import { FormAuthValues } from "@components/Forms/types";
import { Modal } from "@components/Modal";
import { auth } from "@config/firebase";
import { PATHS } from "@constants/index";
import { useAuthHandler } from "@hooks/useAuthHandler";
import useModal from "@hooks/useModal";
import { resetPassword } from "@utils/auth/auth";
import { Alert, Form } from "antd";
import { useNavigate } from "react-router";

const { Item } = Form;

export const FormForgotPassword = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { isModalOpen, showModal, closeModal } = useModal();

  const { authError, onFormSubmit, isLoading } = useAuthHandler({
    auth,
    authFunction: resetPassword,
  });

  const onResetPassword = (formValues: FormAuthValues) => {
    onFormSubmit(formValues);
    if (!authError) showModal();
  };

  const handleModalClose = () => {
    closeModal();
    navigate(PATHS.LOGIN);
  };

  return (
    <Form
      form={form}
      name={"forgot_password"}
      onFinish={onResetPassword}
      scrollToFirstError
    >
      <EmailInput />
      {authError && <Alert message={authError} type="error" />}
      <Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Send new password
        </Button>
      </Item>
      <Modal
        visible={isModalOpen}
        title="Link Sent!"
        onOk={handleModalClose}
        onCancel={handleModalClose}
      >
        <p>Reset link has been sent to your email.</p>
        <p>Now you have to Login with new password.</p>
      </Modal>
    </Form>
  );
};
