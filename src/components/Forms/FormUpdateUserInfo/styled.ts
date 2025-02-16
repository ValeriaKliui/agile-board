import styled from "styled-components";
import { Input as InputAntd } from "antd";

export const Input = styled(InputAntd)<{ $isEditable: boolean }>`
  background: #ffffff;
`;
