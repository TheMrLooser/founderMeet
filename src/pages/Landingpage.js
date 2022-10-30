import React from 'react'
import {TopBannarLeftPartElement,TopBannarLeftPartElementWrapper, Container, TopBannarContainer, TopBannarImg, TopBannarLeftPartBTN, TopBannarLeftPartContainer, TopBannarLeftPartHeading, Wrapper, BtnContainer, SmilyImg, TopBannerImgContainer, Banner_2_container, Banner_2_heading, Banner_2_headingElement, Banner_2_ElementContainer, Banner_2_ElementWrapper, Banner_2_ElementImg, Banner_2_ElementText, MovingTextContainer, Banner_3_container, Banner_3_Wrapper, Banner_3_Maincontainer, Banner_3_Text, Banner_3_HandImg, Banner_3_StarImg, Banner_4_LeftContainer, Banner_4_RightContainer, Banner_4_Img, Banner_4_elements, Banner_4_elementWrapper, Banner_4_Arrow, Banner_4_ArrowSpan, FunStar, SunStar, TopBannarWrapper, ArrowImg, BannerHeadingContainer } from '../styledComponents/Landingpage'
import topImg from '../images/MEET.jpg';
import smily from '../images/smile.svg';
import frndImg5 from '../images/5.svg';
import frndImg4 from '../images/4.svg';
import frndImg3 from '../images/3.svg';

import img01 from '../images/01.svg'
import img02 from '../images/02.svg'
import img003 from '../images/003.svg'

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
                            <TopBannarLeftPartHeading className='font'>MatchMaking portal for <br/>Linkedin users  </TopBannarLeftPartHeading>
                            <BtnContainer><TopBannarLeftPartBTN>Let's Go <ArrowForwardIcon/></TopBannarLeftPartBTN></BtnContainer>
                            <TopBannarLeftPartElementWrapper>
                                <TopBannarLeftPartElement>10K+ Members</TopBannarLeftPartElement>
                                <TopBannarLeftPartElement>Smart Ai</TopBannarLeftPartElement>
                                <TopBannarLeftPartElement>Perfect Match</TopBannarLeftPartElement>
                            </TopBannarLeftPartElementWrapper>
                        </TopBannarLeftPartContainer>
                        <TopBannerImgContainer><TopBannarImg src={topImg}/>
                            <SmilyImg src={smily}/>
                        </TopBannerImgContainer>
                    </TopBannarContainer>
                </TopBannarWrapper>
                
                <MovingTextContainer> <marquee style={{marginLeft: '20px', marginRight: '20px'}} behavior="scroll" scrollamount="12"> Friendship Match &nbsp;• &nbsp;Dating Match &nbsp;• &nbsp;Matrimony Match &nbsp;• &nbsp; Friendship Match &nbsp;• &nbsp;Dating Match &nbsp;• &nbsp;Matrimony Match • &nbsp;Friendship Match &nbsp;• &nbsp;Dating Match &nbsp;• &nbsp;Matrimony Match • &nbsp;Friendship Match &nbsp;• &nbsp;Dating Match &nbsp;• &nbsp;Matrimony Match • &nbsp;Friendship Match &nbsp;• &nbsp;Dating Match &nbsp;• &nbsp;Matrimony Match • &nbsp;Friendship Match &nbsp;• &nbsp;Dating Match &nbsp;• &nbsp;Matrimony Match &nbsp;</marquee></MovingTextContainer>

                <Banner_2_container>
                    <Banner_2_heading className='font'> Find your perfect match </Banner_2_heading>
                    <Banner_2_heading className='font'>Friendship, Dating, & Matrimony.</Banner_2_heading>
                    <Banner_2_ElementContainer>
                        <Banner_2_ElementWrapper>
                            <Banner_2_ElementImg src={frndImg5}/>
                            <div className='align-Center'>
                                <h2>Friendship</h2>
                                <Banner_2_ElementText>
                                    Whether you’re new to a city or looking to expand your social circle, here we simplified ways to create meaningful friendships. Friendship is not all about you connect them on social media, be Bro or Buddy to each other, go out for some activity, create memories, exchange vibes.
                                </Banner_2_ElementText>
                            </div>
                        </Banner_2_ElementWrapper>
                        <Banner_2_ElementWrapper>
                            <Banner_2_ElementImg src={frndImg4}/>
                            <div className='align-Center'>
                                <h2>Dating</h2>
                                <Banner_2_ElementText>
                                    Various online dating apps focus on quick dates with lesser digital satisfaction, and incidents of harassment and sexual misconduct. Although we known to be for transparency. Because there is more to life than just swiping. If dates goes wrong, at worst be a good friend.
                                </Banner_2_ElementText>
                            </div>
                        </Banner_2_ElementWrapper>
                        <Banner_2_ElementWrapper>
                            <Banner_2_ElementImg src={frndImg3}/>
                            <div className='align-Center'>
                                <h2>Matrimony</h2>
                                <Banner_2_ElementText>
                                    From getting awkward on the matrimonial sites to fear of rejection to self-doubt. This is where most people ended up with. Although we make education and professionalism our primary factor to match you with right person. Although we providing digital transparency.
                                </Banner_2_ElementText>
                            </div>
                        </Banner_2_ElementWrapper>
                    </Banner_2_ElementContainer>

                </Banner_2_container>

                <Banner_3_Maincontainer > 
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
                        <div className='Banner4-wd550'>
                        <BannerHeadingContainer><Banner_2_heading className='font' style={{fontSize:'70px',textAlign:'left', justifyContent:'flex-start'}}> Why to  <br/> Choose Us?</Banner_2_heading></BannerHeadingContainer>
                        <Banner_2_ElementText style={{fontSize:'30px',marginTop:'20px'}}> It's not just online dating, it's <br/>online dating with benefits
                            <Banner_4_elementWrapper>
                                <Banner_4_elements><ArrowForwardIcon/> Verified users</Banner_4_elements>
                                <Banner_4_elements><ArrowForwardIcon/> Chat, Message and Flirt options</Banner_4_elements>
                                <Banner_4_elements><ArrowForwardIcon/> Dynamic Profile Filtering</Banner_4_elements>
                                <Banner_4_elements><ArrowForwardIcon/> Thousands of members</Banner_4_elements>
                            </Banner_4_elementWrapper>
                        </Banner_2_ElementText>
                        </div>
                        <Banner_4_Arrow>
                            <ArrowImg src={arrow}/>
                           
                        </Banner_4_Arrow> 
                    </Banner_4_RightContainer>
                </Banner_3_Maincontainer>

                {/* Banner 5 */}
                <Banner_3_Maincontainer style={{width:'100%',flexDirection:'column',gap:'50px',backgroundColor:'#f4b9a3',padding:'100px 0px'}}>
                        
                        <Banner_2_heading className='font'> WHY WE ARE THE FASTEST <br/> GROWING MATCHMAKING APP?</Banner_2_heading>
                         <Banner_4_elementWrapper bannarNO={5}>
                            <Banner_2_ElementWrapper style={{border:'none'}}>
                                <Banner_2_ElementImg src={img01}  style={{height:'80%' ,width:'80%'}}/>
                                <h2 style={{textAlign:'center'}}>Verified <br/> from LinkedIn</h2>
                            </Banner_2_ElementWrapper>
                            <Banner_2_ElementWrapper style={{border:'none'}}>
                                <Banner_2_ElementImg src={img02}  style={{height:'80%' ,width:'80%'}}/>
                                <h2 style={{textAlign:'center'}}>Professional  <br/>Transparency</h2>
                            </Banner_2_ElementWrapper>
                            <Banner_2_ElementWrapper style={{border:'none'}} >
                                <Banner_2_ElementImg src={img003}  style={{height:'80%' ,width:'80%'}}/>
                                <h2 style={{textAlign:'center'}}>Globally  <br/>Accessible</h2>
                            </Banner_2_ElementWrapper>
                         </Banner_4_elementWrapper>
                </Banner_3_Maincontainer>


                {/* bannar 6 */} 
                <Banner_3_Maincontainer style={{width:'100%',flexDirection:'column',gap:'50px',backgroundColor:'#62d8b2',padding:'50px 0px',alignItems:'center',justifyContent:'center'}}>

                    <Banner_2_heading className='font'>CAREERS</Banner_2_heading>
                    <Banner_2_ElementText>Intrested in joining us ?<br/> Take a look at the open position</Banner_2_ElementText>

                    <BtnContainer><TopBannarLeftPartBTN>View position</TopBannarLeftPartBTN></BtnContainer>

                </Banner_3_Maincontainer>

                {/* bannar 7 */}
                <Banner_3_Maincontainer style={{width:'100%',flexDirection:'column',gap:'50px',backgroundColor:'#ff7051',padding:'50px 0px',alignItems:'center',justifyContent:'center',}}>

                    <Banner_2_heading className='font'>Join the chase, join the fun! <br/>Get out there!</Banner_2_heading>
                    <BtnContainer style={{maxWidth:'300px'}}><TopBannarLeftPartBTN style={{maxWidth:'350px'}}>FIND YOUR MATCH NOW</TopBannarLeftPartBTN></BtnContainer>
                    <FunStar src={funstar}/>
                    <SunStar src={star}/>
                </Banner_3_Maincontainer>

                <MovingTextContainer> <marquee style={{marginLeft: '20px', marginRight: '20px'}} behavior="scroll" scrollamount="12"> Join Now  •  Make it Happen    &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen   </marquee></MovingTextContainer>

                 

            </Wrapper>
        </Container>
     </>
  )
}
