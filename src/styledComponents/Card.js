import styled from "styled-components";

export const CardBaggroundContainer = styled.div`
 width:100%;
background-color:black;
border-radius:5px;
min-width: 500px;
max-width: fit-content;
min-height: 100px;
@media only screen and (max-width:580px){
min-width: 290px;
};
`
export const CardContainer = styled.div`
width: 100%;
max-width: inherit;
min-height: inherit;
max-height: fit-content;
border: 1px solid gray;
background-color: white;
border-radius: 3px;
padding: 15px;
transition: transform 0.5s;
&:hover{
transform: translate(10px, 10px);
}
@media only screen and (max-width:580px){
/* min-width: 400px; */
};
`
export const CardWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
position: relative;

`
export const CardUpperSection = styled.div`
width: 100%;
/* max-width: fit-content; */
display: flex;
/* border: 1px solid red; */
gap: 10px;
position: relative;
`

export const CardProfileImgSection = styled.div`
width: 100%;
max-width: 80px;
height: 80px;
border-radius: 50%;
position: relative;
@media only screen and (max-width:580px){
max-width:50px;
height: 50px;
};

/* border: 1px solid black; */
`
export const CardProfileImg = styled.img`
width: 100%;
height: 100%;
border-radius: 50%;
`
export const CardProfileNameContainer = styled.div`
width: 100%;
max-width: fit-content;
height: inherit;
/* border: 1px solid black; */
display: flex;
flex-direction: column;
justify-content: center;

`
export const CardProfileName = styled.div`
font-weight: 600;
font-size: 25px;
@media only screen and (max-width:580px){
    font-size: 18px;
};
`
export const CardRelationshipTypeContainer = styled.div`
width: 100%;
max-width: fit-content;
display: flex;
gap: 10px;

`
export const CardRelationshipTypes = styled.div`
width: 100%;
max-width: fit-content;
padding: 2px 10px;
border: 1px solid blue;
color: blue;
border-radius: 3px;
@media only screen and (max-width:580px){
    font-size: 10px;
};
`
export const CardProfileType = styled.div`
border: 1px solid black;
position: absolute;
right: 10px;
padding: 0px 10px;
background-color: black;
color: #FFC900;
border-radius: 3px;
`



export const CardLowerSection = styled.div`
display: grid;
grid-template-columns:1fr 1fr;
min-height: 100px;
max-height: fit-content;
@media only screen and (max-width:580px){
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     

};
`

export const CardLeftContainer = styled.div`
/* border: 1px solid red; */
display: flex;
flex-direction: column;
gap: 10px;
@media only screen and (max-width:580px){
    width: 100%;
    max-width: 80%;
     align-items: center;
     justify-content: center;
};

`
export const CardRightContainer = styled.div`

/* border: 1px solid red; */
display: flex;
flex-direction: column;
gap: 10px;
@media only screen and (max-width:580px){
    width: 100%;
    max-width: 80%;
     align-items: center;
     justify-content: center;
};
`

export const CardElementContaienr = styled.div`
width: 100%;
display: flex;
gap: 10px;

`
export const CardElementKey = styled.div`


`
export const CardElementvalue = styled.div`


`
export const CardSocialMediaIconContainer = styled.div`
width: 100%;
/* border: 1px solid gray; */
height: 40px;
display: flex;
align-items: center;
gap: 10px;
justify-content: end;
`
export const CardSocialMediaIcon = styled.img`
width: 25px;
height: 25px;
cursor: pointer;
`

