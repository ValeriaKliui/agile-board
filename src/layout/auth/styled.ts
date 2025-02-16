import {
  Card as CardAntd,
  Flex as FlexAntd,
  Layout as LayoutAntd,
  Tabs as TabsAntd,
} from "antd";
import styled from "styled-components";

const { Content: ContentAntd } = LayoutAntd;

export const Layout = styled(LayoutAntd)`
  min-height: 100vh;
`;

export const Content = styled(ContentAntd)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Card = styled(CardAntd)`
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Flex = styled(FlexAntd)`
  height: 100%;
`;

export const Tabs = styled(TabsAntd)`
  align-items: center;
`;
