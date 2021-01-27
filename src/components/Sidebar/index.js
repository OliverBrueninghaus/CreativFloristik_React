import React from "react";
import {
  SidebarContainer,
  SidebarLink,
  Icon,
  CloseIcon,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <a href="/">Home</a>
        <a href="#sortiment">Unser Sortiment</a>
        <a href="/team">Gallerie</a>
        <a href="#team">Unser Team</a>
        <a href="#kontakt">Kontakt</a>
        <a href="/datenschutz">Datenschutz</a>
        <a href="/impressum">Impressum</a>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
