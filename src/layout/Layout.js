import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container, MainContent } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </Container>
  );
};
