import React from 'react'
import { LogoContainer, LogoImg, LogoText, NavContainer, NavElement, NavElementWrapper, NavWrapper } from '../styledComponents/Navbar'
import MenuIcon from '@mui/icons-material/Menu';
import dil from '../images/dil.svg'
import logoImg from '../images/logo.svg'
export const Navbar = () => {
  return (
    <>
        <NavContainer>
            
            <NavWrapper>
                <LogoContainer><LogoImg src={logoImg}/><LogoText></LogoText></LogoContainer>
                <NavElementWrapper>
                    <NavElement>Home</NavElement>
                    <NavElement>Login</NavElement>
                    <NavElement>Signup</NavElement>
                    <NavElement display={'block'}><MenuIcon sx={{fontSize:'40px'}}/></NavElement>
                </NavElementWrapper>
                 
            </NavWrapper>
        </NavContainer>
    </>
  )
}
