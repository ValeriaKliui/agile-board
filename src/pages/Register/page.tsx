import { AUTH_TABS } from '@constants/common';
import { useRedirectAuthorizedUsers, useTabNavigation } from '@shared/hooks';
import { userStore } from '@store/user';
import { Tabs } from 'antd';
import { RegisterFormManager } from '@pages/Register/components';

export const RegisterPage = () => {
  useRedirectAuthorizedUsers(userStore.isLoggedIn);

  const { onTabChange, activeTabKey } = useTabNavigation({
    tabItems: AUTH_TABS,
  });

  return (
    <>
      <Tabs defaultActiveKey={activeTabKey} items={AUTH_TABS} onChange={onTabChange} />
      <RegisterFormManager />
    </>
  );
};
