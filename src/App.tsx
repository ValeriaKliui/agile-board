import { AppRoutes } from '@config/routes';
import { useAuthState } from '@hooks/useAuthState';

export const App = () => {
  useAuthState();

  return <AppRoutes />;
};
