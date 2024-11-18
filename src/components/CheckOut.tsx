import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import CustomButton from "./CustomButton";


export const CheckOut = () =>  {
    return (
        <div>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div style={{ paddingRight:'33%' }}><h4><b>Checkout</b></h4> </div>
                <Card style={{border:"none"}}>
                    <Card.Body className="w-[499px]">
                        <p>Special Number</p>
                        <p className="mt-3" style={{color:"#00000099"}}>07003100410</p> 
                        <hr />
                        <p>Mapped Number</p>
                        <Row className="w-100">
                            <Col xs={12} md={6} style={{color:"#00000099"}}>08184378510</Col>
                            <Col className="flex me-auto justify-content-end" xs={12} md={6}><p style={{color:"#00000099"}}><b>₦20,000.00</b></p></Col>
                        </Row>
                        <hr />
                        <div style={{display:"flex", paddingTop:"2%"}}> 
                            <div className='me-2'><svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                                </svg>
                            </div>
                            <p style={{color:"#00000080", fontSize:"14px"}}>Additional mapping cost ₦15,000 for each number added per year</p>
                        </div>
                        <Row className="w-100">
                            <Col xs={12} md={6} style={{color:"#00000099"}}>09023507465</Col>
                            <Col className="flex me-auto justify-content-end" xs={12} md={6}><p style={{color:"#00000099"}}><b>₦15,000.00</b></p></Col>
                        </Row>
                        <Row className="w-100">
                            <Col xs={12} md={6} style={{color:"#00000099"}}>08189210086</Col>
                            <Col className="flex me-auto justify-content-end" xs={12} md={6}><p style={{color:"#00000099"}}><b>₦15,000.00</b></p></Col>
                        </Row>
                        <hr />
                        <p>Add Ons</p>
                        <Row className="w-100">
                            <Col xs={12} md={6} style={{color:"#00000099", fontSize:"14px"}}>Interactive Voice Response (IVR)</Col>
                            <Col className="flex me-auto justify-content-end" xs={12} md={6}><p style={{color:"#00000099"}}><b>₦10,000.00</b></p></Col>
                        </Row>
                        <Row className="w-100 mt-2">
                            <Col xs={12} md={6} style={{color:"#00000099"}}>Total</Col>
                            <Col className="flex me-auto justify-content-end" xs={12} md={6}><p style={{color:"#00000099"}}><b>₦60,000.00</b></p></Col>
                        </Row>
                        <div className=""><CustomButton name="Proceed to Pay ₦60,000.00" backgroundColor="bg-[#D92027]" textColor="text-[#ffffff]" style="w-[450px]" /></div>

                    </Card.Body>
                </Card>
            </div>
        </div>
    )

}
