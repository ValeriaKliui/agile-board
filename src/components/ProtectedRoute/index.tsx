import { useProtectedRoute } from "@hooks/useProtectedRoute";
import { PropsWithChildren } from "react";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  useProtectedRoute();

  return <>{children}</>;
};
