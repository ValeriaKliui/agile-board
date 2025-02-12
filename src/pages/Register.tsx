import { FormRegister } from "@components/Forms/Register";
import { useRedirectAuthorizedUsers } from "@hooks/useRedirectAuthorizedUsers";

export const Register = () => {
  useRedirectAuthorizedUsers();

  return <FormRegister />;
};
