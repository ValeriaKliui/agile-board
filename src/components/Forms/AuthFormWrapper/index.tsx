import { AuthFormWrapperProps, FormSubmit } from "@components/Forms/types";
import { Alert, Form } from "antd";
import { getAuth } from "firebase/auth";
import { useState } from "react";

export const AuthFormWrapper = <TFormValue, TFuncReturns extends FormSubmit>({
  name,
  authFunction,
  children,
}: AuthFormWrapperProps<TFormValue, TFuncReturns>) => {
  const [form] = Form.useForm<TFormValue>();
  const auth = getAuth();
  const [authError, setAuthError] = useState("");

  const onFinish = async (formValues: TFormValue) => {
    const { result, error = "" } = await authFunction({ auth, ...formValues });
    if (result === "error") setAuthError(error);
  };

  return (
    <Form form={form} name={name} onFinish={onFinish} scrollToFirstError>
      {children}
      {authError && <Alert message={authError} type="error" />}
    </Form>
  );
};
