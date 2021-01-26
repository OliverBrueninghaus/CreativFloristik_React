import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #ececec;
`;

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  color: #000;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const FooterImpressum = styled.a`
  justify-self: start;
  cursor: pointer;
  margin-bottom: 16px;
  a:link {
    color: #000;
    text-decoration: none;
  }
  a:visited {
    color: #000;
    text-decoration: none;
  }
  a:hover {
    color: #BE2664;
    text-decoration: none;
  }
  a:active {
    color: #000;
    text-decoration: none;
  }
`;

export const FooterDatenschutz = styled.a`
  justify-self: start;
  cursor: pointer;
  margin-bottom: 16px;
  text-decoration: none;
  a:link {
    color: #000;
    text-decoration: none;
  }
  a:visited {
    color: #000;
    text-decoration: none;
  }
  a:hover {
    color: #BE2664;
    text-decoration: none;
  }
  a:active {
    color: #000;
    text-decoration: none;
  }
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #000;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  a:link {
    color: #000;
    text-decoration: none;
  }
  a:visited {
    color: #000;
    text-decoration: none;
  }
  a:hover {
    color: #BE2664;
    text-decoration: none;
  }
  a:active {
    color: #000;
    text-decoration: none;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 240px;
  a:link {
    color: #000;
    text-decoration: none;
  }
  a:visited {
    color: #000;
    text-decoration: none;
  }
  a:hover {
    color: #BE2664;
    text-decoration: none;
  }
  a:active {
    color: #000;
    text-decoration: none;
  }
`;

export const SocialIconLink = styled.a`
  color: #000;
  font-size: 24px;
  a:link {
    color: #000;
    text-decoration: none;
  }
  a:visited {
    color: #000;
    text-decoration: none;
  }
  a:hover {
    color: #BE2664;
    text-decoration: none;
  }
  a:active {
    color: #000;
    text-decoration: none;
  }
`;
