import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 100%;
    padding:20px 20px;
`

export const HeaderStyled = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    grid-gap: 23px;
    justify-content: space-between;
`

export const Image = styled.img`
    width: 180px;
`

export const Link = styled.link`
    text-decoration: none;
`

export const Button = styled.button`
    
    font-size: 14px;
    font-weight: bold;
    background-color: #ffffff;
    padding: 8px;
    color: #00bf80;
    border: 2px solid #00bf80;
    border-radius: 4px;
    box-shadow: inset 0 0 0 0 rgb(0 0 0 / 10%);
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    transition: all ease 0.3s;
    text-transform: uppercase;
    cursor: pointer;


    &:hover{
        opacity: 0.9;
        transform: scale(0.98);
        background-color: #00bf80;
        color: white;
    }

    &:a {
        text-decoration: none;
    }

`