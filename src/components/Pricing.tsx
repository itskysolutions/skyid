import { Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";

export  default function Pricing()  {
    return (
      <div>
            {/** Pricing */}
            <div id="pricing" style={{ marginBottom: "", paddingTop: "17%" }} className="container">
                <div className="text-center"><h1 style={{ fontSize: "60px", color: "#00000099" }}>Get your identity and availability </h1></div>
                    <div className="d-flex justify-content-center" style={{ marginTop: "2%" }}>
                        <div style={{ width: "auto", maxWidth: "620px" }}>
                        <p style={{ textAlign: "center", fontSize: "18px", color: "#5b5b5b" }}>Choose the right plan for your team with affordable rates and flexible options, so you're alwaysreachable</p>
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
                <div className="container" style={{ marginTop: '3%' }}>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" style={{paddingRight: '40%'}}>
                           <Card style={{ height: "auto",maxHeight:'484px', width:'350px', border: "2px solid #D92027", borderRadius: "20px", padding:'20px' , gap:"40px"}}>
                               <Card.Body className="d-flex flex-column h-100">
                                    <Card.Title style={{ fontSize: '20px', textAlign: 'center', color: '#5b5b5b' }}>Vanity Lines</Card.Title>
                                    <Card.Title style={{ fontSize: '32px', textAlign: 'center', padding: '10%', fontWeight: 'bold' }}>₦20,000/yr</Card.Title>
                                    <Card.Text style={{fontStyle:'italic'}}>You get a 0700/0800 number (toll free) + one mapping number </Card.Text>
                                    <Card.Text style={{ fontSize: '18px', color: '#5b5b5b'}}>
                                    <svg style={{paddingRight:''}} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 7L12 13" stroke="#000000" strokeWidth="1.6" strokeLinecap="round" className="my-path"></path>
                                        <path d="M11.9992 15.9414L11.9492 15.9414" stroke="blue" strokeWidth="1.6" strokeLinecap="round" className="my-path"></path>
                                        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="blue" strokeWidth="1.6" className="my-path"></path>
                                    </svg><b>Additional Features</b></Card.Text>
                                    <Card.Text>
                                        <ul style={{ fontSize: '18px', color: '#5b5b5b'}}>
                                            <li style={{ paddingBottom: '4%' }}>IVR ₦20,000/yr</li>
                                            <li style={{ paddingBottom: '' }}>IVM ₦5,000 per upload annually</li>
                                        </ul>
                                    </Card.Text>
                                    <div className="mt-auto"><Button className="w-100 px-4 py-2 text-white rounded-md" style={{ backgroundColor: '#D92027', border: 'none' }} size="lg">Get Started</Button></div>
                                 </Card.Body>
                           </Card>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                           <Card style={{height: "auto", maxHeight:'484px', width:'350px', border: "2px solid #D92027", borderRadius: "20px", padding:'20px' , gap:"40px" }}>
                               <Card.Body className="d-flex flex-column h-100">
                                    <Card.Title style={{ fontSize: '20px', textAlign: 'center', color: '#5b5b5b' }}>Each Additional Lines</Card.Title>
                                    <Card.Title style={{ fontSize: '32px', textAlign: 'center', padding: '10%', fontWeight: 'bold' }}>₦15,000/each</Card.Title>
                                    <Card.Title style={{ fontSize: '18px', color: '#5b5b5b', paddingTop:'25%'}}>
                                    <svg style={{paddingRight:''}} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 7L12 13" stroke="#000000" strokeWidth="1.6" strokeLinecap="round" className="my-path"></path>
                                        <path d="M11.9992 15.9414L11.9492 15.9414" stroke="blue" strokeWidth="1.6" strokeLinecap="round" className="my-path"></path>
                                        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="blue" strokeWidth="1.6" className="my-path"></path>
                                    </svg><b>Additional Features</b></Card.Title>
                                    <Card.Text>
                                        <ul style={{ fontSize: '18px', color: '#5b5b5b'}}>
                                            <li style={{ paddingBottom: '4%' }}>IVR ₦20,000/yr</li>
                                            <li style={{ paddingBottom: '4%' }}>IVM ₦5,000 per upload annually</li>
                                        </ul>
                                    </Card.Text>
                                    <div className="mt-auto"><Button className="w-100 px-4 py-2 text-white rounded-md" style={{ backgroundColor: '#D92027', border: 'none' }} size="lg">Get Started</Button></div>
                               </Card.Body>
                           </Card>
                       </div>
                   </div>
               </div>
            </div>
      </div>
    )
}
