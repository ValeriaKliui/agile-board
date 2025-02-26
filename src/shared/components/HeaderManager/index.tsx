import { PATHS } from '@constants';
import { Header } from '@shared/components';
import { authStore, userStore } from '@store';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router';

export const HeaderManager = observer(() => {
  const navigate = useNavigate();

  const onLogin = () => navigate(PATHS.LOGIN);
  const onLogout = () => authStore.logout();

  return (
    <Header
      username={userStore.user?.username}
      avatar={userStore.user?.avatar}
      onLogin={onLogin}
      onLogout={onLogout}
    />
  );
});
