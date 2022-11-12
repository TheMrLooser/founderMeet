import React from "react";
import { CardBaggroundContainer, CardContainer, CardElementContaienr, CardElementKey, CardElementvalue, CardLeftContainer, CardLowerSection, CardProfileImg, CardProfileImgSection, CardProfileName, CardProfileNameContainer, CardProfileType, CardRelationshipTypeContainer, CardRelationshipTypes, CardRightContainer, CardSocialMediaIcon, CardSocialMediaIconContainer, CardSocialMediaIconWrapper, CardUpperSection, CardWrapper } from "../styledComponents/Card";
import instagramIcon from '../images/instagram black.png';
import TelegramIcon from '../images/telegramblack.png';
import maleIcon from '../images/mail.png';
import TweetIcon from '../images/tweet.png';




export const Cards = ()=>{
    return(<>
    <CardBaggroundContainer>
        <CardContainer>
            <CardWrapper>
                <CardUpperSection>
                    <CardProfileImgSection>
                        <CardProfileImg src="https://tse4.mm.bing.net/th?id=OIP.Qz_6_xtigETpBhXMP76jlgHaH5&pid=Api&P=0"/>
                    </CardProfileImgSection>
                    <CardProfileNameContainer>
                        <CardProfileName><div>Ankush Kumar </div> <CardProfileType>Basic</CardProfileType></CardProfileName>
                        <CardRelationshipTypeContainer>
                            {/* <div style={{fontSize:'16px'}}>Looking for : </div> */}
                            <CardRelationshipTypes>Friendship</CardRelationshipTypes>
                            <CardRelationshipTypes>Dating</CardRelationshipTypes>
                            <CardRelationshipTypes>Matrimony</CardRelationshipTypes>
                        </CardRelationshipTypeContainer>
                    </CardProfileNameContainer>
                    
                </CardUpperSection>



                <CardLowerSection>
                    <CardLeftContainer>
                        <CardElementContaienr>
                            <CardElementKey>Age : </CardElementKey>
                            <CardElementvalue>50</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>From : </CardElementKey>
                            <CardElementvalue>Noida, India</CardElementvalue>
                        </CardElementContaienr>
                        
                        <CardElementContaienr>
                            <CardElementKey>Language : </CardElementKey>
                            <CardElementvalue>Hindi, English</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Industry : </CardElementKey>
                            <CardElementvalue>IT Sector</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Company : </CardElementKey>
                            <CardElementvalue>Hendru Pvt. ltd.</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Current : </CardElementKey>
                            <CardElementvalue>Noida, India</CardElementvalue>
                        </CardElementContaienr>
                        
                    </CardLeftContainer>


                    <CardRightContainer>
                        
                        <CardElementContaienr>
                            <CardElementKey>Gender : </CardElementKey>
                            <CardElementvalue>Male</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Education : </CardElementKey>
                            <CardElementvalue>Graduate</CardElementvalue>
                             
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Field of Study : B.tech </CardElementKey>
                            {/* <CardElementvalue>R.K morder</CardElementvalue> */}
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>School  : R.K morder </CardElementKey>
                            {/* <CardElementvalue>R.K morder</CardElementvalue> */}
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>College  : Avviar Education hub </CardElementKey>
                            {/* <CardElementvalue>Avviar Education hub</CardElementvalue> */}
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardSocialMediaIconWrapper>
                                Connect on : 
                                    <CardSocialMediaIcon src={TelegramIcon}/>
                                    <CardSocialMediaIcon src={maleIcon}/>
                                    <CardSocialMediaIcon src={TweetIcon}/>
                                    <CardSocialMediaIcon src={instagramIcon}/>
                            </CardSocialMediaIconWrapper>
                        </CardElementContaienr>
                        
                    </CardRightContainer>
                    
                </CardLowerSection>
                {/* <CardSocialMediaIconContainer>
                    <div>
                    <CardElementContaienr>
                        <CardElementKey>Current : </CardElementKey>
                        <CardElementvalue>Noida, India</CardElementvalue>
                    </CardElementContaienr>
                    </div>
                   <CardSocialMediaIconWrapper>
                   Connect on : 
                    <CardSocialMediaIcon src={TelegramIcon}/>
                    <CardSocialMediaIcon src={maleIcon}/>
                    <CardSocialMediaIcon src={TweetIcon}/>
                    <CardSocialMediaIcon src={instagramIcon}/>
                   </CardSocialMediaIconWrapper>
                </CardSocialMediaIconContainer> */}
            </CardWrapper>
        </CardContainer>
    </CardBaggroundContainer>
    </>)
}