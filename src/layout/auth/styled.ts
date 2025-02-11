import { Flex as FlexAntd, Layout as LayoutAntd, Tabs as TabsAntd } from "antd";
import styled from "styled-components";

const { Content: ContentAntd } = LayoutAntd;

export const Layout = styled(LayoutAntd)`
  border-radius: 8px;
  overflow: hidden;
  width: calc(50% - 8px);
  max-width: calc(50% - 8px);
`;

export const Content = styled(ContentAntd)`
  text-align: center;
  min-height: 120;
  line-height: 120px;
`;

export const Flex = styled(FlexAntd)`
  height: 100%;
`;

export const Tabs = styled(TabsAntd)`
  align-items: center;
`;
