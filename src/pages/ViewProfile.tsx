import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import {Row, Col} from "react-bootstrap"
import { Card } from "react-bootstrap";

export const ViewProfile = () => {
    const { control } = useForm();

    return(
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="container ">
                <div className="w-[full] flex justify-center">
                    <div className="w-[880px] mt-5">
                        <div><h3><b>Profile</b></h3></div>
                    <div >
                    <div className="d-flex justify-content-between flex-wrap bg-[#EBFFF1]">
                            {/* Card 1 */}
                            <Card className="bg-[#EBFFF1] me-3" style={{ border: "none", flex: "2"}}>
                                <Card.Body className="bg-[#EBFFF1]">
                                <Card.Title style={{fontSize:"18px"}}>Current Level: Tier 1</Card.Title>
                                <Card.Body>
                                    <Card.Title style={{fontSize:"16px", color:"#00000099"}}>
                                        <p className="flex justify-between">
                                            <p>VSO</p>
                                            <p style={{marginLeft:"87%", color:"#FDA867"}}>4</p>
                                            <p style={{color:"#12A53E"}}>/10</p>
                                        </p>
                                    </Card.Title>
                                    <div className="w-full bg-gray-100 rounded-3xl h-2.5 border-1 solid border-[#00000033]">
                                        <div className="bg-[#04D02ACC] h-2.5 rounded-3xl w-[20%] "></div>
                                    </div>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Title style={{fontSize:"16px" , color:"#00000099"}}>
                                        <p className="flex justify-between">
                                            <p>Map Activations</p>
                                            <p style={{marginLeft:"67%", color:"#FDA867"}}>24</p>
                                            <p style={{color:"#12A53E"}}>/30</p>
                                        </p>
                                    </Card.Title>
                                    <div className="w-full bg-gray-100 rounded-3xl h-2.5 border-1 solid border-[#00000033]">
                                        <div className="bg-[#04D02ACC] h-2.5 rounded-3xl w-[80%] "></div>
                                    </div>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Title style={{fontSize:"16px" , color:"#00000099"}}>
                                        <p className="flex justify-between">
                                            <p>Numbers Sold</p>
                                            <p style={{marginLeft:"67%", color:"#FDA867"}}>143</p>
                                            <p style={{color:"#12A53E"}}>/200</p>
                                        </p>
                                    </Card.Title>
                                    <div className="w-full bg-gray-100 rounded-3xl h-2.5 border-1 solid border-[#00000033]">
                                        <div className="bg-[#04D02ACC] h-2.5 rounded-3xl w-[50%] "></div>
                                    </div>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Title style={{fontSize:"16px" , color:"#00000099"}}>
                                        <p className="flex justify-between">
                                            <p>Gross Sales</p>
                                            <p style={{marginLeft:"45%", color:"#FDA867"}}>N6,354,000</p>
                                            <p style={{color:"#12A53E"}}>/N10,000,000</p>
                                        </p>
                                    </Card.Title>
                                    <div className="w-full bg-gray-100 rounded-3xl h-2.5 border-1 solid border-[#00000033]">
                                        <div className="bg-[#04D02ACC] h-2.5 rounded-3xl w-[60%] "></div>
                                    </div>
                                </Card.Body>
                                <div style={{display:"flex", paddingTop:"2%"}}> 
                                    <div className='me-2'><svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                                        </svg>
                                    </div>
                                    <p style={{color:"#00000080"}}>To unlock the "Upgrade to Tier 2" button, you must have completed all progress bars</p>
                                </div>
                                <div className="flex justify-end">
                                    <button className="bg-[#a9a8a8] text-white rounded-md p-2 w-full mt-[27px]" disabled>Upgrade to Tier 2</button>
                                </div>
                                </Card.Body>
                            </Card>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px' }}>
                                <div style={{ borderLeft: "1px solid #d9d9d9", height: "500px", borderRadius:"10px" }}></div>
                            </div>
                            {/* Card 2 */}
                            <Card className="flex-1 bg-[#EBFFF1]" style={{ border: "none", flex: "1"}}>
                                <Card.Body className="bg-[#EBFFF1]">
                                    <Card.Title>Tier Benefits</Card.Title>
                                    <Card.Body>
                                        <Card.Title>Tier 1</Card.Title>
                                        <ul>
                                            <li>Benefit one</li>
                                        </ul>
                                    </Card.Body>
                                    <Card.Body>
                                        <Card.Title>Tier 2</Card.Title>
                                        <ul>
                                            <li>Benefit one</li>
                                        </ul>
                                    </Card.Body>
                                    <Card.Body>
                                        <Card.Title>Tier 3</Card.Title>
                                        <ul>
                                            <li>Benefit one</li>
                                        </ul>
                                    </Card.Body>
                                </Card.Body>
                            </Card>
                        </div>
                        </div>
                        <div className="mt-5 mb-5"><p>Complete your profile by adding your National Identification Number (NIN) & Account Number</p></div>
                        <div className="mb-[15px]"> 
                            <Row className="mb-5">
                                <Col md="auto">
                                    <CustomInput name="NIN" label={"Enter NIN"} asterisk style="w-[650px]" control={control as never} />
                                </Col>
                                <Col md="auto">
                                    <button className="bg-[#12A53E] text-white rounded-md p-2 w-[200px] mt-[27px]">Submit</button>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="auto">
                                    <CustomInput name="NIN" label={"Enter Account Number"} asterisk style="w-[650px]" control={control as never} />
                                </Col>
                                <Col md="auto">
                                    <button className="bg-[#12A53E] text-white rounded-md p-2 w-[200px] mt-[27px]">Submit</button>
                                </Col>
                            </Row>
                        </div>
                        <div className="mt-5  mb-4"><p>More Options</p></div>
                        <div className="mb-[15px]"> <a href="/app/editProfile" className="no-underline"><button  className="bg-[#FFFFFF] border-2 border-[#277CFA] text-black rounded-md p-2 w-[880px] mb-3">Edit Profile Details</button></a></div>
                        <div className="mb-[15px]"><a href="/app/updateCurrentPassword"> <button className="bg-[#D92027] text-white rounded-md p-2 w-[880px]">Reset password</button></a></div>
                    </div>
                </div>


            </div>
        </div>
    )
}