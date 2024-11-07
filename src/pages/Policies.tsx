import {Header} from '../components/Header';
import {SideMenuLegal} from '../components/SideMenuLegal';
import {Row, Col } from 'react-bootstrap';
import {useEffect} from 'react';
import { useLocation } from 'react-router-dom';



export const Policies =  () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        }
    }, [location]);
    return (
      <div>
        <div className='navbar-custom'>
            <Header />
        </div>
        <div style={{marginTop:'10%', zIndex: 1, position: 'relative'}}>
            <Row  className='page-layout'>
                <Col xs={12} md={3} className="mb-3 sidebar-custom" >
                    <SideMenuLegal/>
                </Col>
                <Col xs={12} md={9} className="container content-custom">
                   <div>
                        <ol type='1' style={{marginTop:'5%'}}>
                          <div style={{marginTop:"5%"}}>
                            <li id='tos' >
                                    <h3 className='mb-9'>TERMS AND CONDITIONS </h3>
                                    
                                    <hr style={{paddingTop:'5%'}}/>
                                    <h5>Acceptance of Terms and Conditions</h5>
                                    <hr style={{width:'50%'}}/>
                                    <p> Please read this carefully. This describes the terms and conditions under which the SKY ID offers you (the "user" or "you" or "your") an account (the "account") for use of the SKY ID (the "Service".)</p>
                                    <p>By accessing or using the service, you agree to be bound by the terms and conditions set forth below and those published on the SKY ID’s website. IF YOU DO NOT WISH TO BE BOUND BY THESE TERMS AND CONDITIONS, YOU MAY NOT ACCESS OR USE THE SERVICE. </p>
                                    <p>SKY ID reserves the right, at its sole discretion, to change, modify, update, add, or delete parts of the Terms and Conditions at any time, which shall be effective immediately upon posting of the updated terms on the website. </p>
                                    <p>We recommend that you check these Terms and Conditions from time-to-time for any modifications, updates or changes, and your continued access or use of the service shall be deemed your conclusive acceptance of the modified terms.</p>

                                    <div id='tos-rus'>
                                        <hr style={{paddingBottom:'12%'}}/>
                                        <h5>Restrictions on the Use of the Service</h5>
                                        <hr style={{width:'50%'}}/>
                                        <p>All messages, information, videos or other content, whether publicly posted, displayed or performed on, or privately transmitted, are the sole responsibility of the person who sends or publishes such items. Accordingly, the user is responsible for all items they record, upload, post, cause a display, playback or performance of, email, transmit or otherwise make available via the website.</p>
                                        <p>SKY ID reserves the right but has no obligation to monitor or screen the content posted and/or displayed or performed on the ID and to remove any content. Nevertheless, THE USER REMAINS SOLELY RESPONSIBLE FOR THE CONTENT THEY RECORD, UPLOAD, POST, CAUSE TO BE DISPLAYED, PLAYED BACK OR PERFORMED IN ANY AREAS OF THE ID AND WHICH THEY TRANSMIT IN ANY COMMUNICATIONS THAT USE THE WEBSITE AND THE SERVICE PROVIDED THEREBY.</p>
                                        <p>The User will not authorize or permit any other person or party to use the Service:</p>
                                        <ol type='i'>
                                            <li>to call, send or knowingly receive or conduct any communication which is in violation of any law, regulation, regulatory authority or which is defamatory, offensive, abusive, indecent, obscene or menacing, or in breach of confidentiality, privacy, trade secrets, or in breach of any third-party intellectual property rights, or in breach of any other rights.</li>
                                            <li>to cause any annoyance or inconvenience.</li>
                                            <li>to defraud or attempt to defraud.</li>
                                        </ol>
                                        <p>The User unconditionally accepts to abide by:</p>
                                        <ol type='i'>
                                            <li>SKY ID’s acceptable use policy, available on request or may be viewed at <a href="www.skyid.ng">Sky ID</a>, the terms with which the User declares itself familiar which can be amended from time to time.</li>
                                            <li>SKY ID’s licence terms and conditions which can be amended from time to time and available on request or may be viewed at <a href="www.skyid.ng">Sky ID</a></li>
                                        </ol>
                                        <p>Without derogating from any other right of recourse available to SKY ID in its terms of service, any breach of this clause by the User shall be deemed to be a material breach and shall entitle SKY ID to suspend and/or terminate the Service. For this purpose, it shall be irrelevant whether the User is aware of the content of any material so transmitted. </p>
                                        <p>SKY ID may suspend the Service without notice with immediate effect if in our reasonable opinion, the User is in breach of the terms of service, and we may refuse to restore the Service until the User has given an acceptable assurance that there will be no further contravention.</p>
                                        <p>SKY ID shall be entitled to suspend and/or terminate the Services to the User in the event of SKY ID or third-party network being or potentially jeopardised, harmed and/or impeded, by the User's use of the Service.</p>
                                        <p>The User may use the system to link into other networks and the User agrees to conform to the acceptable use policies of such networks. If communications by the User do not conform to these standards, or if the User makes profligate use of the system and/or the Service to the detriment of SKY ID or other SKY ID’s customers, SKY ID reserves the right to restrict the passage of the User communications until the User negotiates with SKY ID an acceptable undertaking as to its use.</p>
                                    </div>

                                    <div id='tos-dow'>
                                        <hr style={{paddingBottom:'12%'}}/>
                                        <h5  >Disclaimer of Warranty</h5>
                                        <hr style={{width:'50%'}}/>
                                        <p>SKY ID warrants that all services shall, at the time of sale, comply with applicable SKY ID specifications. SKY ID MAKES NO OTHER WARRANTY WITH RESPECT TO THE SERVICES, AND DISCLAIMS ANY AND ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. </p>
                                    </div>

                                    <div id='tos-lol'>
                                        <hr style={{paddingBottom:'12%'}}/>
                                        <h5  >Limitation of Liability</h5>
                                        <hr style={{width:'50%'}}/>
                                        <p>SKY ID SHALL NOT BE LIABLE TO THE USER OR ANY THIRD PARTY FOR ANY LOSS OF USE, REVENUE OR PROFIT OR DIMINUTION IN VALUE, OR FOR ANY CONSEQUENTIAL, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES.  THIS IS IRRESPECTIVE OF WHETHER THEY ARISE OUT OF BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE. IT IS SO REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE AND WHETHER SKY ID HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND NOTWITHSTANDING THE FAILURE OF ANY AGREED OR OTHER REMEDY OF ITS ESSENTIAL PURPOSE.</p>
                                        <p>IN NO EVENT SHALL SKY ID’S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THIS CONTRACT, WHETHER ARISING OUT OF OR RELATED TO BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, OR, AS TO SERVICES, FOR THE AMOUNTS PAID TO SKY ID FOR SERVICES PERFORMED HEREUNDER.</p>
                                        <p>Except for any deliberate act or gross negligence on the part of SKY ID, its associates, servants or agents, and except as otherwise expressly provided herein to the contrary, SKY ID shall not be liable to the User or any third party </p>
                                        <ol type='i'>
                                            <li>for any loss or damage of whatsoever nature arising (including consequential or incidental loss or damage which shall include but shall not be limited to loss of property or of profit, business, goodwill, revenue or anticipated savings);</li>
                                            <li>for any costs, claims or demands of any nature whether asserted against SKY ID or against the User by any party arising directly or indirectly out of the System or Services, their use, access, withdrawal or suspension or out of any information or materials provided or not provided by or from their use.</li>
                                        </ol>
                                        <p>The User hereby indemnifies and holds SKY ID harmless in respect thereof, and such indemnity specifically includes, but is not limited to:</p>
                                        <ol type='a'>
                                            <li>the incorrectness and/or loss of any service delivered or undelivered by the SKY ID System or the delay in delivery thereof.</li>
                                            <li>the non-availability of the System or access to the System for any reason whatsoever.</li>
                                        </ol>
                                        <p>Due to the need to conduct maintenance, repair and/or improvement work from time to time on the technical infrastructure by means of which the Services are provided, the provision of the Services may be suspended by SKY ID from time to time. Twenty-four (24) hours' notice shall be given for such work, and all liability on the part of SKY ID for any loss or damage whether directly or consequential thereby incurred or for any costs, claims, or demands of any nature arising therefrom, is excluded and the provision stated above shall apply mutatis mutandis to such exclusion.</p>
                                    </div>

                                    <div id='tos-i'>
                                        <hr style={{paddingBottom:'12%'}}/>
                                        <h5  id='tos-i'>Indemnification</h5>
                                        <hr style={{width:'50%'}}/>
                                        <p>The User and SKY ID (as an “Indemnifying Party”) shall indemnify the other party (as an “Indemnified Party”) from and against claims brought by a third party, on account of personal injury or damage to the third party’s tangible property, to the extent caused by the negligence of the Indemnifying Party in connection with this Service. </p>
                                        <p>In the event the injury or damage is caused by joint or concurrent negligence of User and SKY ID, the loss or expense shall be borne by each party in proportion to its degree of negligence. For purposes of SKY ID’s indemnity obligation, no part of the SKY ID is considered third party property.</p>
                                        <p>The User shall indemnify and keep SKY ID indemnified from any claim howsoever arising, lawful or otherwise, brought by any third party resulting from the User's use of the SKY ID and/or communication networks connected to the system. The User will pay all costs, damages, awards, fees of whatever nature (whether incurred before or during legal proceedings or in satisfaction of a judgement which has been granted) and judgments finally awarded against SKY ID arising from such claims. </p>
                                        <p>The User will provide SKY ID with notice of such claims, full authority to defend, compromise or settle such claims and all reasonable assistance necessary to defend such claims, at the User's sole expense. Any actions taken by SKY ID in respect of such claims will be taken in reasonable consultation with the User.</p>
                                    </div>

                                    <div id='tos-w'>
                                        <hr style={{paddingBottom:'12%'}}/>
                                        <h5  >Waiver</h5>
                                        <hr style={{width:'50%'}}/>
                                        <p>No waiver by SKY ID of any of the provisions of this Agreement is effective unless explicitly set forth in writing by SKY ID. No failure to exercise, or delay in exercising, any right, remedy, power or privilege arising from this Agreement operates, or may be construed, as a waiver thereof. No single or partial exercise of any right, remedy, power or privilege hereunder precludes any other or further exercise thereof or the exercise of any other right, remedy, power or privilege.</p>
                                    </div>

                                    <div id='tos-tdn'>
                                        <hr style={{paddingBottom:'12%'}}/>
                                        <h5 >Take-down Notice</h5>
                                        <hr style={{width:'50%'}}/>
                                        <p>SKY ID reserves the right to suspend and/or terminate Services to the User, if it receives any notification of unlawful activity by the User, in respect of the services, pursuant to the provisions of the law of the applicable country and standard organization(s).</p>
                                    </div>

                                    <div id='tos-t'>
                                        <hr style={{paddingBottom:'12%'}}/>
                                        <h5  >Termination or Modification; Consequences of Violation of Terms of Service.</h5>
                                        <hr style={{width:'50%'}}/>
                                        <p>SKY ID reserves the right to terminate your privilege to access the Service at any time for any reason. Also, SKY ID shall have the right but no obligation to:</p>
                                        <ol type='1'>
                                            <li>Remove any material that in its sole opinion may violate, or that is alleged to violate, any applicable law or these Terms of Service.</li>
                                            <li>Terminate a web communication or discussion or any portion thereof, and/or remove a User or Users from a discussion or otherwise terminate any use of the Service it determines, in its sole discretion or had a good-faith concern that such use is unlawful and/or prohibited by these Terms of Service.</li>
                                            <li>Inform law enforcement of any illegal activity or material SKY ID suspects or discovers on or relating to the Service and provide law enforcement officials with all requested information about the User account from which the illegal activity or material originated.</li>
                                        </ol>
                                        <p>SKY ID reserves the right from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) at any time. SKY ID may from time to time upon prior update to the Terms of Service, change the services offered, including, without limitation, to issues concerning use of the Service. </p>
                                        <p>SKY ID reserves the right at any time to change or modify fees for access to portions or whole of its Service portal, including services which may have been previously offered without charge. However, such fees shall not be charged unless your prior agreement to pay such charges is obtained. Thus, if at any time SKY ID requires a fee for accessibility, you will be given reasonable advance notice of such fees and the opportunity to cancel your membership before such charges are imposed. If you elect not to pay such fees, SKY ID shall have the right to terminate access to the Service to you.</p>
                                        <p>In the event of suspension, termination, or cancellation as provided for in this Agreement and/or as provided for in common law, the provisions of this Agreement which are intended to continue and survive, shall continue to and survive accordingly.</p>
                                    </div>

                                    <div id='tos-fm'>
                                    <hr style={{paddingBottom:'12%'}}/>
                                        <h5>Force Majeure</h5>
                                        <hr style={{width:'50%'}}/>
                                        <p>SKY ID shall not be liable or responsible to User, nor be deemed to have defaulted or breached the terms, for any failure or delay in fulfilling or performing any terms of this Agreement when and to the extent such failure or delay is caused by or results from acts or circumstances beyond the reasonable control of SKY ID. These include, but without limitation, acts of God, flood, fire, earthquake, explosion, governmental actions, war, invasion or hostilities (whether war is declared or not), terrorist threats or acts, riot, or other civil unrest, national emergency, revolution, insurrection, epidemic, lockouts, strikes or other labor disputes (whether or not relating to either party’s workforce), or restraints or delays affecting carriers or inability or delay in obtaining supplies of adequate or suitable materials, materials or telecommunication breakdown or power outage.</p>
                                        <p>Neither of the parties shall be held liable for failure to perform any of its obligations under any circumstance where the failure or default is caused by or arises from force majeure.</p>
                                        <p>In the event of a force majeure circumstance, both parties shall use all reasonable endeavours to minimise the effects to the affected party.</p>
                                    </div>

                                    <div id='tos-gl'>
                                    <hr style={{paddingBottom:'12%'}}/>
                                        <h5 >Governing Law</h5>
                                        <hr style={{width:'50%'}}/>
                                        <p>All matters arising out of or relating to this Agreement are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.</p>
                                    </div>
                                   
                                    <div id='tos-a'>
                                    <hr style={{paddingBottom:'12%'}}/>
                                        <h5>Acceptance</h5>
                                        <hr style={{width:'50%'}}/>
                                        <p>Your use of SKY ID services signifies your acceptance of this Terms and Condition. Click here to read our <a href="#privacy">Privacy</a> and <a href="#refund">Refund Policy</a></p> 
                                    </div>
                                </li>
                          </div>
                          <hr />
                            <li id='privacy' style={{marginBottom:"10%" ,paddingTop:'14%'}}>
                                    <h3 >PRIVACY POLICY</h3>
                                    <hr/>
                                    <p>SKY ID (the “Platform”) is provided and controlled by IT Sky Solutions Ltd. (“IT Sky”, “we” or “us”) with its registered address at Suite 9, Upland Mall, Kado Estate, Abuja, FCT, Nigeria. We are committed to protecting and respecting your privacy. </p>
                                    <p>This policy explains our practices concerning the personal data we collect from you, or that you provide for us. If you do not agree with this policy, you should not use the Platform. If you have any questions about how we use your personal data, Contact us at: <a href="mailto:info@itskysolutions.com" style={{fontSize:'13px', color:'black'}}className="link-underline link-underline-opacity-0">info@itskysolutions.com</a></p>
                                    <p>This Policy outlines our practices with respect to Protection of Database Information and Disclosure of your Information. We recommend that you read this Privacy Policy thoroughly. The policy states how we obtain, gather and use your information. The policy may be amended as and when required. Each time you use the service, you acknowledge, agree and affirm our usage and disclosure of the information.</p>
                                    <p>The instances you will be asked for your personal information are:</p>
                                    <ul>
                                        <li>If you purchase a package, then also you will be asked to provide us with your personal information to make the transaction process easy.</li>
                                        <li>If you take a Free Trial of product.</li>
                                        <li>If you call us or chat with us to clear your queries then the support team will ask you to provide certain details such as name, phone number, etc. to make it convenient and solve your problem at the earliest.</li>
                                    </ul>
                                    <p>However, it will be your personal decision whether you want to share your personal information with us or not. But note that if you do not provide us with your complete details then you may not be able to complete the registration process. </p>
                                    <p>A copy of the names and phone numbers in the address book is stored on a live database which does not have a backup. If the customer deletes the address book from our servers, it will be deleted at once and on a permanent basis.</p>
                                    <p>See below SKY ID's commitment to protect the privacy of users:</p>
                                    <ol type='1'>
                                        <li>A user's phonebook, message content and MSISDN's sent belong exclusively to that user and will not be disclosed to any third parties without the user's permission.</li>
                                        <li>Any recipient of any message/call has the right to know the identity of the sender, and this will be disclosed on request to the recipient should such be requested.</li>
                                        <li>3.	By using the SKY ID, the User consents to the following regarding user contact information (refers only to that information supplied when a user registers and excludes all other information such as phonebook content and message history):</li>
                                        <ol type='i'>
                                            <li>We may use a user’s contact information to communicate with the user from time to time. Users may indicate if they do not wish to receive such communications;</li>
                                            <li>We may use user's contact information for non-personal statistical purposes.</li>
                                        </ol>
                                    </ol>

                                <div id='p-pdi'>
                                <hr style={{paddingBottom:'12%'}}/>
                                    <h5 >Protection of Database Information</h5>
                                    <hr style={{width:'50%'}}/>
                                    <p>Any information received or gathered by SKY ID for usage of the Services and or storage purposes will remain the property of the account holder. We will at no time collect, redistribute or sell this information, except where legally required by law to do so. This is with reference to any database, numbers and/or recipient details that you may deliver to us, or store on our databases.</p>
                                    <p>SKY ID must receive or gather some information that will help in operating, providing, enhancing, understanding, customizing, supporting, and marketing our products/services, including when you install, access, or use the Service route.</p>
                                    <p>The type of information we attain and gather depends on what way you use our services. In order to provide our services, we will need certain information from you. For example: To create an account and use SKY ID Services, you must provide your mobile number, National Identification Number etc.</p>
                                    <p>There are some optional features, which you can use after providing some additional information. Before collecting the information, we will notify you as appropriate. However, if you do not agree to provide the information, you cannot use that service. You can easily manage the permission accessing the settings option in your Android or iOS devices.</p>
                                </div>

                                <div id='p-dyi'>
                                <hr style={{paddingBottom:'12%'}}/>
                                    <h5 >Disclosure of your Information</h5>
                                    <hr style={{width:'50%'}}/>
                                    <p>We do not sell or rent any personally identifiable information about you to any third party. Except as disclosed in this privacy policy, SKY ID does not share your personal information with any outside parties.</p>
                                    <p>We may share your personal information with service providers who perform services on our behalf. For example, we may hire other companies to handle the processing of payments, to provide data storage, to host websites, to fulfil orders and shipments, to assist in direct marketing, to conduct audits, etc.</p>
                                    <p>Those companies will be permitted to obtain only the personal information they need to provide the service. They are required to maintain the confidentiality of the information and are prohibited from using it for any other purpose.</p>
                                    <p>Information about our customers, including personal information, may be disclosed as part of any merger, acquisition, or sale of the company and/or its assets, as well as in the unlikely event of insolvency, bankruptcy, or receivership, in which personal information would be transferred as one of the business assets of the company.</p>
                                    <p>We reserve the right to disclose your personal information if required to do so by law, or in the good-faith belief that such action is reasonably necessary to comply with legal process, respond to claims, or protect the rights, property or safety of our company, employees, customers, or the public.</p>
                                </div>

                                <div id='p-ldi'>
                                <hr style={{paddingBottom:'12%'}}/>
                                    <h5 >Limitations on Disclosure of Information</h5>
                                    <hr style={{width:'50%'}}/>
                                    <p>Although your privacy is our top priority, due to the existing statutory, legal and technical environment, we are unable to ensure that personally identifiable information of our Users will not be disclosed to third parties in ways that are not described in this policy.</p>
                                    <p>Additionally, we may (upon authorization) disclose any private information about you to private entities, law enforcement or other government officials, which we may believe to be necessary at our sole discretion or appropriate to address or to resolve inquiries or problems. We undertake that this will not be done for commercial purposes or for our personal gain.</p>
                                    <p>Though SKY ID maintains highest standard of privacy policy, this is independent of third-party service provider(s) that may have access to user data such as but not limited to Internet Service Providers (ISP), international Gateway and Routing Provider(s) and local mobile operators.</p>
                                </div>

                                <div id='p-cli'> 
                                <hr style={{paddingBottom:'12%'}}/>
                                    <h5>Confidential Information</h5>
                                    <hr style={{width:'50%'}}/>
                                    <p>All non-public, confidential or proprietary information of SKY ID, including but not limited to specifications, samples, patterns, designs, plans, drawings, documents, data, business operations, customer lists, pricing, discounts or rebates, disclosed by SKY ID to User, whether disclosed orally or in writing, electronic or other form or media, and whether or not marked, designated or otherwise identified as “confidential” in connection with this terms of service is confidential, solely for the use of performing this Service.</p>
                                    <p>You acknowledge and agree that SKY ID (or SKY ID’s licensors) own all legal rights, title and interest in and to the Service, including any intellectual property rights which subsist in the Service (whether those rights happen to be registered or not, and wherever in the world those rights may exist). Unless you have agreed otherwise in writing with SKY ID, nothing in the Terms gives you a right to use any of SKY ID’s trade names, trademarks, service marks, logos, domain names, and other distinctive brand features.</p>
                                    <p>SKY ID acknowledges and agrees that it obtains no right, title or interest from you (or your licensors) under these Terms in or to any content that you submit, post, transmit or display on, or through, the Service. This includes any intellectual property rights which subsist in that content (whether those rights happen to be registered or not, and wherever in the world those rights may exist).</p>
                                    <p>You agree that you are responsible for protecting and enforcing those rights and that SKY ID has no obligation to do so on your behalf. You agree that you shall not remove, obscure, or alter any proprietary rights notices (including copyright and trademark notices) which may be affixed to or contained within the Service.</p>
                                </div>

                                <div id='p-cpipi'>
                                <hr style={{paddingBottom:'12%'}}/>
                                    <h5>Copyright Policy/Intellectual Property Infringement</h5>
                                    <hr style={{width:'50%'}}/>
                                    <p>SKY ID holds the copyrights and all rights of (industrial) property to the offers it has made and the designs, images, drawings (test) models, software, templates and other goods that it has issued. </p>
                                    <p>In addition to any other use restrictions outlined in the terms of service, you may not engage in or facilitate the posting, modification, distribution, reproduction of any copyrighted material, trademarks, or other proprietary information belonging to others without obtaining the prior written consent of the owner of such proprietary rights.</p>
                                    <p>It is the policy of SKY ID to terminate all privileges of any user who repeatedly infringes the copyright of others upon receipt of prompt notification by the copyright owner or their legal agent.</p>
                                </div>

                                <div id='p-n'>
                                <hr style={{paddingBottom:'12%'}}/>
                                    <h5 >Notice and Procedure for Making Claims of Copyright or Intellectual Property Infringement.</h5>
                                    <hr style={{width:'50%'}}/>
                                    <p>If you believe that your work has been copied in a way that constitutes copyright infringement, or your intellectual property rights have been otherwise violated, please provide SKY ID’s Copyright Agent with the following information:</p>
                                    <ol type='1'>
                                        <li>A physical signature of the person authorized to act on behalf of the owner of the copyright or other intellectual property interest.</li>
                                        <li>A description of the copyrighted work or other intellectual property that you claim has been infringed.</li>
                                        <li>A description of where the material that you claim is infringed is located on the Website.</li>
                                        <li>Your physical and email addresses and telephone number.</li>
                                        <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
                                        <li>A statement by you, made under penalty of perjury, that the above information in your Notice is accurate and that you are the copyright or intellectual property owner or authorized to act on the owner’s behalf.</li>
                                    </ol>
                                    <p>SKY ID’s Agent for Notice of claims of copyright or other intellectual property infringement can be reached via:</p>
                                    <p>
                                        Email: <a href="mailto:Enter when given" style={{color:'black'}}className="link-underline link-underline-opacity-0">Enter when given</a>
                                    </p>
                                </div>

                                <div id='p-acl'>
                                <hr style={{paddingBottom:'12%'}}/>
                                    <h5 >Automatically Collected Information</h5>
                                    <hr style={{width:'50%'}}/>
                                    <ol type='1'>
                                        <li>
                                            <h5>Usage and Log Information: </h5>
                                        </li>
                                        <p>We collect information about your activities on our Service, like service-related, diagnostic, and performance information. This includes information about your activity (including how you use our Services, your Services settings, how you interact with others using our Services, even when you interact with a business), and the time, frequency, and duration of your activities and interactions, log files, and diagnostic, crash, website, and performance logs and reports. </p>
                                        <p>This also includes information about when you registered to use our Services; the features you use like our messaging, calling, status, groups (including group name, group picture, group description), payments or business features; profile photo, "about" information; whether you are online, when you last used our Services (your "last seen"); and when you last updated your "about" information.</p>

                                        <li>
                                            <h5>Device and Connection Information</h5>
                                        </li>
                                        <p>We collect device and connection-specific information when you install, access, or use our Services. This includes information such as hardware model, operating system information, battery level, signal strength, software version, browser information, mobile network, and connection information (including phone number, mobile operator or ISP). Others include language and time zone, IP address, device operations information, and identifiers (including identifiers unique to Meta Company Products associated with the same device or account).</p>
                                        <li>
                                            <h5>Location Information</h5>
                                        </li>
                                        <p>We collect and use precise location information from your device with your permission when you choose to use location-related features, like when you decide to share your location with your contacts or view locations nearby or locations others have shared with you. There are certain settings on the location-related information which you can find in your device settings or the in-app settings, such as location sharing. Even if you do not use our location-related features, we use IP addresses and other information like phone number area codes to estimate your general location (e.g., city and country). We also use your location information for diagnostics and troubleshooting purposes.</p>
                                        <li>
                                            <h5>Cookies</h5>
                                        </li>
                                        <p>We use cookies to operate and provide our Services that are web-based, improve your experiences, understand how our Services are being used, and customize them. For example, we use cookies to provide our Services for web and desktop and other web-based services. We may also use cookies to understand which of our Help Centre articles are most popular and to show you relevant content related to our Services. Additionally, we may use cookies to remember your choices, like your language preferences, to provide a safer experience, and otherwise to customize our Services for you.</p>
                                    </ol>
                                </div>

                                <div id='p-dpc'>
                                <hr style={{paddingBottom:'12%'}}/>
                                    <h5>SKY ID Data Protection Compliance</h5>
                                    <hr style={{width:'50%'}}/>
                                    <p>SKY ID has adopted a new standard for personal data laws with Nigeria Data Protection Bureau (NDPB). We realize the importance & need of personal data protection and take our users’ privacy very seriously. To maintain this, we handle every information provided to us by our Users with utmost care.</p>
                                    <p>As an organization, we are committed to maintaining the security and confidentiality while processing our Users’ personal information. We, herby state that we have adopted all necessary measures to become a NDPB Compliant organization. We collect users’ data such as email address, phone number, and preferences when they perform activities on our website such as installing a software or creating an account.</p>
                                    <p>We get some of the data by recording how and when Users interact with our Services. To provide the best experience with our service, we collect certain personal information of users. For the same reasons, we may share some data with our trusted partners, who are associated with us. We only share information with partners, who are fully NDPB compliant.</p>
                                    <p>The data which we share with our partners do not contain information which identifies them personally. We believe that your personal information that you provide on our website <a style={{}}className="link-offset-2 link-underline link-underline-opacity-0" href="www.skyid.com">Sky ID</a> is within the scope of “personal data” as claimed by the Nigeria Data Protection Bureau. As it is necessary to process the data to provide you better services, we require your permission for all such actions. In SKY ID, we adopt all necessary measures to protect the personal data of our Users. Our firm security policies prevent unauthorized access of User’s personal data by any third party.</p>
                                    <p>We assure you the right to:</p>
                                    <ol type='i'>
                                        <li>Access only your personal data which you have shared with us.</li>
                                        <li>Request correction, deletion or processing restrictions of your personal data.</li>
                                        <li>Object to the processing of your personal data.</li>
                                    </ol>
                                    <p>We preserve your personal data for the purpose it is collected and can be removed from our database upon receiving a written request from you, once you stop using our services.</p>
                                </div>

                            </li>

                            <hr />
                            <li id='refund' style={{marginBottom:"10%" ,paddingTop:'14%'}}>
                                <h3>REFUND POLICY</h3>
                                <hr/>
                                <p>This Refund Policy (the “Policy”) informs you of your right to receive a refund for product/service purchased on the <a style={{}}className="link-offset-2 link-underline link-underline-opacity-0" href="www.skyid.com">Sky ID</a>.</p>
                                <p>Please read this Policy carefully to understand your rights and understand the requirements for the refund.</p>
                                <ol type='1'>
                                    <li>When you buy a product subscription, you agree that SKY ID may charge your credit card or other payment method selected by you and approved by SKY ID.</li>
                                    <li>If you cancel after purchasing a product/service, you will neither receive full or partial refund for any product/service already paid for.</li>
                                    <li>You can cancel your product/service subscription any time. However, if you cancel your subscription 48 hours before the renewal date, you will not be charged any further amount.</li>
                                </ol>
                                <p>Failure of cellular networks and servers, satellites and satellite functions and systems or apparatus ("the cellular networks") outside the management and control of SKY ID, SHALL NOT constitute a ground for refund by SKY ID to the User. In such event SKY ID shall assist the User in any claim that he or she may have because of the cellular networks receiving but not delivering Services.</p>
                                <p>If SKY ID refunds a User, SKY ID shall only refund the User to the equivalent in the Nigerian Naira (NGN) of the credit in the User account or alternatively the amount purchased, depending on case.</p>
                                <p>In applicable circumstances, to be determined by SKY ID, administrative cost for such refund shall be deducted.</p>
                                <p>We recommend you read the features carefully, then purchase any subscription.</p>
                                <p style={{fontStyle: 'italic'}}>“In the event of an emergency, SKY ID does not guarantee calls to any emergency access number in any area of jurisdiction worldwide. Hence, it cannot be used to call ambulances, police or fire service in any country worldwide. In the event of an emergency, users of SKY ID should use their GSM or mobile phone to access emergency numbers in their location worldwide.”</p>
                            </li>
                            <hr />
                            <li id='cookie' style={{marginBottom:"10%" ,paddingTop:'14%'}}>
                                <h3>COOKIES POLICY</h3>
                                <hr style={{width:'50%'}}/>
                                <hr/>
                                <p>SKY ID (“we” or “us” or “our”) may use cookies, web beacons, tracking pixels, and other tracking technologies when you visit our website <a style={{}}className="link-offset-2 link-underline link-underline-opacity-0" href="www.skyid.com">Sky ID</a>, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”) to help customise the Site and improve your experience.</p>
                                <p>We reserve the right to make changes to this Cookie Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Cookie Policy. Any changes or modifications will be effective immediately upon posting the updated Cookie Policy on the Site, and you waive the right to receive specific notice of each such change or modification.</p>
                                <p>You are encouraged to periodically review this Cookie Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Cookie Policy by your continued use of the Site after the date such revised Cookie Policy is posted.</p>

                                <div id='c-uoc'>
                                <hr style={{paddingBottom:'12%'}}/>
                                    <h5 >Use of Cookies</h5>
                                    <hr style={{width:'50%'}}/>
                                    <p>A “cookie” is a string of information which assigns you a unique identifier that we store on your computer. Your browser then provides that unique identifier to use each time you submit a query to the Site. We use cookies on the Site to, among other things, keep track of services you have used, record registration information, record your user preferences, keep you logged into the Site, facilitate purchase procedures, and track the pages you visit. Cookies help us understand how the Site is being used and improve your user experience.</p>

                                    <p>The following types of cookies may be used when you visit the Site:</p>
                                    <h6>Advertising Cookies</h6>
                                    <p>Advertising cookies are placed on your computer by advertisers and ad servers to display advertisements that are most likely to be of interest to you. These cookies allow advertisers and ad servers to gather information about your visits to the Site and other websites, alternate the ads sent to a specific computer, and track how often an ad has been viewed and by whom. These cookies are linked to a computer and do not gather any personal information about you.</p>

                                    <h6>Analytics Cookies</h6>
                                    <p>Analytics cookies monitor how users reached the Site, and how they interact with and move around once on the Site. These cookies let us know what features on the Site are working the best and what features on the Site can be improved.</p>

                                    <h6>Our Cookies</h6>
                                    <p>Our cookies are “first-party cookies” and can be either permanent or temporary. These are necessary cookies, without which the Site won’t work properly or be able to provide certain features and functionalities. Some of these may be manually disabled in your browser but may affect the functionality of the Site.</p>

                                    <h6>Personalisation Cookies</h6>
                                    <p>Personalisation cookies are used to recognize repeat visitors to the Site. We use these cookies to record your browsing history, the pages you have visited, and your settings and preferences each time you visit the Site.</p>

                                    <h6>Security Cookies</h6>
                                    <p>Security cookies help identify and prevent security risks. We use these cookies to authenticate users and protect user data from unauthorised parties.</p>

                                    <h6>Site Management Cookies</h6>
                                    <p>Site management cookies are used to maintain your identity or session on the Site so that you are not logged off unexpectedly, and any information you enter is retained from page to page. These cookies cannot be turned off individually, but you can disable all cookies in your browser.</p>

                                    <h6>Third-Party Cookies</h6>
                                    <p>Third-party cookies may be placed on your computer when you visit the Site by companies that run certain services we offer. These cookies allow the third parties to gather and track certain information about you. These cookies can be manually disabled in your browser.</p>

                                </div>

                                <div id='c-coc'>
                                <hr style={{paddingBottom:'12%'}}/>
                                    <h5>Control of Cookies</h5>
                                    <hr style={{width:'50%'}}/>
                                    <p>Most browsers are set to accept cookies by default. However, you can remove or reject cookies in your browser’s settings. Please be aware that such action could affect the availability and functionality of the Site.</p>

                                    <h6>Other Tracking Technologies</h6>
                                    <p>In addition to cookies, we may use web beacons, pixel tags, and other tracking technologies on the Site to help customise the Site and improve your experience. A “web beacon” or “pixel tag” is tiny object or image embedded in a web page or email. They are used to track the number of users who have visited particular pages and viewed emails and acquire other statistical data. They collect only a limited set of data, such as a cookie number, time and date of page or email view, and a description of the page or email on which they reside. Web beacons and pixel tags cannot be declined. However, you can limit their use by controlling the cookies that interact with them.</p>

                                    <h6>Privacy Policy</h6>
                                    <p>For more information about how we use information collected by cookies and other tracking technologies, please refer to our <a style={{}}className="link-offset-2 link-underline link-underline-opacity-0" href="#privacy">Privacy Policy</a> posted on the Site. This Cookie Policy is part of and is incorporated into our Privacy Policy. By using the Site, you agree to be bound by this Cookie Policy and our Privacy Policy.</p>
                                </div>

                                <div id='contact'>
                                <hr style={{paddingBottom:'12%'}}/>
                                    <h3 >CONTACT US</h3>
                                    <hr style={{width:'50%'}}/>
                                    <p>For inquiries or comments regarding this Policy, customers may visit <a href="www.itskysolutions.com ">www.itskysolutions.com </a>Or send an email to <a href="mailto:complaints@itskysolutions.com" style={{fontSize:'', color:''}}className="link-underline link-underline-opacity-0">complaints@itskysolutions.com</a> Or call <a href="tel:+2347003100000" style={{fontSize:'', color:''}}className="link-underline link-underline-opacity-0">+234-700-3100-000</a>
                                    </p>
                                </div>
                            </li>
                        </ol>
                   </div>
                </Col>
            </Row>
        </div>
      </div>
    )
}
