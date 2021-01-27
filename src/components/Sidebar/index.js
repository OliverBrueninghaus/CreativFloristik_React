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
        <SidebarLink>
          <a href="/">Home</a>
        </SidebarLink>
        <SidebarLink>
          <a href="#sortiment">Unser Sortiment</a>
        </SidebarLink>
        <SidebarLink>
          <a href="/gallerie">Gallerie</a>
        </SidebarLink>
        <SidebarLink>
          <a href="#team">Unser Team</a>
        </SidebarLink>
        <SidebarLink>
          <a href="#kontakt">Kontakt</a>
        </SidebarLink>
        <SidebarLink>
          <a href="/datenschutz">Datenschutz</a>
        </SidebarLink>
        <SidebarLink>
          <a href="/impressum">Impressum</a>
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
