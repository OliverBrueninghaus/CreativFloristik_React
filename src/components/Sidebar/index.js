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
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink
                activeClass="active"
                to="sortiment"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 1
              </SidebarLink>
        <SidebarLink to="/team">Unser Team</SidebarLink>
        <SidebarLink to="/">Gallerie</SidebarLink>
        <SidebarLink to="/kontakt">Kontakt</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
