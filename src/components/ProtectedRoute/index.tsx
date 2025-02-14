import { useProtectedRoute } from "@hooks/useProtectedRoute";
import { observer } from "mobx-react-lite";
import { PropsWithChildren } from "react";

export const ProtectedRoute = observer(({ children }: PropsWithChildren) => {
  useProtectedRoute();

  return <>{children}</>;
});
