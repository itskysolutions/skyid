import { useState } from "react";
import { Form, FormControl, Button, InputGroup, Card, ListGroup } from "react-bootstrap";
import Image from "react-bootstrap/Image";
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

type Results = { found: true; number: number } | { found: false; suggestions: number[] } | null;

export const Home = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Results>(null);
    const navigate = useNavigate();
  
    const availableNumbers = [1234, 5678, 91011, 1213, 1415]; // Replace with actual data
  
    const handleSearch = () => {
      const parsedQuery = parseInt(query, 10);
      if (availableNumbers.includes(parsedQuery)) {
        setResults({ found: true, number: parsedQuery });
      } else {
        const suggestions = availableNumbers
          .filter(num => Math.abs(num - parsedQuery) <= 10)
          .slice(0, 3); // Suggest up to 3 closest numbers
        setResults({ found: false, suggestions });
      }
    };

  return (
    <div style={{minHeight: "100vh",display: "flex",flexDirection: "column", minWidth: "100%",fontFamily: "Poppins, sans-serif",}}>
        <Header />
        <div>
        {/** Home Page */}
        <div className="text-center"style={{backgroundColor: "#ededed",backgroundImage: `url(${IMAGES.BACKGROUND})`,width: "auto",maxWidth: "100%",paddingTop: "2rem",boxSizing: "border-box",height: "638.85px",backgroundPosition: "center",backgroundSize: "cover",marginTop: "5%",}}>
            <div className="" style={{ marginTop: "100px" }}>
                <h1 className="text-center mb-4" style={{ textDecoration: "bold", fontSize: "60px" }}>My Identity, My Availability</h1>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <p className="mb-2"style={{color: "#5b5b5b",fontSize: "18px",width: "100%",maxWidth: "750px",height: "auto",maxHeight: "81px",margin: "0 auto", textAlign: "center", }}>
                    Sky ID offers businesses a unique 0700 toll number that can map multiple lines, ensuring that your
                    business is always available with an easy-to-remember number without displaying numerous contact
                    numbers.</p>
                </div>
                <div className=" mt-4 ms-3 d-flex justify-content-center">
                    <Form className="d-flex flex-wrap justify-content-center" style={{ width: "55%" }}onSubmit={(e) => e.preventDefault()}>
                        <InputGroup className="w-100">
                            <InputGroup.Text style={{borderTopLeftRadius: "10px", borderBottomLeftRadius:'10px'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5 18.5L21 21" stroke="black" stroke-width="null" stroke-linecap="round" className="my-path"></path>
                                <path d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="black" stroke-width="null" className="my-path"></path>
                            </svg></InputGroup.Text>
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
                                style={{backgroundColor: "#515151",color: "white",borderColor: "#515151",minWidth: "120px",height: "56px",borderRadius: "20px",marginTop: "5px",}}>
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
                                <Card.Body>The number is not available.</Card.Body>
                                {results.suggestions.length > 0 ? (
                                <>
                                    <Card.Body>Suggested available numbers:</Card.Body>
                                    <ListGroup>
                                    {results.suggestions.map((num, index) => (
                                        <ListGroup.Item key={index} style={{ backgroundColor: "#e9ecef" }}>
                                            <div className="d-flex justify-content-between align-items-center">
                                            <span>
                                            {num}
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
                                        </ListGroup.Item>
                                    ))}
                                    </ListGroup>
                                </>
                                ) : (
                                <Card.Body>No similar numbers available.</Card.Body>
                                )}
                            </>
                            )}
                        </Card.Body>
                        </Card>
                        )}
                    </Form>
                </div>
            </div>
        </div>
        {/**Image section */}
        <div
            className="container space-y-1 transition-all duration-500 justify-content-center"
        >
            <Image
                src={IMAGES.YOUTUBE}
                alt="Layered Image"
                className="layered-image img-fluid"
                style={{position: "relative", marginTop: results ? "20%" : "5%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", maxWidth: "1000px",height: "auto",maxHeight: "466px", borderRadius: "20px",transition: "margin-top 0.5s ease"}}
            rounded/>
            <style>{`
                .img-fluid {max-width: 100%;height: auto;}
            `}</style>
        </div>
        <div className="container"style={{ width: "auto", maxWidth: "1000px", alignContent:"center" }}>
            <div style={{alignContent:"center" }}>
                <div className="text-center"><h1 style={{ fontWeight:"bold",color: "#00000099" }}>ONE CALL CAN CHANGE THE NARRATIVE - MISSING A CALL COULD COST YOU YOUR BUSINESS! </h1></div>
                    <div className="d-flex justify-content-center" style={{ marginTop: "2%" }}>
                        <div style={{ width: "auto", maxWidth: "620px" }}>
                        <p style={{ textAlign: "center", fontSize: "18px", color: "#5b5b5b" }}>Call mapping is the process of masking/hiding/mapping phone numbers behind a 0700 number. I.e. a business can have a 0700 number and decide to mask his number and his employee’s number behind the 0700 number.</p>
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
