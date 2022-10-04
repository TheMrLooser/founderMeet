import React from 'react'
import { FooterContainer, FooterCopyRightSection, FooterElement, FooterElementContainer, FooterElementIcon, FooterImg, FooterWrapper } from '../styledComponents/Footer'
import { Banner_2_heading } from '../styledComponents/Landingpage'
import nobadWibesImg from '../images/nobadvibes.svg'
import footerSnapImg from '../images/footershapes.svg'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

export const Footer = () => {
  return (
   <>
    <FooterContainer>
        <FooterWrapper> 
            <FooterElementContainer >
                <h2 className='font'>Have  Question?</h2>
                <FooterElement> <FooterElementIcon><LocalPhoneIcon/></FooterElementIcon> 888888888888 </FooterElement>
                <FooterElement style={{backgroundColor:'#FF90E8'}}> <FooterElementIcon><EmailIcon/></FooterElementIcon> info@gmail.com </FooterElement>
            </FooterElementContainer>
            <FooterElementContainer hide={'hide'}>
                <FooterImg src={footerSnapImg}/>
            </FooterElementContainer>
            <FooterElementContainer>
                <FooterImg src={nobadWibesImg}/>
            </FooterElementContainer>
        </FooterWrapper>
        <FooterCopyRightSection>
            <p>Walt Disney World 1375 E Buena Vista Dr Orlando, Florida, United States</p> 
            <p>Copyright © 2022 NowYouDate. All Rights Reserved.</p>
            <p>Terms of Use | Privacy Policy | Support</p>
        </FooterCopyRightSection>
    </FooterContainer>
   </>
  )
}
