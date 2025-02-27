import { PATHS } from '@constants';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

export const useRedirectAuthorizedUsers = (isLoggedIn: boolean) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || PATHS.HOME; 

  useEffect(() => {
    if (isLoggedIn) navigate(from, { replace: true });
  }, [navigate, isLoggedIn,from]);
};

