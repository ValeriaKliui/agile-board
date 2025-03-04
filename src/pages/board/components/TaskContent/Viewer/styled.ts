import { Flex } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 0.3fr;
  gap: 20px;
`;

export const Details = styled(Flex)`
  padding-top: 20px;
`;
