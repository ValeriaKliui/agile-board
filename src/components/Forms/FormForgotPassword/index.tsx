import { Button } from "@components/Button";
import { EmailInput } from "@components/Forms/Fields/Email";
import { Modal } from "@components/Modal";
import { auth } from "@config/firebase";
import { PATHS } from "@constants/index";
import useModal from "@hooks/useModal";
import authStore from "@store/auth/authStore";
import { ForgotPasswordParams } from "@store/auth/interfaces";
import { Alert, Form } from "antd";
import { useNavigate } from "react-router";

const { Item } = Form;

export const FormForgotPassword = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { isModalOpen, showModal, closeModal } = useModal();

  const handleModalClose = () => {
    closeModal();
    navigate(PATHS.LOGIN);
  };

  const onFormSubmit = async ({ email }: ForgotPasswordParams) => {
    await authStore.forgotPassword({ auth, email });
    if (!authStore.errors.forgot) showModal();
  };

  const onChange = () => authStore.resetError();

  return (
    <Form
      form={form}
      name={"forgot_password"}
      onFinish={onFormSubmit}
      onChange={onChange}
      scrollToFirstError
    >
      <EmailInput />
      {authStore.errors.login && (
        <Alert type="error" message={authStore.errors.forgot} />
      )}
      <Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={authStore.inProgress}
          centered
        >
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
