import { useState } from "react";
import { Form, FormControl, Button, InputGroup, Card } from "react-bootstrap";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import IMAGES from "../constant/Images";
import Faq from "../components/Faq";
import Pricing from "../components/Pricing";
import WhyChooseSkyID from "../components/WhyChooseSkyID";
import HowSkyIDWorks from "../components/HowSkyIDWorks";
import UseCase from "../components/UseCase";
import AdditionalFeatures from "../components/AdditionalFeatures";
import Features from "../components/Features";
import {useNavigate } from "react-router-dom";
import {availableNumbers} from "../assets/data/index"

type Results = { found: true; number: number } | { found: false; suggestions: number[] } | null;

export const Home = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Results>(null);
    const navigate = useNavigate();
  
    const handleSearch = () => {
        const parsedQuery = parseInt(query, 10);
  
        if (availableNumbers.some(num => parseInt(num.Number, 10) === parsedQuery)) {
          setResults({ found: true, number: parsedQuery });
        } else {
          const suggestions = availableNumbers
            .filter(num => Math.abs(parseInt(num.Number, 10) - parsedQuery) <= 10)
            .slice(0, 3)
            .map(num => parseInt(num.Number, 10)); // Convert suggestions to numbers
            
          setResults({ found: false, suggestions });
        }
      };

  return (
    <div style={{minHeight: "100vh",display: "flex",flexDirection: "column", minWidth: "100%",fontFamily: "Poppins, sans-serif",}}>
        <Header />
        <div>
        {/** Home Page */}
        <div className="text-center "style={{backgroundColor: "#ededed",backgroundImage: `url(${IMAGES.BACKGROUND})`,width: "auto",maxWidth: "100%",paddingTop: "2rem",boxSizing: "border-box",height: "638.85px",backgroundPosition: "center",backgroundSize: "cover",marginTop: "2%",}}>
            <div className="" style={{ marginTop: "100px" }}>
                <h1 className="text-center mb-4 responsive-title">My Identity, My Availability</h1>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <p className="mb-2"style={{color: "#5b5b5b",fontSize: "18px",width: "100%",maxWidth: "750px",height: "auto",maxHeight: "81px",margin: "0 auto", textAlign: "center", }}>
                    Sky ID offers businesses a unique 0700 toll number that can map multiple lines, ensuring that your
                    business is always available with an easy-to-remember number without displaying numerous contact
                    numbers.</p>
                </div>
                <div className=" mt-4 ms-3 d-flex justify-content-center">
                <Form className="d-flex flex-column flex-md-row flex-wrap justify-content-center align-items-center" style={{ width: "100%", maxWidth: "800px" }} onSubmit={(e) => e.preventDefault()}>
                        <InputGroup className="w-100">
                            <InputGroup.Text style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: '10px' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5 18.5L21 21" stroke="black" strokeWidth="1" strokeLinecap="round" className="my-path"></path>
                                <path d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="black" strokeWidth="1" className="my-path"></path>
                            </svg>
                            </InputGroup.Text>
                            <FormControl 
                                type="search"
                                placeholder="Search For Availability"
                                className="me-2"aria-label="Search "
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                style={{ borderTopRightRadius: "10px", borderBottomRightRadius:'10px', minWidth: "250px", flex: "1 1 auto" }}/>
                            <Button 
                                onClick={handleSearch}
                                className="rounded-md"
                                style={{backgroundColor: "#515151",color: "white",borderColor: "#515151",minWidth: "120px",height: "56px",borderRadius: "10px",marginTop: "5px",}}>
                            {" "}Search</Button>
                        </InputGroup>
                        {results && (
                        <Card 
                        className="mt-4" 
                        style={{ width: '100%', backgroundColor: results.found ? '#d4edda' : '#f8d7da', color: results.found ? '#155724' : '#721c24', borderColor: results.found ? '#c3e6cb' : '#f5c6cb' }}
                        >
                        <Card.Body>
                            {results.found ? (
                                <div style={{display:"flex"}}>
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span>
                                            The number <strong>{results.number}</strong> is available!
                                            </span>
                                            <div className="">
                                                <Button
                                                className="px-4 py-2 rounded-md"
                                                onClick={() => navigate("/signup")}
                                                style={{
                                                    backgroundColor: "#D92027",
                                                    border: "none",
                                                }}
                                                >
                                                Continue
                                                </Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </div>
                            ) : (
                            <>
                             <Card.Body>
                                The number is not available.
                                </Card.Body>
                                {results.suggestions.length > 0 ? (
                                <>
                                    <Card.Body>Suggested available numbers:</Card.Body>
                                    <div className="d-flex flex-row flex-wrap gap-3 justify-content-center">
                                    {results.suggestions.map((num, index) => (
                                        <Card key={index} style={{ width: '14rem', backgroundColor: "#e9ecef" }}>
                                        <Card.Body className="d-flex flex-column align-items-center">
                                            <span className="mb-3">{num}</span>
                                            <Button
                                            className="px-4 py-2 rounded-md"
                                            onClick={() => navigate("/signup")}
                                            style={{
                                                backgroundColor: "#D92027",
                                                border: "none",
                                            }}
                                            >
                                            Continue
                                            </Button>
                                        </Card.Body>
                                        </Card>
                                    ))}
                                    </div>
                                </>
                                ) : (
                                <Card.Body>This number is not within our range!!! Search again!!!</Card.Body>
                                )}
                            </>
                            )}
                        </Card.Body>
                        </Card>
                        )}
                    </Form>
                </div>
                <style>{`
                .responsive-title {
                    font-size: 60px;
                    text-align: center;
                    font-weight: bold; /* Adjusts 'bold' to actual font-weight */
                    margin-bottom: 1rem;
                }

                @media (max-width: 992px) { /* For tablets and small laptops */
                    .responsive-title {
                        font-size: 48px;
                    }
                }

                @media (max-width: 768px) { /* For mobile devices */
                    .responsive-title {
                        font-size: 40px;
                    }
                }

                @media (max-width: 576px) { /* For smaller mobile devices */
                    .responsive-title {
                        font-size: 40px;
                    }
                }
                `}</style>
            </div>
        </div>
        {/**Video section */}
        <div
            className="container space-y-1 transition-all duration-500 justify-content-center"
        >
            <div style={{ position: "relative", marginTop: results ? "25%" : "5%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", maxWidth: "1000px", height: "auto", maxHeight: "1000px", borderRadius: "20px", transition: "margin-top 0.5s ease" }}>
                <div className="ratio ratio-21x9">
                    <iframe 
                    width="560" 
                    height="500" 
                    src="https://www.youtube.com/embed/8OsAxwyXheE?si=vGtPOdD2OEfP1xji" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    style={{
                        borderRadius: "20px"
                    }}></iframe> 
                </div>
            </div>
                <style>{`
                iframe {
                    max-width: 100%;
                    height: auto;
                }
                `}</style>
        </div>
        <div className="container"style={{ width: "auto", maxWidth: "1000px", alignContent:"center" }}>
            <div style={{alignContent:"center" }}>
                <div className="text-center"><h1 style={{ fontWeight:"bold",color: "#00000099" }}>ONE CALL CAN CHANGE THE NARRATIVE - MISSING A CALL COULD COST YOU YOUR BUSINESS! </h1></div>
                    <div className="d-flex justify-content-center" style={{ marginTop: "2%" }}>
                        <div style={{ width: "auto", maxWidth: "800px" }}>
                        <p style={{ textAlign: "center", fontSize: "18px", color: "#5b5b5b" }}>Call Mapping typically refers to the process of routing or forwarding calls based on certain rules or conditions, often used in call centers, VOIP systems, or PBX systems,  where a central phone number (like a 0700 / 0800 number) is used to mask or forward calls to various internal or employee phone numbers. This is often used by businesses to provide more control, privacy, and flexibility in their communications.I.e. a business can have a 0700 number and decide to map its number and its employee’s number behind the 0700 number.</p>
                    </div>
                </div>
            </div>
                {/**Features section */}
                <Features />

                {/** Additional features explanation */}
                <AdditionalFeatures />
          
                {/** How Sky id works section */}
                <HowSkyIDWorks />

                {/**Use case section */}
                <UseCase />

                {/** Why choose Sky ID */}
                <WhyChooseSkyID /> 

                {/**pricing */}
                <Pricing /> 

                {/** FAQ */}
                <div className="container" id="faqs" style={{ marginBottom: "100px", paddingTop: "10%" }}>
                    <div style={{ marginTop: "60px", marginBottom: "30px" }}>
                        <h1 style={{ color: "#00000099" }}>FAQs</h1>
                    </div>
                    <div>
                        <Faq/> 
                    </div>
                </div>       
                
            </div>
        </div>
        <Footer/>
    </div>
  );
};
