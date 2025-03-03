import { AppRoutes } from '@shared/components';
import { useAuthState } from '@shared/hooks';
import { BrowserRouter } from 'react-router';

export const App = () => {
  useAuthState();

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
