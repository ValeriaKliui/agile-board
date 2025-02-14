import { PATHS } from '@constants/index';
import userStore from '@store/user/userStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const useRedirectAuthorizedUsers = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (userStore.isLoggedIn) navigate(PATHS.HOME);
  }, [navigate]);
};
