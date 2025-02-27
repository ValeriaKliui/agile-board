import { useProtectedRoute } from '@shared/hooks';
import { userStore } from '@store';
import { observer } from 'mobx-react-lite';
import { PropsWithChildren } from 'react';

export const ProtectedRoute = observer(({ children }: PropsWithChildren) => {
  useProtectedRoute(userStore.isLoggedIn)

  return <>{children}</>;
});
