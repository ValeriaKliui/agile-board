import { PATHS } from '@constants';
import { Header } from '@shared/components';
import { authStore } from '@store/auth';
import { userStore } from '@store/user';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

export const HeaderManager = observer(() => {
  const navigate = useNavigate();

  const onLogin = useCallback(() => navigate(PATHS.LOGIN), [navigate]);
  const onLogout = useCallback(() => authStore.logout(), []);

  return (
    <Header
      username={userStore.user?.username}
      avatar={userStore.user?.avatar}
      onLogin={onLogin}
      onLogout={onLogout}
    />
  );
});
