import { Layout as LayoutAntd } from 'antd';
import styled from 'styled-components';

const { Content: ContentAntd } = LayoutAntd;

export const Layout = styled(LayoutAntd)`
  min-height: 100vh;
`;

export const Content = styled(ContentAntd)`
  flex: 1;
  padding: 40px;
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  /* position: relative; */
`;
