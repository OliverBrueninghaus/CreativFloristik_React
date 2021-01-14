import React from "react";
import { Link } from "react-router-dom";
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
              <SocialLogo to="/">Creativ Floristik</SocialLogo>
              <FooterImpressum>
                <Link to={"/impressum"}>Impressum</Link>
              </FooterImpressum>
              <FooterDatenschutz>
                <Link to={"/datenschutz"}>Datenschutz</Link>
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
  }

export default Footer;
