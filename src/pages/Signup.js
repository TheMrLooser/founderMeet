import React, { useState } from "react";
import { ComponentWrapper, Container, FormContainer, FormTitle, HeadingTitleContainer, HeadingTitleImg, Img, ImgContainer, LeftPart, LeftPartTaglineContainer, LeftPartTagLineHeading, LeftPartTagLinePara, LowerPart, LowerPartFormWrapper, OrContainer, OrLeft, OrRigth, OrWrapper, RightPart, UpperPart, Wrapper } from "../styledComponents/Signup";
import logo from '../images/nowYouDate.svg'
import snale from '../images/snaleImg.svg'
import { BtnContainer, TopBannarLeftPartBTN } from "../styledComponents/Landingpage";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';



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


    const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
    ];


    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
          marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
          borderRadius: 4,
          position: 'relative',
          backgroundColor: theme.palette.background.paper,
          border: '1px solid #ced4da',
          fontSize: 16,
          padding: '10px 26px 10px 12px',
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        },
      }));



const SignUp = ()=>{
  const [personName, setPersonName] = React.useState([]);

  const handleCheckBOXChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (<>
        <Container>
            <Wrapper>
                <LeftPart>
                    <UpperPart>
                        <HeadingTitleContainer><HeadingTitleImg src={logo}/></HeadingTitleContainer>
                    </UpperPart>
                    <LowerPart>
                        <LeftPartTaglineContainer>
                            <LeftPartTagLineHeading>Welcome <br/>Back !</LeftPartTagLineHeading>
                            <LeftPartTagLinePara>Sign in to find someone to<br/> vibe with !</LeftPartTagLinePara>
                        </LeftPartTaglineContainer>
                        <FormContainer>
                            <FormTitle style={{paddingLeft:'10px',color:'black'}}>Have an account?</FormTitle>
                            <BtnContainer style={{maxWidth:'300px'}}><TopBannarLeftPartBTN style={{maxWidth:'300px'}}>Signin with LinkedIn</TopBannarLeftPartBTN></BtnContainer>
                            
                            <OrContainer><OrLeft/><OrWrapper>Or</OrWrapper><OrRigth/></OrContainer>
                            
                            <FormTitle style={{paddingLeft:'10px',color:'black'}}>Not have an account?</FormTitle>
                            <LowerPartFormWrapper>
                                <ComponentWrapper> 
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>WHERE ARE YOU?</FormTitle>
 
                                    <div style={{width:'100%',display:'flex',alignItems:'center',gap:'10px'}}>
                                        <FormControl sx={{ m: 1,width:'40%' }}>
                                        <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={age}
                                            label="City"
                                            onChange={handleChange}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControl sx={{ m: 1, width:'40%' }}>
                                        <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={age}
                                            label="City"
                                            onChange={handleChange}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </ComponentWrapper>

                                <ComponentWrapper>
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>WHAT IS YOUR GENDER?</FormTitle>
                                    <FormControl  sx={{paddingLeft:1}}>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        row
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                    </FormControl>
                                </ComponentWrapper>

                                <ComponentWrapper>
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>WHEN'S YOUR BIRTHDAY</FormTitle>
                                    <div style={{width:'100%',display:'flex',alignItems:'center',gap:'10px'}}>
                                        <FormControl sx={{ m: 1,width:'40%' }}>
                                        <InputLabel id="demo-simple-select-helper-label">Year</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={age}
                                            label="City"
                                            onChange={handleChange}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControl sx={{ m: 1, width:'40%' }}>
                                        <InputLabel id="demo-simple-select-helper-label">Month</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={age}
                                            label="City"
                                            onChange={handleChange}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>


                                        <FormControl sx={{ m: 1, width:'40%' }}>
                                        <InputLabel id="demo-simple-select-helper-label">Date</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={age}
                                            label="City"
                                            onChange={handleChange}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>


                                </ComponentWrapper>


                                <ComponentWrapper>
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>WHAT'S YOUR LANGUAGE</FormTitle>
                                    <FormControl sx={{ m: 1, width: '100%' }}>
                                    <InputLabel id="demo-multiple-checkbox-label">Language</InputLabel>
                                    <Select
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={personName}
                                    onChange={handleCheckBOXChange}
                                    input={<OutlinedInput label="Tag" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                    >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name}>
                                        <Checkbox checked={personName.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                    </Select>
                                    </FormControl>
                                </ComponentWrapper>


                                <ComponentWrapper>
                                    <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>WHEN'S YOUR QUALIFICATION'S</FormTitle>
                                    <div style={{width:'100%',display:'flex',alignItems:'baseline',gap:'10px'}}>
                                        <FormControl sx={{ m: 1,width:'40%' }}>
                                        <InputLabel id="demo-simple-select-helper-label">Qualification</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={age}
                                            label="City"
                                            onChange={handleChange}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControl sx={{ m: 1, width:'40%' }}>
                                        <InputLabel id="demo-simple-select-helper-label">Field Of Study</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={age}
                                            label="City"
                                            onChange={handleChange}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                        

                                        
                                    </div>
                                    <FormControl sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="demo-customized-textbox">Institute I</InputLabel>
                                        <BootstrapInput id="demo-customized-textbox" />
                                    </FormControl>
                                    <FormControl sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor="demo-customized-textbox" >Institute II</InputLabel>
                                        <BootstrapInput id="demo-customized-textbox" />
                                    </FormControl>

                                </ComponentWrapper>


                                <ComponentWrapper>
                                <FormTitle style={{fontSize:'14px',fontWeight:'600',paddingLeft:'10px'}}>IN WHICH INDUSTRY YOU WORK</FormTitle>
                                    <div style={{width:'100%',display:'flex',alignItems:'baseline',gap:'10px'}}>
                                        <FormControl sx={{ m: 1, width:'40%' }}>
                                            <InputLabel id="demo-simple-select-helper-label">Industry</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={age}
                                            label="City"
                                            onChange={handleChange}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl sx={{ m: 1 }} variant="standard">
                                            <InputLabel htmlFor="demo-customized-textbox" >Compony Name</InputLabel>
                                            <BootstrapInput id="demo-customized-textbox" />
                                        </FormControl>
                                    </div>
                                </ComponentWrapper>


                                <BtnContainer style={{maxWidth:'200px'}}><TopBannarLeftPartBTN style={{maxWidth:'300px'}}>Signup</TopBannarLeftPartBTN></BtnContainer>
                            </LowerPartFormWrapper>

                        </FormContainer>

                    </LowerPart>
                </LeftPart>
                <RightPart>
                    <ImgContainer>
                        <Img src={snale}/>
                    </ImgContainer>
                </RightPart>
            </Wrapper>
        </Container>
    </>)
}

export default SignUp