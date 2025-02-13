import { AUTH_TABS } from "@constants/index";
import { useTabNavigation } from "@hooks/useTabNavigation";
import { Card, Content, Flex, Layout, Tabs } from "@layout/auth/styled";
import { Outlet } from "react-router";

export const AuthLayout = () => {
  const { onTabChange, activeTabKey } = useTabNavigation({
    tabItems: AUTH_TABS,
  });

  return (
    <Flex gap="middle" wrap justify="center" align="center">
      <Layout>
        <Content>
          <Card>
            <Tabs
              defaultActiveKey={activeTabKey}
              items={AUTH_TABS}
              onChange={onTabChange}
            />
            <Outlet />
          </Card>
        </Content>
      </Layout>
    </Flex>
  );
};
