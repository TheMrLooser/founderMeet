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
                        <CardRelationshipTypes>FriendShip</CardRelationshipTypes>
                    </CardRelationshipTypeContainer>
                   </CardProfileNameContainer>
                    <CardProfileType>Basic</CardProfileType>
                </CardUpperSection>
                <CardLowerSection>
                    <CardLeftContainer>
                        <CardElementContaienr>
                            <CardElementKey>Age</CardElementKey>
                            <CardElementvalue>50</CardElementvalue>
                        </CardElementContaienr>
                    </CardLeftContainer>
                    <CardRightContainer></CardRightContainer>
                </CardLowerSection>
            </CardWrapper> 
        </CardContainer>
        
    </CardBaggroundContainer>
    </>)
}