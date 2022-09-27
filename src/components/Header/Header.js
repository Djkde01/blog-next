import Link from "next/link";
import { TbCoffee } from "react-icons/tb";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillHome,
} from "react-icons/ai";
import {
  Container,
  Div1,
  ContactLinksContainer,
  Span,
  LogoIcon,
} from "./HeaderStyles";

import { SocialIcons } from "../../styles/GlobalComponents";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <LogoIcon>
          <TbCoffee size="3rem" />
          <Span>Sergio Estrella - Blog</Span>
        </LogoIcon>
      </Link>
    </Div1>
    <ContactLinksContainer>
      <SocialIcons href="https://djkde.com">
        <AiFillHome size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/Djkde01">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/djkde/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/djkde">
        <AiOutlineTwitter size="3rem" />
      </SocialIcons>
    </ContactLinksContainer>
  </Container>
);

export default Header;
