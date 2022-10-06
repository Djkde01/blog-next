import styled from "styled-components";

export const AuthorContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
  }
`;

export const AuthorDataContainer = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0.5rem 0px;
  width: auto;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 1rem;
    width: 100%;
  }
`;

export const AuthorPhoto = styled.img`
  height: 30px;
  width: 30px;
  vertical-align: middle;
  border-radius: 20rem;
`;

export const AuthorText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding: 0.5rem;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
  }
`;
