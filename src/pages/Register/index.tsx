import { AUTH_TABS } from '@constants/common';
import { RegisterFormContainer } from '@containers/RegisterFormContainer';
import { useRedirectAuthorizedUsers, useTabNavigation } from '@hooks';
import { Tabs } from '@layout/auth/styled';
import { userStore } from '@store/user';

export const RegisterPage = () => {
  useRedirectAuthorizedUsers(userStore.isLoggedIn);

  const { onTabChange, activeTabKey } = useTabNavigation({
    tabItems: AUTH_TABS,
  });

  return (
    <>
      <Tabs defaultActiveKey={activeTabKey} items={AUTH_TABS} onChange={onTabChange} />
      <RegisterFormContainer />
    </>
  );
};
