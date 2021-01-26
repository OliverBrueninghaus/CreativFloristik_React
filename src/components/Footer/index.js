import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  FooterImpressum,
  FooterDatenschutz,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo>
              <a href="/">Creativ Floristik</a>
            </SocialLogo>
            <FooterImpressum>
              <a href="/impressum">Impressum</a>
            </FooterImpressum>
            <FooterDatenschutz>
              <a href="/datenschutz">Datenschutz</a>
            </FooterDatenschutz>
            <SocialIcons>
              <SocialIconLink
                href="//www.facebook.com/Creativ-Floristik-1811536975841245/"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="mailto:blumen@creativ-floristik.net"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FiMail />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
