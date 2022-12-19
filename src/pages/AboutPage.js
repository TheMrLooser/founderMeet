import React from "react";
import { ComponentWrapper, Container, DetailElement, DetailWrapper, FormContainer, FormTitle, HeadingTitleContainer, HeadingTitleImg, Img, ImgContainer, LeftPart, LeftPartTaglineContainer, LeftPartTagLineHeading, LeftPartTagLinePara, LowerPart, LowerPartFormWrapper, OrContainer, OrLeft, OrRigth, OrWrapper, ProfileBasicDetailContainer, RightPart, UpperPart, Wrapper } from "../styledComponents/Profile";
import logo from '../images/logo.svg'

import snale from '../images/snaleImg.svg'
import { BtnContainer, MovingTextContainer, TopBannarLeftPartBTN } from "../styledComponents/Landingpage";
 


const AboutPage = ()=>{
    return (<>
         
        <Container>
         
            <Wrapper>
                <LeftPart>
                    <UpperPart>
                        <HeadingTitleContainer><HeadingTitleImg src={logo}/></HeadingTitleContainer>
                    </UpperPart>
                    <LowerPart>
                        <LeftPartTaglineContainer>
                            <LeftPartTagLineHeading>About Us!</LeftPartTagLineHeading>
                            <LeftPartTagLinePara><br/>Know more about <br/> Matchmaking24.com</LeftPartTagLinePara>
                        </LeftPartTaglineContainer>
                        <FormContainer>

                        </FormContainer>
                     </LowerPart>
                </LeftPart>
                <RightPart>
                    <ImgContainer>
                        <Img src={snale}/>
                    </ImgContainer>
                </RightPart>
            </Wrapper>
            <MovingTextContainer> <marquee style={{marginLeft: '20px', marginRight: '20px'}} behavior="scroll" scrollamount="12"> Join Now  •  Make it Happen    &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen   </marquee></MovingTextContainer>
         
        </Container>
    </>)
}

export default AboutPage