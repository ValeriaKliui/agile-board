import { UpdateUserInfoForm } from '@components/Forms/UpdateUserInfo';
import { USER_PROPERTIES } from '@constants/common';
import { User } from '@store/user/types';
import { userStore } from '@store/user/userStore';
import { mergeUniqueArrays } from '@utils/common';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';
import { useCallback, useEffect } from 'react';

export const UpdateUserInfoFormContainer = observer(() => {
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
