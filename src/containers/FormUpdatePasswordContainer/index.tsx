import { FormUpdatePassword } from '@components/Forms/FormUpdatePassword';
import { authStore } from '@store/auth/authStore';
import { UpdatePasswordProps } from '@store/auth/interfaces';
import { Button, Flex, Form } from 'antd';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

export const FormUpdatePasswordContainer = observer(() => {
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
        <FormUpdatePassword form={form} onSubmit={onSubmit} error={isError} />
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
