import React from 'react';
import NavBar from './Top-Navbar/Top-Navbar';
import HeaderStyled from './Navbar/Navbar'
import "./styles/Global.css";
import "./styles/variables.css";

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <HeaderStyled />
            <div className="content">{children}</div>
        </>
    )
}

export default Layout