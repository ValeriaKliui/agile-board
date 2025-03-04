import { Layout as LayoutAntd } from 'antd';
import styled from 'styled-components';

const { Content: ContentAntd, Sider: SiderAntd } = LayoutAntd;

export const Layout = styled(LayoutAntd)`
  min-height: 100vh;
`;
export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 2000px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled(ContentAntd)`
  padding: 40px;
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  min-height: 100%;

  & > *:first-child {
    height: 100%;
  }
`;
export const Sider = styled(SiderAntd)`
  background: rgba(161, 210, 255, 0.4);
  padding-top: 20px;
  text-align: center;
  box-shadow: 2px 0px 8px rgba(0, 0, 0, 0.1);
`;
