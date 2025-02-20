import { AUTH_TABS } from '@constants/common';
import { LoginFormManager } from '@pages/Login';
import { Tabs } from '@shared/components';
import { useRedirectAuthorizedUsers, useTabNavigation } from '@shared/hooks';
import { userStore } from '@store/user';

export const LoginPage = () => {
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
};
