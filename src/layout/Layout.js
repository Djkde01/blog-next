import Header from "../components/Header/Header";
import { Container, MainContent } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <MainContent>{children}</MainContent>
    </Container>
  );
};
