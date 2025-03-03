import { MEDIA } from '@config';
import { Card as CardAntd, Flex as FlexAntd, Layout as LayoutAntd } from 'antd';
import styled from 'styled-components';

const { Content: ContentAntd } = LayoutAntd;

export const Layout = styled(LayoutAntd)`
  min-height: 100vh;
  background: #985ace;
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
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  ${MEDIA.s} {
    max-width: 450px;
  }
  ${MEDIA.xl} {
    transform: scale(2);
  }
`;

export const Flex = styled(FlexAntd)`
  height: 100%;
`;
