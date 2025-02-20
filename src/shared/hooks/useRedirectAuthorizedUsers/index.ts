import { PATHS } from '@constants';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const useRedirectAuthorizedUsers = (isLoggedIn: boolean) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate(PATHS.HOME);
  }, [navigate, isLoggedIn]);
};
