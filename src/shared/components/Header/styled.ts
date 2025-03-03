import { Header as HeaderAntd } from 'antd/es/layout/layout';
import styled from 'styled-components';

export const Header = styled(HeaderAntd)`
  height: fit-content;
  background: #fff;
  padding: 0 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
