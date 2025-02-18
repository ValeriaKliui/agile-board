import { FormForgotPassword } from '@components/Forms/AuthForms/FormForgotPassword';
import { PATHS } from '@constants/common';
import { useModal } from '@hooks/useModal';
import { authStore } from '@store/auth/authStore';
import { ForgotPasswordParams } from '@store/auth/interfaces';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router';

export const FormForgotPasswordContainer = observer(() => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { isModalOpen, showModal, closeModal } = useModal();

  const handleModalClose = () => {
    closeModal();
    navigate(PATHS.LOGIN);
  };

  const onFormSubmit = async ({ email }: ForgotPasswordParams) => {
    await authStore.forgotPassword({ email });
    if (!authStore.errors.forgot) showModal();
  };

  const onFormChange = () => authStore.resetError();

  const error = authStore.errors.forgot;
  const isLoading = authStore.inProgress;

  return (
    <FormForgotPassword
      form={form}
      onFormSubmit={onFormSubmit}
      onFormChange={onFormChange}
      error={error}
      isLoading={isLoading}
      modalProps={{
        visible: isModalOpen,
        title: 'Link Sent!',
        onOk: handleModalClose,
        onCancel: handleModalClose,
        children: (
          <>
            <p>Reset link has been sent to your email.</p>
            <p>Now you have to login with your new password.</p>
          </>
        ),
      }}
    />
  );
});
