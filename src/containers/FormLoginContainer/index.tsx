import { FormLogin } from '@components/Forms/AuthForms/FormLogin';
import { PATHS } from '@constants/common';
import { authStore } from '@store/auth/authStore';
import { LoginParams } from '@store/auth/interfaces';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router';

export const FormLoginContainer = observer(() => {
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
    <FormLogin
      form={form}
      onFormSubmit={onFormSubmit}
      onFormChange={onFormChange}
      error={error}
      isLoading={isLoading}
    />
  );
});
