import React from 'react'
import {TopBannarLeftPartElement,TopBannarLeftPartElementWrapper, Container, TopBannarContainer, TopBannarImg, TopBannarLeftPartBTN, TopBannarLeftPartContainer, TopBannarLeftPartHeading, Wrapper, BtnContainer, SmilyImg, TopBannerImgContainer, Banner_2_container, Banner_2_heading, Banner_2_headingElement, Banner_2_ElementContainer, Banner_2_ElementWrapper, Banner_2_ElementImg, Banner_2_ElementText, MovingTextContainer, Banner_3_container, Banner_3_Wrapper, Banner_3_Maincontainer, Banner_3_Text, Banner_3_HandImg, Banner_3_StarImg, Banner_4_LeftContainer, Banner_4_RightContainer, Banner_4_Img, Banner_4_elements, Banner_4_elementWrapper, Banner_4_Arrow, Banner_4_ArrowSpan, FunStar, SunStar, TopBannarWrapper, ArrowImg, BannerHeadingContainer } from '../styledComponents/Landingpage'
import girls from '../images/girls.jpg';
import smily from '../images/smile.svg';
import dog from '../images/dog.png';
import star from '../images/star.svg'
import hand from '../images/hand.svg'
import cupal from '../images/cupal.png'
import funstar from '../images/star_fun.svg'
import arrow from '../images/arrows.svg'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Landingpage = () => {
  return (
     <>
        <Container>
            <Wrapper>
                <TopBannarWrapper>
                    <TopBannarContainer>
                        <TopBannarLeftPartContainer>
                            <TopBannarLeftPartHeading className='font'>Matchmaking portal for <div>Linkedin users</div> </TopBannarLeftPartHeading>
                            <BtnContainer><TopBannarLeftPartBTN>Let's Go <ArrowForwardIcon/></TopBannarLeftPartBTN></BtnContainer>
                            <TopBannarLeftPartElementWrapper>
                                <TopBannarLeftPartElement>10K+ Members</TopBannarLeftPartElement>
                                <TopBannarLeftPartElement>Smart Ai</TopBannarLeftPartElement>
                                <TopBannarLeftPartElement>Perfect Match</TopBannarLeftPartElement>
                            </TopBannarLeftPartElementWrapper>
                        </TopBannarLeftPartContainer>
                        <TopBannerImgContainer><TopBannarImg src={girls}/>
                            <SmilyImg src={smily}/>
                        </TopBannerImgContainer>
                    </TopBannarContainer>
                </TopBannarWrapper>
                
                <MovingTextContainer> <marquee style={{marginLeft: '20px', marginRight: '20px'}} behavior="scroll" scrollamount="12"> Now You Date &nbsp;• &nbsp;Now You Date &nbsp;• &nbsp;Now You Date &nbsp;• &nbsp;Now You Date &nbsp;• &nbsp;Now You Date &nbsp;• &nbsp;Now You Date &nbsp;• &nbsp;Now You Date &nbsp;• &nbsp;Now You Date  </marquee></MovingTextContainer>

                <Banner_2_container>
                    <Banner_2_heading className='font'> Find your perfect match </Banner_2_heading>
                    <Banner_2_heading className='font'>Friendship, Dating, & Matrimony.</Banner_2_heading>
                    <Banner_2_ElementContainer>
                        <Banner_2_ElementWrapper>
                            <Banner_2_ElementImg src={dog}/>
                            <Banner_2_ElementText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Banner_2_ElementText>
                        </Banner_2_ElementWrapper>
                        <Banner_2_ElementWrapper>
                            <Banner_2_ElementImg src={dog}/>
                            <Banner_2_ElementText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Banner_2_ElementText>
                        </Banner_2_ElementWrapper>
                        <Banner_2_ElementWrapper>
                            <Banner_2_ElementImg src={dog}/>
                            <Banner_2_ElementText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Banner_2_ElementText>
                        </Banner_2_ElementWrapper>
                    </Banner_2_ElementContainer>

                </Banner_2_container>

                <Banner_3_Maincontainer> 
                    <Banner_3_container>
                        <Banner_3_Wrapper>
                            
                            <Banner_3_Text><Banner_2_heading className='font'>Find that Groovy Kind of Love</Banner_2_heading>Friends are great, but love is better! Waiting for a sign to get yourself out there? Here it is! Now, it’s your turn to find someone to groove with.</Banner_3_Text>
                        </Banner_3_Wrapper>
                        <Banner_3_HandImg src={hand}/>
                        <Banner_3_StarImg src={star}/>
                    </Banner_3_container>
                </Banner_3_Maincontainer> 
    
                {/* Banner 4 */}
                <Banner_3_Maincontainer>
                    <Banner_4_LeftContainer>
                        <Banner_4_Img src={cupal}/>
                    </Banner_4_LeftContainer>
                    <Banner_4_RightContainer>
                        <BannerHeadingContainer><Banner_2_heading className='font' style={{fontSize:'70px',textAlign:'left'}}> Get Dates, <br/> Get Benefits</Banner_2_heading></BannerHeadingContainer>
                        <Banner_2_ElementText style={{fontSize:'30px',marginTop:'20px'}}> It's not just online dating, it's <br/>online dating with benefits
                            <Banner_4_elementWrapper>
                                <Banner_4_elements><ArrowForwardIcon/> Verified users</Banner_4_elements>
                                <Banner_4_elements><ArrowForwardIcon/> Chat, Message and Flirt options</Banner_4_elements>
                                <Banner_4_elements><ArrowForwardIcon/> Dynamic Profile Filtering</Banner_4_elements>
                                <Banner_4_elements><ArrowForwardIcon/> Thousands of members</Banner_4_elements>
                            </Banner_4_elementWrapper>
                        </Banner_2_ElementText>
                        <Banner_4_Arrow>
                            <ArrowImg src={arrow}/>
                           
                        </Banner_4_Arrow>
                    </Banner_4_RightContainer>
                </Banner_3_Maincontainer>

                {/* Banner 5 */}
                <Banner_3_Maincontainer style={{width:'100%',flexDirection:'column',gap:'50px',backgroundColor:'#f4b9a3',padding:'50px 0px'}}>
                        
                        <Banner_2_heading className='font'>WE ARE THE FASTEST <br/> GROWING DATING APP!</Banner_2_heading>
                         <Banner_4_elementWrapper bannarNO={5}>
                            <Banner_2_ElementWrapper style={{border:'none'}}>
                                <Banner_2_ElementImg src={dog}/>
                                <h3>15 Million+ <br/> Meme Swipes</h3>
                            </Banner_2_ElementWrapper>
                            <Banner_2_ElementWrapper style={{border:'none'}}>
                                <Banner_2_ElementImg src={dog}/>
                                <h3>500K+ <br/> Matches Made</h3>
                            </Banner_2_ElementWrapper>
                            <Banner_2_ElementWrapper style={{border:'none'}}>
                                <Banner_2_ElementImg src={dog}/>
                                <h3>150+ Universities <br/> Meme Swipes</h3>
                            </Banner_2_ElementWrapper>
                         </Banner_4_elementWrapper>
                </Banner_3_Maincontainer>


                {/* bannar 6 */}
                <Banner_3_Maincontainer style={{width:'100%',flexDirection:'column',gap:'50px',backgroundColor:'#62d8b2',padding:'50px 0px',alignItems:'center',justifyContent:'center'}}>

                    <Banner_2_heading className='font'>CAREERS</Banner_2_heading>
                    <div>Intrested in joining us ?<br/> Take a look at the open position</div>

                    <BtnContainer><TopBannarLeftPartBTN>View position</TopBannarLeftPartBTN></BtnContainer>

                </Banner_3_Maincontainer>

                {/* bannar 7 */}
                <Banner_3_Maincontainer style={{width:'100%',flexDirection:'column',gap:'50px',backgroundColor:'#ff7051',padding:'50px 0px',alignItems:'center',justifyContent:'center'}}>

                    <Banner_2_heading className='font'>Join the chase, join the fun! <br/>Get out there!</Banner_2_heading>
                    <BtnContainer style={{maxWidth:'300px'}}><TopBannarLeftPartBTN style={{maxWidth:'350px'}}>FIND YOUR DATE NOW</TopBannarLeftPartBTN></BtnContainer>
                    <FunStar src={funstar}/>
                    <SunStar src={star}/>
                </Banner_3_Maincontainer>

                <MovingTextContainer> <marquee style={{marginLeft: '20px', marginRight: '20px'}} behavior="scroll" scrollamount="12"> Join Now  •  Make it Happen    &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen   </marquee></MovingTextContainer>

                 

            </Wrapper>
        </Container>
     </>
  )
}
