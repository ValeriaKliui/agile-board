import { PATHS } from '@constants';
import { Header } from '@shared/components';
import { authStore, userStore } from '@store';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

export const HeaderManager = observer(() => {
  const { username, avatar } = userStore.user ?? {}
  const navigate = useNavigate();

  const onLogin = useCallback(() => navigate(PATHS.LOGIN), [navigate]);
  const onLogout = useCallback(() => authStore.logout(), []);

  return (
    <Header
      username={username}
      avatar={avatar}
      onLogin={onLogin}
      onLogout={onLogout}
    />
  );
});
