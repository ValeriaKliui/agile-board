import { RegisterFormManager } from '@pages/register';
import { Tabs } from '@shared/components';
import { AUTH_TABS } from '@shared/constants/ui';
import { useRedirectAuthorizedUsers, useTabNavigation } from '@shared/hooks';
import { userStore } from '@store';
import { observer } from 'mobx-react-lite';

export const RegisterPage = observer(() => {
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
});
