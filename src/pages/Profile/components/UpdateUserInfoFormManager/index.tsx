import { USER_PROPERTIES } from '@constants';
import { UpdateUserInfoForm } from '@pages/profile/components';
import { mergeUniqueArrays } from '@pages/profile/utils';
import { type User, userStore } from '@store/user';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';

export const UpdateUserInfoFormManager = observer(() => {
  const [form] = Form.useForm();

  const loadingUser = userStore.loadingUser;
  const user = userStore.user;

  const filledUserProperties = user ? Object.keys(user) : [];
  const isLoading = filledUserProperties.length === 0 || loadingUser;
  const formFields = mergeUniqueArrays(filledUserProperties, USER_PROPERTIES);

  const onFormSubmit = useCallback(async (userData: Partial<User>) => {
    await userStore.updateUser({ userID: userStore.userID, ...userData });
  }, []);

  useEffect(() => {
    if (!loadingUser && user) {
      form.setFieldsValue(user);
    }
  }, [loadingUser, form, user]);

  return (
    <UpdateUserInfoForm
      form={form}
      onFormSubmit={onFormSubmit}
      isLoading={isLoading}
      fields={formFields}
    />
  );
});
