import { PATHS } from '@constants';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

export const useProtectedRoute = (isLoggedIn: boolean) => {
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
    if (!isLoggedIn) navigate(PATHS.LOGIN, { state: { from: location.pathname } });
  }, [navigate, isLoggedIn, location.pathname]);
};
