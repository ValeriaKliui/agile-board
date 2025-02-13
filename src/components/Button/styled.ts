import { Button } from "antd";
import styled from "styled-components";

export const ButtonStyled = styled(Button)<{ $centered?: boolean }>`
  display: flex;
  margin: ${(p) => (p.$centered ? "auto" : "inherit")};
`;
