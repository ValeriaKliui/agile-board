import { Footer } from "@components/Footer";
import { HeaderContainer } from "@containers/HeaderContainer";
import { Content } from "@layout/auth/styled";
import { Layout } from "@layout/default/styled";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { Outlet } from "react-router";

export const DefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => setCollapsed((isCollapsed) => !isCollapsed);

  return (
    <Layout>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapse}
      >
        <Menu theme="light" />
      </Sider>
      <Layout>
        <HeaderContainer />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
