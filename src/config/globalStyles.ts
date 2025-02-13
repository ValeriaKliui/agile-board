import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  html,
  body,
  #root {
    min-height: 100vh;
    margin: 0;
  }
`;

export default GlobalStyle;
