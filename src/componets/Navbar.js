import React from 'react'
import { AnkarTag, LogoContainer, LogoImg, LogoText, NavContainer, NavElement, NavElementWrapper, NavWrapper } from '../styledComponents/Navbar'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logoImg from '../images/logo.svg'
export const Navbar = () => {
  return (
    <>
        <NavContainer>
            
            <NavWrapper>
                <LogoContainer><Link to={'/'}><LogoImg src={logoImg}/></Link><LogoText></LogoText></LogoContainer>
                <NavElementWrapper>
                    <NavElement>Home</NavElement>
                    <NavElement><AnkarTag href='#Confession'>Confession</AnkarTag> </NavElement>
                    <NavElement>Signup</NavElement>
                    <NavElement display={'block'}><MenuIcon sx={{fontSize:'40px'}}/></NavElement>
                </NavElementWrapper>
                 
            </NavWrapper>
        </NavContainer>
    </>
  )
}
