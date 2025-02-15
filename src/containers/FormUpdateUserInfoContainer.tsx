import { FormUpdateUserInfo } from "@components/Forms/FormUpdateUserInfo";
import { USER_PROPERTIES } from "@constants/index";
import userStore from "@store/user/userStore";
import { getUserProperties } from "@utils/index";
import { Form } from "antd";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export const FormUpdateUserInfoContainer = observer(() => {
  const [form] = Form.useForm();
  const isUserLoading = userStore.loadingUser;
  const userData = userStore.user;
  const fulfilledUserProperties = userData ? Object.keys(userData) : [];
  const isLoading = fulfilledUserProperties.length === 0;
  const formFields = getUserProperties(
    fulfilledUserProperties,
    USER_PROPERTIES,
  );

  const onFormSubmit = async (userData) => {
    await userStore.updateUser({ userID: userStore.userID, userData });
  };

  useEffect(() => {
    if (!isUserLoading && userData) {
      form.setFieldsValue(userData);
    }
  }, [isUserLoading, form, userData]);

  return (
    <FormUpdateUserInfo
      form={form}
      onFormSubmit={onFormSubmit}
      isLoading={isLoading}
      fields={formFields}
    />
  );
});
