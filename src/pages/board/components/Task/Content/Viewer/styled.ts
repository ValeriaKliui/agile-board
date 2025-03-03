import { Flex, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 0.3fr;
  gap: 20px;
`;
export const PriorityStyled = styled.span<{ $color: string }>`
  color: ${({ $color }) => $color};
`;
export const Description = styled(Text)`
  font-size: 18px;
`;
export const Details = styled(Flex)`
  padding-top: 20px;
`;
