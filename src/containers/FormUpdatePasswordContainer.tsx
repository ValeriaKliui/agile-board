import { FormUpdatePassword } from "@components/Forms/FormUpdatePassword";
import authStore from "@store/auth/authStore";
import { Button, Form } from "antd";
import { observer } from "mobx-react-lite";
import { useState } from "react";

export const FormUpdatePasswordContainer = observer(() => {
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();
  const onSubmit = async ({ oldPassword, newPassword }) => {
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
        <Button onClick={toggleEditing}>Change password</Button>
      )}
    </>
  );
});
