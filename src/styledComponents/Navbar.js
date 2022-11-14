import styled from 'styled-components';

export const NavContainer = styled.div`
width:100%;
max-width:100%;
display:flex;
align-items:center;
justify-content:space-between;
height:60px;
`
export const NavWrapper = styled.div`
width:100%;
max-width:100%;
display:flex;
align-items:center;
justify-content:space-between;
box-shadow:5px 5px 5px #d7d7d7;
margin-top:5px;
height:inherit;
background-color:#FFC900;


`
export const LogoContainer = styled.div`
width:100%;
max-width:fit-content;
display:flex;
align-items:center;
gap:5px;
border:2px solid black;
border-left: none;
height:inherit;
background-color:#FFC900;
padding:0px 10px;

@media only screen and (max-width:500px){
    max-width:100px;
}
`
export const LogoImg = styled.img`

@media only screen and (max-width:500px){
    width:100%;
height:80%;
}
`
export const LogoText = styled.span`

`
export const NavElementWrapper = styled.span`
width:100%;
max-width:95%;
display:flex;
align-items:center;
border-top:2px solid black;
border-bottom:2px solid black;
${'' /* gap:20px; */}
justify-content:flex-end;
${'' /* padding:0px 20px; */}
background-color:#FFC900;
height:inherit;


`
export const NavElement = styled.span`
width:100%;
max-width:fit-content;
padding:0px 5%;
cursor:pointer;
height:inherit;
border:2px solid black;
border-right:none;
display:flex;
align-items:center;
justify-content:center;
&:hover{  
    background-color: #FF90E8
}
@media only screen and (max-width:500px){
    display:${(props)=>props.display!='block'&&'none'};
    border:none;
    margin-right:15px;

}
`