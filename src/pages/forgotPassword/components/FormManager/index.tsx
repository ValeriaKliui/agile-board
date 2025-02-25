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
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleModalClose = () => {
    closeModal();
    navigate(PATHS.LOGIN);
  };

  const onSubmit = async ({ email }: ForgotPasswordParams) => {
    await authStore.forgotPassword({ email });
    await authStore.logout();
    if (!authStore.errors.forgot) openModal();
  };

  const onChange = () => authStore.resetError();

  const error = authStore.errors.forgot;
  const isLoading = authStore.inProgress;

  return (
    <ForgotPasswordForm
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
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
