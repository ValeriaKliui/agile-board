import { UpdatePasswordForm } from '@pages/profile/components';
import { authStore, type UpdatePasswordProps } from '@store/auth';
import { Button, Flex, Form } from 'antd';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

export const UpdatePasswordFormManager = observer(() => {
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

  const onSubmit = async ({ oldPassword, newPassword }: UpdatePasswordProps) => {
    await authStore.updatePassword({ oldPassword, newPassword });
    if (!authStore.errors.updatePassword) setIsEditing(false);
  };

  const isError = authStore.errors.updatePassword;
  const toggleEditing = () => setIsEditing((prev) => !prev);

  return (
    <>
      {isEditing ? (
        <UpdatePasswordForm form={form} onSubmit={onSubmit} error={isError} />
      ) : (
        <Flex>
          <Button onClick={toggleEditing} type="dashed">
            Change password
          </Button>
        </Flex>
      )}
    </>
  );
});
