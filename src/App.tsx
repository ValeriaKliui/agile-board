import { AppRoutes } from '@config/routes';
import { useAuthState } from '@hooks';

export const App = () => {
  useAuthState();

  return <AppRoutes />;
};
