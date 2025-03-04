import { Flex } from 'antd';
import styled from 'styled-components';

export const FlexStyled = styled(Flex)<{ $isLoading: boolean }>`
  min-height: ${({ $isLoading }) => ($isLoading ? '75vh' : 'unset')};
`;
