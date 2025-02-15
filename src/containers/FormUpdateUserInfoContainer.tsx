import { FormUpdateUserInfo } from "@components/Forms/FormUpdateUserInfo";
import { USER_PROPERTIES } from "@constants/index";
import { User } from "@store/user/interfaces";
import userStore from "@store/user/userStore";
import { getUserProperties } from "@utils/index";
import { Form } from "antd";
import { observer } from "mobx-react-lite";
import { useCallback, useEffect } from "react";

export const FormUpdateUserInfoContainer = observer(() => {
  const [form] = Form.useForm();

  const loadingUser = userStore.loadingUser;
  const user = userStore.user;

  const fulfilledUserProperties = user ? Object.keys(user) : [];
  const isLoading = fulfilledUserProperties.length === 0;
  const formFields = getUserProperties(
    fulfilledUserProperties,
    USER_PROPERTIES,
  );

  const onFormSubmit = useCallback(async (userData: Partial<User>) => {
    await userStore.updateUser({ userID: userStore.userID, ...userData });
  }, []);

  useEffect(() => {
    if (!loadingUser && user) {
      form.setFieldsValue(user);
    }
  }, [loadingUser, form, user]);

  return (
    <FormUpdateUserInfo
      form={form}
      onFormSubmit={onFormSubmit}
      isLoading={isLoading}
      fields={formFields}
    />
  );
});
