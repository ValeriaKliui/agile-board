import { AUTH_TABS } from '@constants/common';
import { FormRegisterContainer } from '@containers/FormRegisterContainer/index';
import { useRedirectAuthorizedUsers } from '@hooks/useRedirectAuthorizedUsers';
import { useTabNavigation } from '@hooks/useTabNavigation';
import { Tabs } from '@layout/auth/styled';
import { userStore } from '@store/user/userStore';

export const RegisterPage = () => {
  useRedirectAuthorizedUsers(userStore.isLoggedIn);

  const { onTabChange, activeTabKey } = useTabNavigation({
    tabItems: AUTH_TABS,
  });

  return (
    <>
      <Tabs defaultActiveKey={activeTabKey} items={AUTH_TABS} onChange={onTabChange} />
      <FormRegisterContainer />
    </>
  );
};
