import { LoginForm } from "@components/Forms/Login";
import { useRedirectAuthorizedUsers } from "@hooks/useRedirectAuthorizedUsers";

export const Login = () => {
  useRedirectAuthorizedUsers();

  return <LoginForm />;
};
