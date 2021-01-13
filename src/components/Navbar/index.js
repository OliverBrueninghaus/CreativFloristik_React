import React from 'react'
import {Bars, Nav, NavIcon, NavLink} from './NavbarElements';

const Navbar = ({toggle}) => { 
    return (
        <>
            <Nav>
            <NavLink to='/'>Creativ Floristik</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menü</p>
                    <Bars/>
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
