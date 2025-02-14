import { useProtectedRoutes } from "@hooks/useProtectedRoutes";
import { observer } from "mobx-react-lite";
import { PropsWithChildren } from "react";

export const ProtectedRoute = observer(({ children }: PropsWithChildren) => {
  useProtectedRoutes();

  return <>{children}</>;
});
