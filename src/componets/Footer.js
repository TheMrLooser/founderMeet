import React from 'react'
import { FooterContainer, FooterCopyRightSection, FooterElement, FooterElementContainer, FooterElementIcon, FooterImg, FooterWrapper, ImagesCOntainer } from '../styledComponents/Footer'
import nobadWibesImg from '../images/nobadvibes.svg'
import footerSnapImg from '../images/footershapes.svg'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
   <>
    <FooterContainer>
        <FooterWrapper> 
            <FooterElementContainer >
                 <div style={{width:'80%'}}><h2 className='font'>Have  Question?</h2></div>
                <FooterElement> <FooterElementIcon><LocalPhoneIcon/></FooterElementIcon> 888888888888 </FooterElement>
                <FooterElement style={{backgroundColor:'#FF90E8'}}> <FooterElementIcon><EmailIcon/></FooterElementIcon> hellomatchmaking24@gmail.com </FooterElement>
            </FooterElementContainer>
            <FooterElementContainer hide={'hide'} style={{alignItems:'flex-end'}}>
            <ImagesCOntainer><FooterImg src={footerSnapImg}/></ImagesCOntainer>
            </FooterElementContainer>
            <FooterElementContainer style={{alignItems:'flex-end'}}>
                <ImagesCOntainer><FooterImg src={nobadWibesImg}/></ImagesCOntainer>
            </FooterElementContainer>
        </FooterWrapper>
        <FooterCopyRightSection>
            <p> Made in India 🧡</p> 
            <p>Copyright © 2022 MatchMaking24.com | All Rights Reserved.</p>
            <p> <Link to={'/term-and-condition'} className="Links inherit"> <span className='footerHoverColorChange'>Terms of Use</span></Link>  | <Link to={'/privacy-and-policy'} className='Links inherit'><span className='footerHoverColorChange'> Privacy Policy </span> </Link> | <span className='footerHoverColorChange'> Support </span></p> 
        </FooterCopyRightSection>
    </FooterContainer>
   </>
  )
}
