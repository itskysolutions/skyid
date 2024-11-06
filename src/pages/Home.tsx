import { useState } from "react";
import { Form, FormControl, Button, InputGroup } from "react-bootstrap";
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


export const Home = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${query}`);
    // You can replace this alert with actual search logic.
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
                                value={query}onChange={(e) => setQuery(e.target.value)}
                                style={{ borderTopRightRadius: "10px", borderBottomRightRadius:'10px', minWidth: "250px", flex: "1 1 auto" }}/>
                            <Button 
                                onClick={handleSearch}
                                className="rounded-md"
                                style={{backgroundColor: "#515151",color: "white",borderColor: "#515151",minWidth: "120px",height: "56px",borderRadius: "20px",marginTop: "5px",}}>
                            {" "}Search</Button>
                        </InputGroup>
                    </Form>
                </div>
            </div>
        </div>
        {/**Image section */}
        <div className=" container mt-7 space-y-6 transition-all duration-500 justify-content-center">
            <Image
                src={IMAGES.YOUTUBE}
                alt="Layered Image"
                className="layered-image img-fluid"
                style={{position: "absolute",top: "97%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", maxWidth: "1000px",height: "auto",maxHeight: "466px", borderRadius: "20px",}}
            rounded/>
            <style>{`
                .img-fluid {max-width: 100%;height: auto;}
            `}</style>
        </div>
        <div className="container mt-5"style={{ marginTop: "50%", paddingTop: "25%", width: "auto", maxWidth: "1000px" }}>
            <div>
                <div className="pt-5">
                    <h1 className="text-3xl md:text-5xl"style={{color: "#00000099",width: "auto",height: "auto",maxWidth: "650px",maxHeight: "174px",fontWeight: "bold",marginBottom: "5%",}}>ONE CALL CAN CHANGE THE NARRATIVE - MISSING A CALL COULD COST YOU YOUR BUSINESS!</h1>
                    <p className="text-lg text-gray-600 mb-8"style={{ width: "auto", height: "auto", maxWidth: "650px", maxHeight: "81px" }}>Call mapping is the process of masking/hiding/mapping phone numbers behind a 0700 number. I.e. a business can have a 0700 number and decide to mask his number and his employee’s number behind the 0700 number. </p>
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

                {/** FAQ */}
                <Pricing />
         
                {/** FAQ */}
                <Faq />
            </div>
        </div>
        <Footer/>
    </div>
  );
};
