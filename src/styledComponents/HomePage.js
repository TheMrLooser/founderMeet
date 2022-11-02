import styled from 'styled-components';


export const Container  = styled.div`
width: 100%;
min-height: 100vh;
background-color: #FFF0E5;

`
export const Wrapper  = styled.div`
width: 100%;
max-width: 99%;
min-height: 100vh;
display: grid;
grid-template-columns:1fr 5fr;

padding-top:10px;
`
// Filter
export const FilterContainer  = styled.div`
width: 100%;
max-width: 300px;
max-height: fit-content;
min-height: 100px;
/* border: 1px solid black; */
background-color: transparent;


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

`
export const FilterH5  = styled.h4`

`
export const FilterSelect = styled.select`
width:100%;
max-width: 80%;
height:40px;
font-size:18px;
border: none;
background: #FFF0E5;
border-radius: 0px;
cursor: pointer;
display: inline-block;
 
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
export const CardContainer  = styled.div`
width: 100%;
/* border: 2px solid black; */
min-height:100vh ;
display: flex;
flex-wrap: wrap;
gap: 40px;
justify-content: center;
padding-top: 20px;
padding-bottom: 20px;
`
