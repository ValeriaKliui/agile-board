import { PATHS } from '@constants';
import { ForgotPasswordForm } from '@pages/forgotPassword/components';
import { useModal } from '@shared/hooks';
import { authStore, type ForgotPasswordParams } from '@store/auth';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router';

export const ForgotPasswordFormManager = observer(() => {
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
    <ForgotPasswordForm
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
