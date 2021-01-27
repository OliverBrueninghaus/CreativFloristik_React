import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled.a`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  a:link {
    color: #fff;
    text-decoration: none;
  }
  a:visited {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    color: rgb(255, 255, 255, 0.6);
    text-decoration: none;
  }
  a:active {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 600px) {
    top: 1rem;
    left: 1rem;
  }
  @media screen and (max-width: 393px) {
    font-size: 1.5rem;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #000;
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }

  @media screen and (max-width: 480px) {
    p {
      display: none;
      font-weight: bold;
    }
  }
`;

export const Bars = styled(FiMenu)`
  font-size: 2rem;
  transform: translate(-50%, -15%);

  @media screen and (max-width: 480px) {
    transform: translate(-90%, 63%);
  }
`;
