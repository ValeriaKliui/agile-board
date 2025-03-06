import { Layout } from 'antd';
import styled from 'styled-components';

const { Header: HeaderAntd } = Layout;

export const Header = styled(HeaderAntd)`
  height: fit-content;
  background: #fff;
  padding: 0 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
