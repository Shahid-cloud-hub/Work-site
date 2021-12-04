import React from 'react'
import { HeaderStyled, Container, Nav, Image, Button } from './Navbar.styled'
import logo from '../assets/images/logo/1.png';
import {Link} from 'gatsby';
import '../styles/Global.css';

const Navbar = () => {
    return (
        <HeaderStyled>
            <Container>
                <Nav>
                    <Image src={logo}  alt="logo"></Image>
                <div>
                    <Nav>        
                    <Link className="navItems" activeClassName="activeNavItems" to="/" >Home</Link>
                    <Link className="navItems" activeClassName="activeNavItems" to="/about">About</Link>
                    <Link className="navItems" activeClassName="activeNavItems" to="/services">Services</Link>
                    <Link className="navItems" activeClassName="activeNavItems" to="/projects">Projects</Link>
                    <Link className="navItems" activeClassName="activeNavItems" to="/blog">Blog</Link>
                    <Link className="navItems" activeClassName="activeNavItems" to="/contact">Contact</Link>
                    
                    <Button><a href="/popup">kichoff your project</a></Button>
                    </Nav>
                </div>    
                </Nav>
            </Container>
        </HeaderStyled>
    )
}

export default Navbar