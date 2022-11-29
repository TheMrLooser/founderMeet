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
                    <CardProfileImgSection><CardProfileImg src="https://tse4.mm.bing.net/th?id=OIP.Qz_6_xtigETpBhXMP76jlgHaH5&pid=Api&P=0"/></CardProfileImgSection>
                   <CardProfileNameContainer>
                    <CardProfileName>Rahul Kumar</CardProfileName>
                    <CardRelationshipTypeContainer>
                        <CardRelationshipTypes>Dating</CardRelationshipTypes>
                        <CardRelationshipTypes>Matrimonial</CardRelationshipTypes>
                        <CardRelationshipTypes>Friendship</CardRelationshipTypes>
                    </CardRelationshipTypeContainer>
                   </CardProfileNameContainer>
                    <CardProfileType>Basic</CardProfileType>
                </CardUpperSection>
                <CardLowerSection>
                    <CardLeftContainer>
                        <CardElementContaienr>
                            <CardElementKey>Age :</CardElementKey>
                            <CardElementvalue>50</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Location :</CardElementKey>
                            <CardElementvalue>City,Country</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Language :</CardElementKey>
                            <CardElementvalue>Hindi, English</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Industry :</CardElementKey>
                            <CardElementvalue>It Sector</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Company :</CardElementKey>
                            <CardElementvalue>Matchmaking24.com</CardElementvalue>
                        </CardElementContaienr>
                    </CardLeftContainer>
                    <CardRightContainer>
                    <CardElementContaienr>
                            <CardElementKey>Gender :</CardElementKey>
                            <CardElementvalue>50</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Field of Study :</CardElementKey>
                            <CardElementvalue>Medical</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Higher Education :</CardElementKey>
                            <CardElementvalue>Graduation</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Inst 1 :</CardElementKey>
                            <CardElementvalue> Rk modern public school sector noida</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Inst 2 :</CardElementKey>
                            <CardElementvalue> Avviar education hub sec 64</CardElementvalue>
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
            </CardWrapper> 
        </CardContainer>
        
    </CardBaggroundContainer>
    </>)
}