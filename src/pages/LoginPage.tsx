import { LoginForm } from "@components/Forms/FormLogin";
import { useRedirectAuthorizedUsers } from "@hooks/useRedirectAuthorizedUsers";

export const LoginPage = () => {
  useRedirectAuthorizedUsers();

  return <LoginForm />;
};
