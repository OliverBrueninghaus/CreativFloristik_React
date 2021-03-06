import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #fff;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
export const CloseIcon = styled(FaTimes)`
  color: #be2664;
  transform: 0.2s ease-in-out;

  &:hover {
    color:rgba(190,38,100,0.6);
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled.a`
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #be2664;
  cursor: pointer;

  &:hover {
    color:rgba(190,38,100,0.6);
    transition: 0.2s ease-in-out;
  }

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