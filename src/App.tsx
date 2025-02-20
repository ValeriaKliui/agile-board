import { AppRoutes } from '@config';
import { useAuthState } from '@shared/hooks';

export const App = () => {
  useAuthState();

  return <AppRoutes />;
};
