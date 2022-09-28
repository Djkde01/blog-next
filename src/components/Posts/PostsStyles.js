import styled from "styled-components";

export const PostCard = styled.article`
  padding: 2rem 2rem 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  border-radius: 0.5rem;
  background: #212d45;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0px 0px 3rem;
  }
`;

export const FeaturedImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 20rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

export const FeaturedImage = styled.img`
  height: 20rem;
  width: 100%;
  position: absolute;
  object-position: top;
  object-fit: cover;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  border-radius: 0.5rem;
  @media ${(props) => props.theme.breakpoints.md} {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`;

export const PostTitle = styled.h2`
  font-weight: 800;
  font-size: 56px;
  line-height: 56px;
  text-align: center;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: 0;
  cursor: pointer;
  position: relative;
  z-index: 1;

  &::before {
    content: attr(data-before-content);
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0px;
    top: 0px;
    background: linear-gradient(
      121.57deg,
      rgba(255, 255, 255, 0.66) 18.77%,
      #ffffff 60.15%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: 0.4s ease-out;
    z-index: -1;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 12px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 8px;
    max-width: 100%;
  }
`;
