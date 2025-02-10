import { Outlet, useLocation } from "react-router";
import { useNavigate } from "react-router";
import { Flex, Tabs } from "antd";
import { AUTH_TABS } from "../../constants";
import { Content, Layout } from "./styled";
import { getTabInfo } from "../../utils";

export default function AuthLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { key } = getTabInfo(AUTH_TABS, "link", pathname);

  const onTabChange = (tabKey: string) => {
    const { link } = getTabInfo(AUTH_TABS, "key", tabKey);
    navigate(link);
  };

  return (
    <Flex gap="middle" wrap justify="center" align="center" >
      <Layout>
        <Content>
          <Tabs
            defaultActiveKey={key}
            items={AUTH_TABS}
            onChange={onTabChange}
          />
          <Outlet />
        </Content>
      </Layout>
    </Flex>
  );
}
