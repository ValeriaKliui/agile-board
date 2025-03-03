import { Footer, HeaderManager } from '@shared/components';
import { Outlet } from 'react-router';

import { Content, Layout, Wrapper } from './styled';

export const DefaultLayout = () => {
  return (
    <Layout>
      <Wrapper>
        <HeaderManager />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Wrapper>
    </Layout>
  );
};
