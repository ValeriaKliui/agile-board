import { AUTH_TABS } from "@constants/index";
import { FormLoginContainer } from "@containers/FormLoginContainer";
import { useRedirectAuthorizedUsers } from "@hooks/useRedirectAuthorizedUsers";
import { useTabNavigation } from "@hooks/useTabNavigation";
import { Tabs } from "@layout/auth/styled";

export const LoginPage = () => {
  useRedirectAuthorizedUsers();

  const { onTabChange, activeTabKey } = useTabNavigation({
    tabItems: AUTH_TABS,
  });

  return (
    <>
      <Tabs
        defaultActiveKey={activeTabKey}
        items={AUTH_TABS}
        onChange={onTabChange}
      />
      <FormLoginContainer />
    </>
  );
};
