import { UpdatePasswordForm } from '@pages/profile/components';
import { authStore, type UpdatePasswordProps } from '@store';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';

export const PasswordEditorFormManager = observer(() => {
  const [form] = Form.useForm();

  const onSubmit = async ({ oldPassword, newPassword }: UpdatePasswordProps) => {
    await authStore.updatePassword({ oldPassword, newPassword });
    form.resetFields()
  };

  const isError = authStore.errors.updatePassword;

  return (
    <UpdatePasswordForm form={form} onSubmit={onSubmit} error={isError} />
  );
});
