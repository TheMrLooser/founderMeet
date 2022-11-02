import React, { useState } from "react";
import { Cards } from "../componets/Card";
import { CardContainer, Container, FilterContainer, FilterCustomInput, FilterElement, FilterH2, FilterH5, FilterInputRange, FilterInputRangeOutput, FilterOption, FilterSelect, FilterWrapper, Wrapper } from "../styledComponents/HomePage";

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

    const [getAge,setAge] = useState(18) 
    

    return(<>
        <Container>
            <Wrapper>

                <FilterContainer>
                    <FilterWrapper>
                        <FilterH2>Filter : </FilterH2>
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
                                <FilterOption selected disabled>City From</FilterOption>
                                <FilterOption></FilterOption>
                            </FilterSelect>
                            <FilterSelect>
                                <FilterOption selected disabled>Country From</FilterOption>
                                <FilterOption></FilterOption>
                            </FilterSelect>
                            <FilterSelect>
                                <FilterOption selected disabled>City Current</FilterOption>
                                <FilterOption></FilterOption>
                            </FilterSelect>
                            <FilterSelect>
                                <FilterOption selected disabled>Country Current</FilterOption>
                                <FilterOption></FilterOption>
                            </FilterSelect>
                        </FilterElement>    
                                
                    

                    <FilterH5>Age : </FilterH5> 
                    <FilterElement>
                        <FilterInputRangeOutput>{getAge}</FilterInputRangeOutput>
                        <FilterInputRange type={'range'} min="18" max="50"  onChange={(e)=>setAge(e.target.value)}/>
                    </FilterElement>

                    <FilterH5>Language : </FilterH5> 
                    <FilterElement>
                        <FilterSelect>
                            <FilterOption selected disabled>Select Language</FilterOption>
                            <FilterOption>Hindi</FilterOption>
                            <FilterOption>English</FilterOption>
                             
                        </FilterSelect>
                    </FilterElement>

                    <FilterH5>Qualification : </FilterH5> 
                    <FilterElement>
                        <FilterSelect>
                            <FilterOption selected disabled>Select Highest Qualification</FilterOption>
                            <FilterOption>Bachelors</FilterOption>
                            <FilterOption>Masters</FilterOption>
                            <FilterOption>PHD</FilterOption>
                            <FilterOption>Post Doc</FilterOption>
                            <FilterOption>Other</FilterOption>
                        </FilterSelect>
                        <FilterSelect>
                            <FilterOption selected disabled>Select Field of Study</FilterOption>
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
            </Wrapper>
        </Container>
    </>)
}