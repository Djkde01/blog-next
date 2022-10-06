import styled from "styled-components";

export const WidgetContainer = styled.section`
  background: #212d45;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04));
  border-radius: 0.5rem;
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const WidgetTitle = styled.h3`
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  font-weight: 600;
  /*border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  */
`;

export const RelatedPostCard = styled.article`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const RelatedPostImageContainer = styled.figure`
  width: 4rem;
  flex: none;
`;
export const RelatedPostImage = styled.img`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 3.5rem;
  vertical-align: middle;
`;
export const RelatedPostDetails = styled.span`
  flex-grow: 1;
  margin-left: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  & a {
    color: rgba(255, 255, 255, 0.75);
    font-weight: 700;
  }
`;
