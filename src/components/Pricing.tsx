import { Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";

export  default function Pricing()  {
    return (
      <div>
            {/** Pricing */}
            <div className="container">
                <div className="text-center font-anjaEliane"><h1 className="responsive-title">Get your identity </h1></div>
                    <div className="d-flex justify-content-center" style={{ marginTop: "2%" }}>
                        <div style={{ width: "auto", maxWidth: "620px" }}>
                        <p style={{ textAlign: "center", fontSize: "18px", color: "#5b5b5b" }}>Choose the right plan for your team with affordable rates and flexible options, so you're always reachable</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center" style={{}}>
                    <Button href="#" size="lg"className="rounded-button"style={{ backgroundColor: "#000000CC", borderColor: "#000000CC" }}disabled>Annual Subscription</Button>
                    <style>{`
                       .rounded-button {
                           border-radius: 30px; /* Adjust this value for more or less curve */
                           padding: 0.5rem 1.5rem; /* Adjust padding for desired size */ }
                       `}</style>
                </div>
                <div className="container" style={{ marginTop: '', alignContent:"center" }}>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-12 mb-3" style={{}}>
                           <Card className="mx-auto my-6" style={{ height: "auto",maxHeight:'550px', border: "2px solid #D92027", borderRadius: "20px", padding:'0', maxWidth: '100%', width: 'auto' }}>
                               <Card.Body className="d-flex flex-column h-100">
                                    <Card.Title style={{ fontSize: '20px', textAlign: 'center', color: '#5b5b5b' }}>Vanity Lines</Card.Title>
                                    <Card.Title style={{ fontSize: '32px', textAlign: 'center', padding: '3%', fontWeight: 'bold' }}>₦20,000/yr</Card.Title>
                                    <Card.Text className="d-flex justify-content-center text-center w-[70%] mx-auto" style={{ fontStyle: 'italic' }}>You get a 0700/0800 toll free number + 1 mapped number</Card.Text>
                                    <Card.Text className="text-center" style={{color: '#5b5b5b'}}><b>Additional Line:   ₦15,000/yr</b></Card.Text>
                                    <Card.Title className="text-center" style={{ fontSize: '18px', color: '#5b5b5b' }}>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <svg className="me-2"width="20"height="20"viewBox="0 0 24 24"fill="none"xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 7L12 13"stroke="#000000"strokeWidth="1.6"strokeLinecap="round"className="my-path"></path>
                                                <path d="M11.9992 15.9414L11.9492 15.9414"stroke="blue"strokeWidth="1.6"strokeLinecap="round"className="my-path"></path>
                                                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"stroke="blue"strokeWidth="1.6"className="my-path"></path>
                                            </svg><b>Add Ons</b>
                                        </div>
                                    </Card.Title>
                                    <Card.Text className="text-center">
                                        <ul style={{ fontSize: '18px', color: '#5b5b5b'}}>
                                            <li style={{ paddingBottom: '1%' }}>IVR ₦20,000/yr</li>
                                            <li style={{ paddingBottom: '' }}>IVM ₦5,000 per upload annually</li>
                                        </ul>
                                    </Card.Text>
                                    <div className="mt-auto mb-3 d-flex justify-center"><Button className="w-[80%] px-4 py-2 text-white rounded-md" style={{ backgroundColor: '#D92027', border: 'none' }} size="lg">Get Started</Button></div>
                                 </Card.Body>
                           </Card>
                        </div>
                        <style>{`
                            .responsive-title {
                                font-size: 50px;
                                text-align: center;
                                font-weight: bold; /* Adjusts 'bold' to actual font-weight */
                                margin-bottom: 1rem;
                                color: #00000099
                            }

                            @media (max-width: 992px) { /* For tablets and small laptops */
                                .responsive-title {
                                    font-size: 40px;
                                }
                            }

                            @media (max-width: 768px) { /* For mobile devices */
                                .responsive-title {
                                    font-size: 30px;
                                }
                            }

                            @media (max-width: 576px) { /* For smaller mobile devices */
                                .responsive-title {
                                    font-size: 25px;
                                }
                            }
                        `}</style>
                   </div>
               </div>
            </div>
      </div>
    )
}
