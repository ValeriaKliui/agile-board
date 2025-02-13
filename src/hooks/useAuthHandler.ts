import { FormAuthValues } from "@components/Forms/types";
import { Auth } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";

export const useAuthHandler = ({
  authFunction,
  redirectPath = "",
  auth,
}: {
  authFunction: (
    values: FormAuthValues & { auth: Auth },
  ) => Promise<{ result: string; error?: string }>;
  redirectPath?: string;
  auth: Auth;
}) => {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState<string | null>(null);

  const onFormSubmit = async (formValues: FormAuthValues) => {
    const { result, error = "" } = await authFunction({ auth, ...formValues });
    if (result === "success") navigate(redirectPath);
    else setAuthError(error);
  };

  const onFormChange = () => setAuthError(null);

  return { onFormSubmit, onFormChange, authError };
};
