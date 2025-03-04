import { Col, Row } from 'antd';
import styled from 'styled-components';

export const RowStyled = styled(Row)`
  white-space: nowrap;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: auto;
  padding-bottom: 20px;
`;

export const ColStyled = styled(Col)`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  flex: 0 0 280px;
`;
