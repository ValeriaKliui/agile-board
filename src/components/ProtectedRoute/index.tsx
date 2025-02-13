import { useRedirectAuthorizedUsers } from "@hooks/useRedirectAuthorizedUsers";

export const ProtectedRoute = ({ children }) => {
  useRedirectAuthorizedUsers(true);

  return <>{children}</>;
};
