import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  html,
  body,
  #root {
    min-height: 100vh;
    margin: 0;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;
