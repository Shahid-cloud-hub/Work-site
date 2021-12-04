import React from 'react'
import { NavBar, AnchorTag } from './Top-Navbar.styled'
import { FaFacebookF } from "react-icons/fa";
const Navbar = () => {
    return (
        <NavBar>
            <AnchorTag href="http://www.webevis.com/contact-us" >PL73 Sidque Trade Center, Lahore, Pakistan</AnchorTag>
            <span>+1-631-946-8749</span>
            <a href="mailto:fasih.ullah.32744@gmail.com">info@webevis.com</a>
            <FaFacebookF />
        </NavBar>

        
    )
}

export default Navbar
