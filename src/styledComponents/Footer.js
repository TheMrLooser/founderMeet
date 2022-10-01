import styled from 'styled-components';

export const FooterContainer = styled.footer`
width:100%;
min-height:40vh;
display:flex;
align-items:center;
justify-content:center;
background-color:#62D8B2;
padding-top:50px;
`
export const FooterWrapper = styled.div`
width:100%;
min-height:inherit;
display:flex;
align-items:center;
justify-content:center;
@media only screen and (max-width:700px){
    flex-direction:column;
}
`
export const FooterElementContainer = styled.div`
width:100%;
max-width:30%;
min-height:inherit;
display:flex;
flex-direction:column;
display:${(props)=>props.hide=='hide' ? "none":'block'};
@media only screen and (max-width:700px){
    max-width:80%;

}
`
export const FooterElement = styled.div`
width:100%;
max-width:80%;
min-width:fit-content;
display:flex;
${'' /* flex-direction:column; */}
align-items:center;
${'' /* justify-content:center; */}
border:3px solid black;
min-height:40px;
margin-top:20px;
background-color:#fbb02f;
gap:20px;
font-size:20px;

`
export const FooterElementIcon = styled.div`
width:100%;
max-width:50px;
display:flex;
${'' /* flex-direction:column; */}
align-items:center;
justify-content:center;
border-right:3px solid black;
min-height:inherit;
background-color:white;
`

export const FooterImg = styled.img`
width:100%;
max-width:100%;
display:${(props)=>props.hide=='hide' ? "none":'block'};
`

