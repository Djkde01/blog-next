import Emoji from "../Emoji/Emoji";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import {
  CompanyContainer,
  FooterWrapper,
  SocialContainer,
  SocialIconsContainer,
  Slogan,
} from "./FooterStyles";
import { SocialIcons } from "../../styles/GlobalComponents";

const Footer = () => (
  <FooterWrapper>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>
          Made with <Emoji symbol="💚" label="heart" /> by Djkde
        </Slogan>
      </CompanyContainer>
      <SocialContainer>
        <SocialIcons href="https://github.com/Djkde01">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/djkde/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/djkde">
          <AiOutlineTwitter size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
);

export default Footer;
