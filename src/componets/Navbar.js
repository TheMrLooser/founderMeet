import React from 'react'
import { LogoContainer, LogoImg, LogoText, NavContainer, NavElement, NavElementWrapper, NavWrapper } from '../styledComponents/Navbar'
import MenuIcon from '@mui/icons-material/Menu';
import dil from '../images/dil.svg'

export const Navbar = () => {
  return (
    <>
        <NavContainer>
            
            <NavWrapper>
                <LogoContainer><LogoImg src={dil}/><LogoText></LogoText></LogoContainer>
                <NavElementWrapper>
                    <NavElement>Home</NavElement>
                    <NavElement>Login</NavElement>
                    <NavElement>Signup</NavElement>
                </NavElementWrapper>
                 <MenuIcon sx={{fontSize:'40px'}}/>
            </NavWrapper>
        </NavContainer>
    </>
  )
}
