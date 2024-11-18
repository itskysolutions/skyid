import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import { useState } from 'react';

export const NumberMapping = () =>  {
    const { control } = useForm();

    const [showAdditionalInput, setShowAdditionalInput] = useState(false);

    const handleAddMoreClick = () => {
        setShowAdditionalInput(true);
    };

    return (
        <div>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="flex justify-center p-4">
                    <Card className="bg-[#F5F5F5] " style={{border:"none"}}>
                        <Card.Body className="bg-[#F5F5F5] mx-auto w-[500px] h-[60px]" style={{borderRadius:"20px"}}>
                            <Row className="w-100">
                                <Col xs={12} md={6} >Special Number </Col>
                                <Col className="flex me-auto justify-content-end" xs={12} md={6}><svg className="me-2"width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.9299 13.4587C10.9299 13.4587 10.9327 13.4574 10.9373 13.4567C10.9321 13.4587 10.9299 13.4587 10.9299 13.4587Z" fill="#12A53E" className="my-path"></path>
                                    <path d="M10.9644 13.4587C10.9644 13.4587 10.9616 13.4574 10.957 13.4567C10.9601 13.4579 10.9633 13.4587 10.9633 13.4587L10.9644 13.4587Z" fill="#12A53E" className="my-path"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.2002 11.9997C2.2002 6.58732 6.5878 2.19971 12.0002 2.19971C17.4126 2.19971 21.8002 6.58732 21.8002 11.9997C21.8002 17.4121 17.4126 21.7997 12.0002 21.7997C6.5878 21.7997 2.2002 17.4121 2.2002 11.9997ZM17.2364 9.51246C17.5488 9.20004 17.5488 8.69351 17.2364 8.38109C16.9239 8.06867 16.4174 8.06867 16.105 8.38109L11.7957 12.6904C11.4464 13.0397 11.2401 13.2436 11.0743 13.3701C11.0078 13.4208 10.9677 13.4433 10.9472 13.4526C10.9266 13.4433 10.8865 13.4208 10.82 13.3701C10.6542 13.2436 10.4479 13.0397 10.0986 12.6904L8.56593 11.1577C8.25351 10.8453 7.74698 10.8453 7.43456 11.1577C7.12214 11.4701 7.12214 11.9767 7.43456 12.2891L9.00037 13.8549C9.30504 14.1597 9.58777 14.4425 9.84945 14.6421C10.1391 14.8631 10.4948 15.0561 10.9472 15.0561C11.3995 15.0561 11.7552 14.8631 12.0449 14.6421C12.3065 14.4424 12.5892 14.1597 12.8939 13.8549L17.2364 9.51246Z" fill="#12A53E" className="my-path"></path>
                                    </svg><p style={{ paddingLeft:""}}>0700310040</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card> 
                </div>
                <div style={{ paddingBottom: '5%', paddingRight:'25%' }}><h4><b>Numper Mapping</b></h4> </div>
                <div style={{ paddingRight:'16%' }}><p>Enter numbers to map to special number</p></div>
            </div>
            <div style={{ paddingLeft:'29%' }}>
                <div className="flex">
                    <CustomInput name="mappednumber" placeholder="Enter Number"  control={control as never} style=""/>
                    <p className="mt-3" style={{color:"#00000099", paddingLeft:"27%"}}>₦20,000.00</p>  
                </div>  
                <div style={{display:"flex", paddingTop:"2%"}}> 
                    <div className='me-2'><svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                        </svg>
                    </div>
                    <p style={{color:"#00000080"}}>Additional mapping cost ₦15,000 for each number added per year</p>
                </div>
                {showAdditionalInput && (
                <div className="flex items-center mb-4">
                    <CustomInput 
                        name="mappednumber-2" 
                        placeholder="Enter Number"  
                        control={control} 
                    />
                    <p className="mt-3" style={{color:"#00000099", paddingLeft:"27%"}}>₦15,000.00</p>   
                </div>
                )}
                <CustomButton
                    name="Add More"
                    backgroundColor="bg-[#FFFFFF]"
                    textColor="text-[#00000080]"
                    style="w-[full] p-2" 
                    border="border-2 border-[#5A9CFF]"
                    onClick={handleAddMoreClick}
                    trailingIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>}
                />
            </div>
            <div className="mt-[40px]" style={{ paddingLeft:'29%' }}><CustomButton name="Proceed to CheckOut" backgroundColor="bg-[#D92027]" textColor="text-[#ffffff]" style="w-[500px]" />
            </div>
        </div>
    )

}
