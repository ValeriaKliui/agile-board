import { Footer, HeaderManager } from '@shared/components';
import { Outlet } from 'react-router';

import { Content, Layout, } from './styled';

export const DefaultLayout = () => {
  return (
    <Layout>
      <HeaderManager />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};
