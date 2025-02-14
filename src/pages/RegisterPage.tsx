import { AUTH_TABS } from "@constants/index";
import { FormRegisterContainer } from "@containers/FormRegisterContainer";
import { useRedirectAuthorizedUsers } from "@hooks/useRedirectAuthorizedUsers";
import { useTabNavigation } from "@hooks/useTabNavigation";
import { Tabs } from "@layout/auth/styled";

export const RegisterPage = () => {
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
      <FormRegisterContainer />
    </>
  );
};
