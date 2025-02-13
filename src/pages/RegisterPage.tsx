import { FormRegister } from "@components/Forms/FormRegister";
import { useRedirectAuthorizedUsers } from "@hooks/useRedirectAuthorizedUsers";

export const RegisterPage = () => {
  useRedirectAuthorizedUsers();

  return <FormRegister />;
};
