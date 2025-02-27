import { Col, Row } from 'antd';
import styled from 'styled-components';

export const RowStyled = styled(Row)`
  white-space: nowrap;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: auto;
`;

export const ColStyled = styled(Col)`
  display: flex;
  flex-direction: column;
  min-width: 240px;
  max-width: unset;
  flex: 1;
  margin-bottom: 16px;
  max-width: 280px;
`;
