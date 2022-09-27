import { Container, MainContent } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <MainContent>{children}</MainContent>
    </Container>
  );
};
