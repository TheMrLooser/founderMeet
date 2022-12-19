import React from "react";
import { CardBaggroundContainer, CardContainer, CardElementContaienr, CardElementKey, CardElementvalue, CardLeftContainer, CardLowerSection, CardProfileImg, CardProfileImgSection, CardProfileName, CardProfileNameContainer, CardProfileType, CardRelationshipTypeContainer, CardRelationshipTypes, CardRightContainer, CardSocialMediaIcon, CardSocialMediaIconContainer, CardSocialMediaIconWrapper, CardUpperSection, CardWrapper } from "../styledComponents/Card";
import instagramIcon from '../images/instagram black.png';
import TelegramIcon from '../images/telegramblack.png';
import maleIcon from '../images/mail.png';
import TweetIcon from '../images/tweet.png';
import clandlyImg from '../images/clandelyLogo.png'
import {Link} from 'react-router-dom'

 

export const Cards = ({user})=>{
    return(<>
    <CardBaggroundContainer>
        <CardContainer>
           <CardWrapper>
                <CardUpperSection>
                    <CardProfileImgSection><CardProfileImg src={user.img}/></CardProfileImgSection>
                   <CardProfileNameContainer>
                    <CardProfileName>{user.name}</CardProfileName>
                    <CardRelationshipTypeContainer>
                        {
                            user.lokingFor.map((item,index)=>{
                            return <CardRelationshipTypes>{item}</CardRelationshipTypes>
                            })
                        } 
                    </CardRelationshipTypeContainer>
                   </CardProfileNameContainer>
                    <CardProfileType>{user.profileType}</CardProfileType>
                </CardUpperSection>
                <CardLowerSection>
                    <CardLeftContainer>
                        <CardElementContaienr>
                            <CardElementKey>Age :</CardElementKey>
                            <CardElementvalue>{user.age}</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Location :</CardElementKey>
                            <CardElementvalue>{user.city},{user.country}</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Language :</CardElementKey>
                            <CardElementvalue>
                                {
                                   user.language.map((item,index)=>{
                                    return <p key={index} style={{fontSize:'14px',marginTop:'2px'}} >{item}</p>
                                   })
                                }
                            </CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Industry :</CardElementKey>
                            <CardElementvalue>{user.industry}</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Company :</CardElementKey>
                            <CardElementvalue>{user.companyName}</CardElementvalue>
                        </CardElementContaienr>
                    </CardLeftContainer>
                    <CardRightContainer>
                    <CardElementContaienr>
                            <CardElementKey>Gender :</CardElementKey>
                            <CardElementvalue>{user.gender}</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Field of Study :</CardElementKey>
                            <CardElementvalue>{user.fieldOfStudy}</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Higher Education :</CardElementKey>
                            <CardElementvalue>{user.higherQualification}</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Inst 1 :</CardElementKey>
                            <CardElementvalue>{user.schoolName}</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardElementKey>Inst 2 :</CardElementKey>
                            <CardElementvalue>{user.collageName}</CardElementvalue>
                        </CardElementContaienr>
                        <CardElementContaienr>
                            <CardSocialMediaIconWrapper>
                                Connect on : 
                                    <a href={user.telegram} target={"_blank"}><CardSocialMediaIcon src={TelegramIcon}/></a>
                                    <a href={`mailto:${user.email}?`}><CardSocialMediaIcon src={maleIcon}/></a>
                                    <a href={user.twiter} target={"_blank"}><CardSocialMediaIcon src={TweetIcon}/></a>
                                    <a href={user.instagram} target={"_blank"}><CardSocialMediaIcon src={instagramIcon}/></a>
                                    <a href={"https://calendly.com/"} target={"_blank"}><CardSocialMediaIcon  src={clandlyImg}/></a>
                            </CardSocialMediaIconWrapper>
                        </CardElementContaienr>
                    </CardRightContainer>
                </CardLowerSection>
            </CardWrapper> 
        </CardContainer>
        
    </CardBaggroundContainer>
    </>)
}