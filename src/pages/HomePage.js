import React, { useEffect, useState } from "react";
import { Cards } from "../componets/Card";
import { CardContainer, CardMainContainer, CardWrapper, Container, FilterButton, FilterButtonContainer, FilterButtonWrapper, FilterContainer, FilterCustomInput, FilterElement, FilterH2, FilterH5, FilterInputRange, FilterInputRangeOutput, FilterOpener, FilterOpenerContainer, FilterOption, FilterSelect, FilterSelect_antd, FilterWrapper, PrettoSlider, Title, TopBannerContainer, Wrapper } from "../styledComponents/HomePage";
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { MovingTextContainer } from "../styledComponents/Landingpage";

import axios from 'axios';
import {HOST_NAME} from '../hostName'
import { FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from "@mui/material";







const filterdata = (user,gender,country,city,higherQualification,fieldOfStudy,industry,companyName,schoolName,collageName,age,language,lookingFor)=>{
    if (!gender&&country&&city&&higherQualification&&fieldOfStudy&&industry&&companyName&&schoolName&&collageName&&language&&lookingFor) {
        return user;  
    }
  
    return user.filter((user)=>{
        const usergender = user.gender&&user.gender.toLowerCase() ;
        const userCountry = user.country&&user.country.toLowerCase() ;
        const userCity = user.city&&user.city.toLowerCase() ;
        const userQualification = user.higherQualification&&user.higherQualification.toLowerCase() ;
        const userFieldOfStudy = user.fieldOfStudy&&user.fieldOfStudy.toLowerCase() ;
        const userIndustry = user.industry&&user.industry.toLowerCase() ; 
        const userCompanyName = user.companyName&&user.companyName.toLowerCase() ;
        const userSchoolName = user.schoolName&&user.schoolName.toLowerCase() ;
        const userCollageName = user.collageName&&user.collageName.toLowerCase() ;
        const userAge = user.age&&user.age ;
        const userLanguage = user.language&&user.language ;
        const userLookingFor= user.lokingFor&&user.lokingFor ;
         
        return userLookingFor.includes(lookingFor)||userLanguage.includes(language)||( userAge<= age[1] && userAge>= age[0] ) || userSchoolName.includes(schoolName?schoolName:null) || userCollageName.includes(collageName?collageName:null)|| usergender === gender || userCountry===country || userCity===city  || userQualification===higherQualification || userFieldOfStudy===fieldOfStudy || userIndustry===industry || userCompanyName===companyName
    })
  
  }


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
PaperProps: {
    style: {
    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    width: 250,
    },
},
};

  const languagesList = [
    'Hindi',
    'English',
    'Urdu',
    'Tamil',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
    ];



 export const HomePage = ()=>{
    const [page, setPage] = React.useState(1);
    const [gender, setGender] = useState(null);
    const [lookingFor, setLookingFor] = useState("");
    const [country, setCountry] = useState(null);
    const [city, setCity] = useState(null);
    const [qualification, setQualification] = useState(null);
    const [fieldOfStudy, setFieldOfStudy] = useState(null);
    const [industry, setIndustry] = useState(null);
    const [companyName, setCompanyName] = useState(null);
    const [schoolName, setSchoolName] = useState(null);
    const [collageName, setCollageName] = useState(null);
    const [age, setAge] = useState([16,37]);
    const [language, setLanguage] = useState("");
    
   

 

    const handlePageChange = (event, value) => {
        setPage(value);
    };


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
    
    const handleChange = (event, newValue) => {
        setAge(newValue);
    };
   
   
   // check box 

   const [checked, setChecked] = React.useState([true, false]);
   const handleCheckBOXChange = (event) => {
    const {
        target: { value },
    } = event;
    setLanguage(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };
 
   
   const [users,setUsers] = useState()
    useEffect(()=>{
        const getAllUsers = async()=>{
            const res = await axios.get(`${HOST_NAME}/user/get-all-user/?page=${page}`)
            setUsers(res.data.message)
        }
        getAllUsers()
    },[page])

    const ApplyFilter = async()=>{
        const res = await axios.get(`${HOST_NAME}/user/get-all-user/?page=${page}`)
        setUsers(filterdata(res.data.message,gender,country,city,qualification,fieldOfStudy,industry,companyName,schoolName,collageName,age,language,lookingFor ))

    }

    return(<>
        <Container>
            <Wrapper>

                <FilterContainer status = {showFilter}>
                    <FilterWrapper>
                       {(showFilter !="hide" && showFilter !=null ) ? <div onClick={()=>ShowFilter("hide")}> <CloseIcon /></div> : null}
                        <FilterH2>Filter </FilterH2>
                        <FilterH5>Gender : </FilterH5>    

                        <FilterElement>
                             
                            <FilterSelect onChange={(e)=>{setGender(e.target.value.toLocaleLowerCase())}}>
                                <FilterOption selected disabled>Gender</FilterOption>
                                <FilterOption className="Option">Male</FilterOption>
                                <FilterOption className="Option">Female</FilterOption>
                            </FilterSelect>
                            <FilterSelect onChange={(e)=>{setLookingFor(e.target.value)}}>
                                <FilterOption selected disabled>Loking For</FilterOption>
                                <FilterOption>Friendship</FilterOption>
                                <FilterOption>Dating</FilterOption>
                                <FilterOption>Matrimonial</FilterOption>
                            </FilterSelect>
                            {/* <FilterSelect>
                                <FilterOption selected disabled>Membership Type</FilterOption>
                                <FilterOption>Basic</FilterOption>
                                <FilterOption>Standard</FilterOption>
                                <FilterOption>Premium</FilterOption>
                            </FilterSelect> */}
                        </FilterElement> 

                        <FilterH5>Location : </FilterH5> 
                        <FilterElement>
                            <FilterSelect onChange={(e)=>{setCountry(e.target.value.toLocaleLowerCase())}}>
                                <FilterOption selected disabled>Country</FilterOption>
                                <FilterOption></FilterOption>
                            </FilterSelect>
                            <FilterSelect onChange={(e)=>{setCity(e.target.value.toLocaleLowerCase())}} >
                                <FilterOption selected disabled>City</FilterOption>
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
                            value={age}
                            onChange={handleChange}
                            getAriaValueText={valuetext}
                            max={40}
                            min={18}
                            sx={{color:'black'}}
                        />
                        </Box> 
                    </FilterElement>

                    <FilterH5>Language : </FilterH5> 
                    <FilterElement>
                        {/* <FormControl sx={{ m: 1, width: '80%' }}>
                            <InputLabel id="demo-multiple-checkbox-label" style={{backgroundColor:'#FFF0E5'}} >Language</InputLabel>
                            <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={language}
                            onChange={handleCheckBOXChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                            
                            >
                            {languagesList.map((name) => (
                                <MenuItem key={name} value={name}>
                                <Checkbox checked={language.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                            </Select>
                            </FormControl> */}

                            <FilterSelect onChange={(e)=>{setLanguage(e.target.value)}}>
                                <FilterOption selected disabled>Hindi</FilterOption>
                                {languagesList.map((name) => (
                                    <FilterOption>{name}</FilterOption>
                                ))}
                                <FilterOption>Other</FilterOption>
                            </FilterSelect>

                        </FilterElement>

                    <FilterH5>Qualification : </FilterH5> 
                    <FilterElement>
                        <FilterSelect onChange={(e)=>{setQualification(e.target.value.toLocaleLowerCase())}}>
                            <FilterOption selected disabled>Highest Qualification</FilterOption>
                            <FilterOption>Bachelors</FilterOption>
                            <FilterOption>Masters</FilterOption>
                            <FilterOption>PHD</FilterOption>
                            <FilterOption>Post Doc</FilterOption>
                            <FilterOption>Other</FilterOption>
                        </FilterSelect>
                        <FilterSelect onChange={(e)=>{setFieldOfStudy(e.target.value.toLocaleLowerCase())}}>
                            <FilterOption selected disabled>Field of Study</FilterOption>
                            {FieldOfStudyList.map((field,index)=><FilterOption key={index}>{field}</FilterOption>)}

                        </FilterSelect>
                        <FilterCustomInput placeholder="Enter College Name" onChange={(e)=>{setCollageName(e.target.value.toLocaleLowerCase())}}/>
                        <FilterCustomInput placeholder="Enter School Name" onChange={(e)=>{setSchoolName(e.target.value.toLocaleLowerCase())}}/>

                    </FilterElement>

                    <FilterH5>Professionalism : </FilterH5> 
                    <FilterElement>
                        <FilterSelect onChange={(e)=>{setIndustry(e.target.value.toLocaleLowerCase())}}>
                            <FilterOption selected disabled>Industry</FilterOption>
                            {IndustryList.map((field,index)=><FilterOption key={index}>{field}</FilterOption>)}

                        </FilterSelect>

                        <FilterCustomInput placeholder="Enter Company Name" onChange={(e)=>{setCompanyName(e.target.value.toLocaleLowerCase())}}/>
                         
                    </FilterElement>
                    
                    <FilterButtonContainer>
                        <FilterButtonWrapper><FilterButton >Reset</FilterButton></FilterButtonWrapper>
                        <FilterButtonWrapper><FilterButton onClick={ApplyFilter}>Apply</FilterButton></FilterButtonWrapper>
                       
                    </FilterButtonContainer>
                    </FilterWrapper>

                </FilterContainer>
                

                {/* Cards Container */}


               <CardMainContainer>
                    <CardWrapper>
                        <FilterOpenerContainer><FilterOpener onClick={ShowFilter}>Open Folter </FilterOpener></FilterOpenerContainer>
                        <TopBannerContainer>Lorem Lorem Lorem Lorem Lorem</TopBannerContainer>
                        <Title>Heading</Title>
                        <CardContainer>
                            {
                                users ? 
                                users.map((user,index)=>{
                                    return <Cards user={user} key={index}/>
                                })
                                :"Londing...."
                            }
                        </CardContainer>
                        <Stack spacing={2}>
                            <Pagination count={10} page={page} onChange={handlePageChange} />
                        </Stack>
                    </CardWrapper>
               </CardMainContainer>
            </Wrapper>
            <MovingTextContainer> <marquee style={{marginLeft: '20px', marginRight: '20px'}} behavior="scroll" scrollamount="12"> Friendship Match &nbsp;• &nbsp;Dating Match &nbsp;• &nbsp;Matrimony Match &nbsp;• &nbsp; Friendship Match &nbsp;• &nbsp;Dating Match &nbsp;• &nbsp;Matrimony Match • &nbsp;Friendship Match &nbsp;• &nbsp;Dating Match &nbsp;• &nbsp;Matrimony Match • &nbsp;Friendship Match &nbsp;• &nbsp;Dating Match &nbsp;• &nbsp;Matrimony Match • &nbsp;Friendship Match &nbsp;• &nbsp;Dating Match &nbsp;• &nbsp;Matrimony Match • &nbsp;Friendship Match &nbsp;• &nbsp;Dating Match &nbsp;• &nbsp;Matrimony Match &nbsp;</marquee></MovingTextContainer>

        </Container>
    </>)
}