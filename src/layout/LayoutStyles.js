import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;

export const MainContent = styled.main`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 3rem;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;
