import { LoginFormManager } from '@pages/login';
import { Tabs } from '@shared/components';
import { AUTH_TABS } from '@shared/constants/ui';
import { useRedirectAuthorizedUsers, useTabNavigation } from '@shared/hooks';
import { userStore } from '@store';
import { observer } from 'mobx-react-lite';

export const LoginPage = observer(() => {
  useRedirectAuthorizedUsers(userStore.isLoggedIn);

  const { onTabChange, activeTabKey } = useTabNavigation({
    tabItems: AUTH_TABS,
  });

  return (
    <>
      <Tabs defaultActiveKey={activeTabKey} items={AUTH_TABS} onChange={onTabChange} />
      <LoginFormManager />
    </>
  );
});
