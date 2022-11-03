import styled from 'styled-components';


export const Container  = styled.div`
width: 100%;
min-height: 100vh;
background-color: #FFF0E5;
position: relative;
margin-top: 5px;

`
export const Wrapper  = styled.div`
width: 100%;
max-width: 99%;
min-height: 100vh;
display: grid;
grid-template-columns:1fr 5fr;

padding-top:10px;
@media only screen and (max-width:900px){
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;

};

`
// Filter

export const FilterOpenerContainer = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: center;

@media only screen and (min-width:900px) {
    display: none;
}
`
export const FilterOpener = styled.div`
width: 100%;
max-width: 70%;
height: 50px;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
font-weight: 600;
border-radius: 3px;
cursor: pointer;
`

export const FilterContainer  = styled.div`
width: 100%;
min-width: 200px;
max-height: fit-content;
min-height: 100px;
background-color: #FFF0E5;
border: 1px solid black;
padding-left: 20px;
@media only screen and (max-width:900px){
    width: 300px;
    max-height: 100%;
    overflow: auto;
    position:fixed ;
    z-index: 50;
    top: 0px;
    left: 0px;
    display: ${(props) => props.status =="show" ? "block" :"none" };

};


`
export const FilterWrapper  = styled.div`
padding: 10px;

`
export const FilterElement  = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:10px;
`
export const FilterH2  = styled.h2`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 600;
letter-spacing: 1px;
display: flex;
align-items: center;
justify-content: center;
`
export const FilterH5  = styled.h4`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 600;
letter-spacing: 1px;
color: black;
`
export const FilterSelect = styled.select`
width:100%;
max-width: 80%;
height:40px;
font-size:18px;
background: #FFF0E5;
border-radius: 0px;
cursor: pointer;
display: inline-block;
border: 1px solid black;
border-radius: 3px;
 
`
export const FilterOption = styled.option`
  background: #FFF0E5;
  color: gray;

&:checked{
    background: white
};


`
export const FilterInputRange = styled.input`
width: 100%;
max-width: 70%;
`
export const FilterInputRangeOutput = styled.span`
width: 100%;
max-width: 40px;
height: 20px;
/* border: 1px solid black; */
display: flex;
align-items: center;
justify-content: center;


`
export const FilterCustomInput = styled.input`
width: 100%;
max-width: 78%;
height: 30px;
border-radius: 5px;
border: 1px solid black;
`


// Card 

export const CardMainContainer = styled.div`

`

export const CardContainer  = styled.div`
width: 100%;
/* border: 2px solid black; */
min-height:100vh ;
display: flex;
flex-wrap: wrap;
gap: 40px;
justify-content: center;
/* align-items: center; */
padding-top: 20px;
padding-bottom: 20px;
`
