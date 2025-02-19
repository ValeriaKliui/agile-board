import { AppRoutes } from '@config';
import { useAuthState } from '@hooks';

export const App = () => {
  useAuthState();

  return <AppRoutes />;
};
