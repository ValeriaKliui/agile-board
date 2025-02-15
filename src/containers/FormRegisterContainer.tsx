import { FormRegister } from "@components/Forms/AuthForms/FormRegister";
import { FormAuthValues } from "@components/Forms/types";
import { PATHS } from "@constants/index";
import authStore from "@store/auth/authStore";
import { Form } from "antd";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";

export const FormRegisterContainer = observer(() => {
  const form = Form.useForm();
  const navigate = useNavigate();

  const onFormSubmit = async (userValues: FormAuthValues) => {
    await authStore.register(userValues);
    if (!authStore.errors.register) navigate(PATHS.LOGIN);
  };

  const onFormChange = () => authStore.resetError();

  const error = authStore.errors.register;
  const isLoading = authStore.inProgress;

  return (
    <FormRegister
      form={form}
      onFormSubmit={onFormSubmit}
      onFormChange={onFormChange}
      error={error}
      isLoading={isLoading}
    />
  );
});
