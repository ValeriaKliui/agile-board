import { Layout as LayoutAntd } from "antd";
import { Content as ContentAntd } from "antd/es/layout/layout";
import SiderAntd from "antd/es/layout/Sider";
import styled from "styled-components";

export const Layout = styled(LayoutAntd)`
  min-height: 100vh;
`;

export const Content = styled(ContentAntd)`
  padding: 20px;
  background: #f5f5f5;
`;
export const Sider = styled(SiderAntd)`
  background: rgba(161, 210, 255, 0.4);
  padding-top: 20px;
  text-align: center;
  box-shadow: 2px 0px 8px rgba(0, 0, 0, 0.1);
`;
