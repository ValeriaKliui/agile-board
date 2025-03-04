import { UpdatePasswordForm } from '@pages/profile/components';
import { authStore, type UpdatePasswordProps } from '@store';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';

import { PasswordEditorFormManagerProps } from './types';

export const PasswordEditorFormManager = observer(
  ({ onFinish }: PasswordEditorFormManagerProps) => {
    const [form] = Form.useForm();

    const onSubmit = async ({ oldPassword, newPassword }: UpdatePasswordProps) => {
      await authStore.updatePassword({ oldPassword, newPassword });
      form.resetFields();
      onFinish?.();
    };

    const isError = authStore.errors.updatePassword;
    const isUpdating = authStore.inProgress;

    return (
      <UpdatePasswordForm form={form} onSubmit={onSubmit} error={isError} isUpdating={isUpdating} />
    );
  },
);
