import { PATHS } from '@constants';
import { LoginForm } from '@pages/login/components';
import { authStore, type LoginParams } from '@store/auth';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router';

export const LoginFormManager = observer(() => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFormSubmit = async (userValues: LoginParams) => {
    await authStore.login(userValues);
    if (!authStore.errors.login) navigate(PATHS.HOME);
  };

  const onFormChange = () => authStore.resetError();

  const error = authStore.errors.login;
  const isLoading = authStore.inProgress;

  return (
    <LoginForm
      form={form}
      onFormSubmit={onFormSubmit}
      onFormChange={onFormChange}
      error={error}
      isLoading={isLoading}
    />
  );
});
