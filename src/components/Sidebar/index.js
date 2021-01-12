import React from 'react'
import {SidebarContainer, SidebarLink, Icon, CloseIcon, SidebarMenu, SidebarRoute, SideBtnWrap} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Home</SidebarLink>
                <SidebarLink to="/">Unsere Angebote</SidebarLink>
                <SidebarLink to="/">Unser Team</SidebarLink>
                <SidebarLink to="/">Gallerie</SidebarLink>
                <SidebarLink to="/">Kontakt</SidebarLink>
                <SidebarLink to="/">Impressum/Datenschutz</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Online bestellen</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar