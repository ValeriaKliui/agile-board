import { AUTH_TABS } from "@constants/ui";
import { useTabNavigation } from "@hooks/useTabNavigation";
import { Content, Flex, Layout, Tabs } from "@layout/auth/styled";
import { Outlet } from "react-router";

export const AuthLayout = () => {
  const { onTabChange, activeTabKey } = useTabNavigation({
    tabItems: AUTH_TABS,
  });

  return (
    <Flex gap="middle" wrap justify="center" align="center">
      <Layout>
        <Content>
          <Tabs
            defaultActiveKey={activeTabKey}
            items={AUTH_TABS}
            onChange={onTabChange}
          />
          <Outlet />
        </Content>
      </Layout>
    </Flex>
  );
};
