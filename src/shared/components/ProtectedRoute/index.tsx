import { Spin } from '@shared/components';
import { useProtectedRoute } from '@shared/hooks';
import { userStore } from '@store';
import { observer } from 'mobx-react-lite';
import { PropsWithChildren } from 'react';

export const ProtectedRoute = observer(({ children }: PropsWithChildren) => {
  useProtectedRoute(userStore.isLoggedIn, userStore.loadingUser);

  if (userStore.loadingUser) return <Spin />;

  if (!userStore.isLoggedIn) return null;

  return <>{children}</>;
});
