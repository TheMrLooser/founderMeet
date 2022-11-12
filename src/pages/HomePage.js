import React, { useState } from "react";
import { Cards } from "../componets/Card";
import { CardContainer, CardMainContainer, Container, FilterContainer, FilterCustomInput, FilterElement, FilterH2, FilterH5, FilterInputRange, FilterInputRangeOutput, FilterOpener, FilterOpenerContainer, FilterOption, FilterSelect, FilterWrapper, PrettoSlider, Title, TopBannerContainer, Wrapper } from "../styledComponents/HomePage";
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

 export const HomePage = ()=>{

    const IndustryList = [
        "Aerospace industry",
        "Agricultural industry ",
        "Automotive industry",
        "Basic metal industry ",
        "Chemical industry ",
        "Computer industry",
        "Construction industry ",
        "Creative industry ",
        "Cultural industry",
        "Defense industry",
        "Education industry",
        "Electric power industry",
        "Electronics industry",
        "Energy industry",
        "Engineering industry ",
        "Entertainment industry",
        "Farming industry",
        "Fashion industry",
        "Film industry",
        "Financial services industry",
        "Fishing industry",
        "Food industry",
        "Forestry industry",
        "Gambling industry",
        "Gas industry",
        "Green industry",
        "Health services industry ",
        "Hospitality industry",
        "Hotels industry",
        "Industrial robot industry",
        "Information industry",
        "Information technology industry",
        "Infrastructure industry",
        "Insurance industry ",
        "Leisure industry",
        "Low technology industry",
        "Manufacturing industry",
        "Meat industry",
        "Media industry",
        "Merchandising industry",
        "Mining industry ",
        "Music industry",
        "News media industry ",
        "Oil and gas industry",
        "Pharmaceutical industry",
        "Professional industry",
        "Publishing industry",
        "Pulp and paper industry",
        "Railway industry ",
        "Real estate industry ",
        "Retail industry ",
        "Scientific industry",
        "Services industry",
        "Sex industry",
        "Software industry",
        "Space industry",
        "Sport industry",
        "Steel industry",
        "Technology industry",
        "Telecommunications industry",
        "Textile industry",
        "Tobacco industry",
        "Transport industry",
        "Utility industry ",
        "Video game industry",
        "Water industry",
        "Wholesale industry",
        "Wood industry",
    ]


    const FieldOfStudyList = ["Medicine",'Engineering','Aarchitecture','Science','Business','Humanitiese & Arts' ,'Hotel Management','Management','Fashion','Law','Design','Psychology','Finance','Other']

    
    const [showFilter,setShowFilter] = useState(null)
    const ShowFilter = (hide)=>{
        setShowFilter("show")
        if(hide=="hide"){setShowFilter(hide)}
    } 
    
    // range Slider
    function valuetext(value) {
        return `${value}°C`;
      }
    const [value, setValue] = React.useState([20, 37]);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
   
   
   // check box 

   const [checked, setChecked] = React.useState([true, false]);

 
   const handleChange2 = (event) => {
     setChecked([event.target.checked, checked[1]]);
   };
 
   const handleChange3 = (event) => {
     setChecked([checked[0], event.target.checked]);
   };
 
   
    // Pagination
    const [page, setPage] = React.useState(1);
    const handlePageChange = (event, value) => {
        setPage(value);
        console.log(page)
    };


    return(<>
        <Container>
            <Wrapper>

                <FilterContainer status = {showFilter}>
                    <FilterWrapper>
                       {(showFilter !="hide" && showFilter !=null ) ? <div onClick={()=>ShowFilter("hide")}> <CloseIcon /></div> : null}
                        <FilterH2>Filter </FilterH2>
                        <FilterH5>Members : </FilterH5>    

                        <FilterElement>
                            <FilterSelect>
                                <FilterOption selected disabled>Gender</FilterOption>
                                <FilterOption className="Option">Male</FilterOption>
                                <FilterOption className="Option">Female</FilterOption>
                            </FilterSelect>
                            <FilterSelect>
                                <FilterOption selected disabled>Loking For</FilterOption>
                                <FilterOption>FriendShip</FilterOption>
                                <FilterOption>Dating</FilterOption>
                                <FilterOption>Matrimonial</FilterOption>
                            </FilterSelect>
                            <FilterSelect>
                                <FilterOption selected disabled>Membership Type</FilterOption>
                                <FilterOption>Basic</FilterOption>
                                <FilterOption>Standard</FilterOption>
                                <FilterOption>Premium</FilterOption>
                            </FilterSelect>
                        </FilterElement> 

                        <FilterH5>Location : </FilterH5> 
                        <FilterElement>
                            <FilterSelect>
                                <FilterOption selected disabled>Country From</FilterOption>
                                <FilterOption></FilterOption>
                            </FilterSelect>
                            <FilterSelect>
                                <FilterOption selected disabled>City From</FilterOption>
                                <FilterOption></FilterOption>
                            </FilterSelect>
                            <FilterSelect>
                                <FilterOption selected disabled>Country Current</FilterOption>
                                <FilterOption></FilterOption>
                            </FilterSelect>
                            <FilterSelect>
                                <FilterOption selected disabled>City Current</FilterOption>
                                <FilterOption></FilterOption>
                            </FilterSelect>
                        </FilterElement>    
                                
                    

                    <FilterH5>Age : </FilterH5> 
                    <FilterElement>
                        <Box sx={{ width:'150px' }}> 
                        <PrettoSlider 
                            valueLabelDisplay="auto"
                            aria-label="pretto slider"
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            getAriaValueText={valuetext}
                            max={50}
                            min={18}
                            sx={{color:'black'}}
                        />
                        </Box> 
                    </FilterElement>

                    <FilterH5>Language : </FilterH5> 
                    <FilterElement>
                        {/* <FilterSelect>
                              <FilterOption selected disabled>  Language</FilterOption>
                            <FilterOption>Hindi</FilterOption>
                            <FilterOption>English</FilterOption>  
                            </FilterSelect> */}
                        
                            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                                <FormControlLabel
                                    label="Hindi"
                                    control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
                                />
                                <FormControlLabel
                                    label="English"
                                    control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                                />
                            </Box>
                        </FilterElement>

                    <FilterH5>Qualification : </FilterH5> 
                    <FilterElement>
                        <FilterSelect>
                            <FilterOption selected disabled>Highest Qualification</FilterOption>
                            <FilterOption>Bachelors</FilterOption>
                            <FilterOption>Masters</FilterOption>
                            <FilterOption>PHD</FilterOption>
                            <FilterOption>Post Doc</FilterOption>
                            <FilterOption>Other</FilterOption>
                        </FilterSelect>
                        <FilterSelect>
                            <FilterOption selected disabled>Field of Study</FilterOption>
                            {FieldOfStudyList.map((field,index)=><FilterOption key={index}>{field}</FilterOption>)}

                        </FilterSelect>
                        <FilterCustomInput placeholder="Enter College Name"/>
                        <FilterCustomInput placeholder="Enter School Name"/>

                    </FilterElement>

                    <FilterH5>Professionalism : </FilterH5> 
                    <FilterElement>
                        <FilterSelect>
                            <FilterOption selected disabled>Industry</FilterOption>
                            {IndustryList.map((field,index)=><FilterOption key={index}>{field}</FilterOption>)}

                        </FilterSelect>

                        <FilterCustomInput placeholder="Enter Company Name"/>
                         
                    </FilterElement>

                    </FilterWrapper>

                </FilterContainer>
                

                {/* Cards Container */}


               <CardMainContainer>
                    <FilterOpenerContainer><FilterOpener onClick={ShowFilter}>Open Folter </FilterOpener></FilterOpenerContainer>
                    <TopBannerContainer>Lorem Lorem Lorem Lorem Lorem</TopBannerContainer>
                    <Title>Heading</Title>
                    <CardContainer>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                    </CardContainer>
                    <Stack spacing={2}>
                        <Pagination count={10} page={page} onChange={handlePageChange} />
                    </Stack>
               </CardMainContainer>
            </Wrapper>
        </Container>
    </>)
}