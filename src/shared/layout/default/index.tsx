import { MailOutlined, SettingOutlined,UserOutlined } from '@ant-design/icons';
import { Footer, HeaderManager } from '@shared/components';
import { Menu } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router';

import { Content, Layout, Sider } from './styled';

export const DefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapse = () => setCollapsed((isCollapsed) => !isCollapsed);
  return (
    <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapse} theme="light">
        <Menu mode="vertical" theme="light" selectable={false}>
          <Menu.Item key="1" icon={<UserOutlined />} />
          <Menu.Item key="2" icon={<SettingOutlined />} />
          <Menu.Item key="3" icon={<MailOutlined />} />
        </Menu>
      </Sider>

      <Layout>
        <HeaderManager />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
