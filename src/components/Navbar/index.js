import React from 'react'
import {Nav, NavLink,Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements' ;

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to ="/">
                    <h1>Gypzeez</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to ="/about" activestyles>
                        About
                    </NavLink>
                    <NavLink to ="/Services" activestyles>
                        Services
                    </NavLink>
                    <NavLink to ="/Contact Us" activestyles>
                        Contact Us
                    </NavLink>
                    <NavLink to ="/Sign Up" activestyles>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to ="/signin">Sign In</NavBtnLink>
                </NavBtn>

            </Nav>
            
        </>
    )
}

export default Navbar;
