import { AppRoutes } from "@config/routes";
import { useFetchUserData } from "@hooks/useFetchUserData";
import { useUnauthorizeUser } from "@hooks/useUnauthorizeUser";

export const App = () => {
  useUnauthorizeUser();
  useFetchUserData();

  return <AppRoutes />;
};
