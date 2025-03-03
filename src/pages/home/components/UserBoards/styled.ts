import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;
export const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 300px));
  gap: 2em;
`;
