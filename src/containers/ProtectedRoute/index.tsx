import { useProtectedRoute } from '@hooks/useProtectedRoute';
import { userStore } from '@store/user/userStore';
import { observer } from 'mobx-react-lite';
import { PropsWithChildren } from 'react';

export const ProtectedRoute = observer(({ children }: PropsWithChildren) => {
  useProtectedRoute(userStore.isLoggedIn);

  return <>{children}</>;
});
