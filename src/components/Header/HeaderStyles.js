import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 1 / 6;
    justify-content: center;
  }
`;

export const LogoIcon = styled.a`
  display: flex;
  align-items: "center";
  color: "white";
`;

export const Span = styled.span`
  font-size: 2rem;
  display: inline-flex;
  align-items: center;
`;
export const ContactLinksContainer = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 2 / 1 / 2 / 6;
  }
`;
