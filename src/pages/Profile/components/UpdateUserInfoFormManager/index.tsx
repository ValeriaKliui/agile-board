import { UpdateUserInfoForm } from '@pages/profile/components';
import { USER_PROPERTIES_TO_UPDATE } from '@pages/profile/constants';
import { type User, userStore } from '@store';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';

export const UpdateUserInfoFormManager = observer(() => {
  const [form] = Form.useForm();

  const loadingUser = userStore.loadingUser;
  const user = userStore.user;

  const onSubmit = useCallback(async (userData: Partial<User>) => {
    await userStore.updateUser(userData);
  }, []);

  useEffect(() => {
    if (!loadingUser && user) {
      form.setFieldsValue(user);
    }
  }, [loadingUser, form, user]);

  return (
    <UpdateUserInfoForm
      form={form}
      onSubmit={onSubmit}
      isLoading={loadingUser}
      fields={USER_PROPERTIES_TO_UPDATE}
    />
  );
});
