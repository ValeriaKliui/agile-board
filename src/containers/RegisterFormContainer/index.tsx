import { RegisterForm } from '@components/Forms/Auth/Register';
import { PATHS } from '@constants/common';
import { authStore } from '@store/auth/authStore';
import { RegisterParams } from '@store/auth/types';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router';

export const RegisterFormContainer = observer(() => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFormSubmit = async ({ email, password, username }: RegisterParams) => {
    await authStore.register({ email, password, username });
    await authStore.logout();
    if (!authStore.errors.register) navigate(PATHS.LOGIN);
  };

  const onFormChange = () => authStore.resetError();

  const error = authStore.errors.register;
  const isLoading = authStore.inProgress;

  return (
    <RegisterForm
      form={form}
      onFormSubmit={onFormSubmit}
      onFormChange={onFormChange}
      error={error}
      isLoading={isLoading}
    />
  );
});
