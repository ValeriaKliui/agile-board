import { PATHS } from '@constants';
import { RegisterForm } from '@pages/register/components';
import { authStore, type RegisterParams } from '@store/auth';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router';

export const RegisterFormManager = observer(() => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password, username }: RegisterParams) => {
    await authStore.register({ email, password, username });
    await authStore.logout();
    if (!authStore.errors.register) navigate(PATHS.LOGIN);
  };

  const onChange = () => authStore.resetError();

  const error = authStore.errors.register;
  const isLoading = authStore.inProgress;

  return (
    <RegisterForm
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
      error={error}
      isLoading={isLoading}
    />
  );
});
