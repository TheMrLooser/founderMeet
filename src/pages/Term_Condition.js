import React from "react";
import { ComponentWrapper, Container, DetailElement, DetailWrapper, FormContainer, FormTitle, HeadingTitleContainer, HeadingTitleImg, Img, ImgContainer, LeftPart, LeftPartTaglineContainer, LeftPartTagLineHeading, LeftPartTagLinePara, LowerPart, LowerPartFormWrapper, OrContainer, OrLeft, OrRigth, OrWrapper, ProfileBasicDetailContainer, RightPart, UpperPart, Wrapper } from "../styledComponents/Profile";
import logo from '../images/logo.svg'

import snale from '../images/snaleImg.svg'
import { BtnContainer, MovingTextContainer, TopBannarLeftPartBTN } from "../styledComponents/Landingpage";
 


const TermAndCondition = ()=>{
    return (<>
         
        <Container>
         
            <Wrapper>
                <LeftPart>
                    <UpperPart>
                        <HeadingTitleContainer><HeadingTitleImg src={logo}/></HeadingTitleContainer>
                    </UpperPart>
                    <LowerPart>
                        <LeftPartTaglineContainer>
                            <LeftPartTagLineHeading>T&C!</LeftPartTagLineHeading>
                            <LeftPartTagLinePara style={{marginTop:'10px'}}>Know more about <br/>Matchmaking24.com <br/>T&C</LeftPartTagLinePara>
                        </LeftPartTaglineContainer>
                        <FormContainer>
                        

                        {/* <LeftPartTagLineHeading></LeftPartTagLineHeading> */}
                        <h3>Terms and Conditions</h3>
                        <LeftPartTagLinePara style={{textAlign:'justify'}}>
                        MatchMaking24.com is a trading name of Foundrmeet Pvt Ltd. These terms and conditions apply between you, the User of this Website (including any sub-domains, unless expressly excluded by their own terms and conditions), and  Foundrmeet Pvt Ltd,  the owner and operator of this Website. Please read these terms and conditions carefully, as they affect your legal rights. Your agreement to comply with and be bound by these terms and conditions is deemed to occur upon your first use of the Website. If you do not agree to be bound by these terms and conditions, you should stop using the Website immediately.
                        <br/> <br/>
                        In these terms and conditions, User or Users means any third party that accesses the Website and is not either (i) employed by Foundrmeet Pvt Ltd  and acting in the course of their employment or (ii) engaged as a consultant or otherwise providing services to Foundrmeet Pvt Ltd  and accessing the Website in connection with the provision of such services. You must be at least 18 years of age to use this website and mobile application. By using the Website and agreeing to these terms and conditions, you represent and warrant that you are at least 18 years of age.
                        <br/> <br/>
                        Intellectual property and acceptable use
                        <br/> <br/>
                        All Content included on the Website, unless uploaded by Users, is the property of  Foundrmeet Pvt Ltd,  our affiliates or other relevant third parties. In these terms and conditions, Content means any text, graphics, images, audio, video, software, data compilations, page layout, underlying code and software and any other form of information capable of being stored in a computer that appears on or forms part of this Website, including any such content uploaded by Users. By continuing to use the Website you acknowledge that such Content is protected by copyright, trademarks, database rights and other intellectual property rights. Nothing on this site shall be construed as granting, by implication, estoppel, or otherwise, any license or right to use any trademark, logo or service mark displayed on the site without the owner's prior written permission
                        You may, for your own personal, non-commercial use only, do the following:
                        <br/> <br/>
                        a. retrieve, display and view the Content on a computer screen
                        You must not otherwise reproduce, modify, copy, distribute or use for commercial purposes any Content without the written permission of  Foundrmeet Pvt Ltd.
                        You may not use the Website for any of the following purposes:
                        <br/> <br/>
                        a. in any way which causes, or may cause, damage to the Website or interferes with any other person's use or enjoyment of the Website;
                        <br/> <br/>
                        b. in any way which is harmful, unlawful, illegal, abusive, harassing, threatening or otherwise objectionable or in breach of any applicable law, regulation, governmental order;
                        <br/> <br/>
                        c. making, transmitting or storing electronic copies of Content protected by copyright without the permission of the owner.
                        You must ensure that the details provided by you on registration or at any time are correct and complete.
                        You must inform us immediately of any changes to the information that you provide when registering by updating your personal details to ensure we can communicate with you effectively.
                        We may suspend or cancel your registration with immediate effect for any reasonable purposes or if you breach these terms and conditions.
                        You may cancel your registration at any time by informing us in writing to the address at the end of these terms and conditions. If you do so, you must immediately stop using the Website. Cancellation or suspension of your registration does not affect any statutory rights. You can also unsubscribe from the mailing list at anytime. The link to unsubscribe is included at the bottom of all email correspondence.
                        <br/> <br/>
                        Links to other websites
                        This Website may contain links to other sites. Unless expressly stated, these sites are not under the control of  Foundrmeet Pvt Ltd or that of our affiliates.
                        We assume no responsibility for the content of such Websites and disclaim liability for any and all forms of loss or damage arising out of the use of them.
                        The inclusion of a link to another site on this Website does not imply any endorsement of the sites themselves or of those in control of them.
                        <br/> <br/>
                        Privacy Policy
                        Use of the Website is also governed by our Privacy Policy, which is incorporated into these terms and conditions by this reference. To view the Privacy Policy, please click here:
                        <br/> <br/>
                        Availability of the Website and disclaimers
                        Any online facilities, tools, services or information that  Foundrmeet Pvt Ltd  makes available through the Website (the Service) is provided "as is" and on an "as available" basis. We give no warranty that the Service will be free of defects and/or faults. To the maximum extent permitted by the law, we provide no warranties (express or implied) of fitness for a particular purpose, accuracy of information, compatibility and satisfactory quality.  Foundrmeet Pvt Ltd  is under no obligation to update information on the Website.
                        Whilst Foundrmeet Pvt Ltd uses reasonable endeavours to ensure that the Website is secure and free of errors, viruses and other malware, we give no warranty or guaranty in that regard and all Users take responsibility for their own security, that of their personal details and their computers.
                        Foundrmeet Pvt Ltd accepts no liability for any disruption or non-availability of the Website.
                        Foundrmeet Pvt Ltd reserves the right to alter, suspend or discontinue any part (or the whole of) the Website including, but not limited to, any products and/or services available. These terms and conditions shall continue to apply to any modified version of the Website unless it is expressly stated otherwise.
                        <br/> <br/>
                        Limitation of liability
                        Nothing in these terms and conditions will: (a) limit or exclude our or your liability for death or personal injury resulting from our or your negligence, as applicable; (b) limit or exclude our or your liability for fraud or fraudulent misrepresentation; or (c) limit or exclude any of our or your liabilities in any way that is not permitted under applicable law.
                        We will not be liable to you in respect of any losses arising out of events beyond our reasonable control.
                        To the maximum extent permitted by law,  Foundrmeet Pvt Ltd accepts no liability for any of the following:
                        <br/> <br/>
                        a. any business losses, such as loss of profits, income, revenue, anticipated savings, business, contracts, goodwill or commercial opportunities;
                        <br/> <br/>
                        b. loss or corruption of any data, database or software;
                        <br/> <br/>
                        c. any special, indirect or consequential loss or damage.
                        </LeftPartTagLinePara>
                        </FormContainer>
                     </LowerPart>
                </LeftPart>
                <RightPart>
                    <ImgContainer>
                        <Img src={snale}/>
                    </ImgContainer>
                </RightPart>
            </Wrapper>
            <MovingTextContainer> <marquee style={{marginLeft: '20px', marginRight: '20px'}} behavior="scroll" scrollamount="12"> Join Now  •  Make it Happen    &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen  &nbsp;• &nbsp;Join Now  •  Make it Happen   </marquee></MovingTextContainer>
         
        </Container>
    </>)
}

export default TermAndCondition