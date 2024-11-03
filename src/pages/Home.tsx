import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Accordion, Row, Col} from 'react-bootstrap';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import SKY_ID_WORKS_IMAGE from '/Users/ummiaishaibrahim/Downloads/github/sky-id-landingpage/src/assets/Frame 3975.png';
import image2 from '/Users/ummiaishaibrahim/Downloads/github/sky-id-landingpage/src/assets/image2.png';
import backgroundImage from '/Users/ummiaishaibrahim/Downloads/github/sky-id-landingpage/src/assets/69701.png';
//import Container from 'react-bootstrap';


export const Home = () => {


  return (
    <div style={{minHeight: "100vh", display: "flex", flexDirection:"column", minWidth: "100%", fontFamily:'Poppins, sans-serif'}}>
        <Header/>
        <div className='main-content items-center justify-center py-20 flex flex-grow'>
            {/** Home Page */}
            <div 
                className='text-center'
                style={{ 
                    backgroundColor: '#ededed', 
                    backgroundImage: `url(${backgroundImage})`,
                    width:'auto',
                    //height:'auto',
                    maxWidth: '100%', 
                    paddingTop: '2rem', 
                    boxSizing: 'border-box',
                    height: '638.85px',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    marginTop:"5%"}}>
                <div className='' style={{marginTop: "100px"}}>
                    <h1 className="text-center mb-4" style={{textDecoration: 'bold', fontSize: '60px'}}>My Identity, My Availability</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <p className="mb-2" 
                        style={{
                            color: '#5b5b5b',
                            fontSize: '18px',
                            width: '100%',
                            maxWidth: '750px',
                            height: 'auto',
                            maxHeight: '81px',
                            margin: '0 auto', // Centers the paragraph
                            textAlign: 'center' // Ensures text is centered inside the paragraph
                        }}>
                            Sky ID offers businesses a unique 0700 toll number that can map multiple lines, 
                            ensuring that your business is always available with an easy-to-remember number 
                            without displaying numerous contact numbers.
                        </p>
                    </div>
                    <div className=" mt-4 ms-3 d-flex justify-content-center">
                        <Button 
                            className="me-3 px-4 py-3 rounded-md" 
                            style={{ 
                                backgroundColor: '#D92027', 
                                border: 'none',}}>
                            Get Started
                        </Button>
                        <Button 
                            className="px-5 py-3 rounded-md" 
                            style={{  
                                backgroundColor: 'white', 
                                color: '#D92027', 
                                borderColor: "#D92027",}}>
                            Sign In
                        </Button>
                    </div>
                </div>
            </div>
            {/**Image section */}
            <div className=" container mt-10 space-y-6 transition-all duration-500 justify-content-center">
                 <Image 
                        src={image2} 
                        alt="Layered Image" 
                        className="layered-image img-fluid" 
                        style={{ 
                        position: 'absolute', 
                        top: '97%', // Adjust positioning
                        left: '50%', // Adjust positioning
                        transform: 'translate(-50%, -50%)', // Shift back by half of its size
                        width: '100%', // Adjust size as needed
                        maxWidth: '1000px',
                        height: 'auto',
                        maxHeight:'466px',
                        //Index: 0, // Ensure the image is behind the content
                        borderRadius: '20px' 
                    }}rounded/> 
            </div>
            <div className="container mt-5" style={{ marginTop: '50%', paddingTop: '25%', width: 'auto', maxWidth: '1000px'}}>
                <div className="" style={{}}>
                    <div className="pt-5">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color:'#00000099',width:'auto', height:'auto', maxWidth:'650px', maxHeight:'174px', fontWeight: 'bold'}}>
                        SKY ID, ENSURING YOU ARE REACHABLE ANYTIME, ANYWHERE...
                        </h1>
                        <p className="text-lg text-gray-600 mb-8" style={{width:'auto', height:'auto', maxWidth:'650px', maxHeight:'81px'}}>
                        Call mapping is the process of masking/hiding/mapping phone numbers behind a 0700 
                        number. I.e. a business can have a 0700 number and decide to mask his
                        number and his employee’s number behind the 0700 number.
                        </p>
                    </div>
                     {/**Features section */}
                    <div id="features" style={{ paddingTop: '9%', paddingBottom: '10%' }}>
                        <Card style={{ border:'none' , width: 'auto', maxWidth: '1000px', height:'auto', maxHeight:'100%'}}>
                            <Card.Body style={{background: "#04D02A0F"}}>
                            <Card.Title className="text-2xl font-semibold" style={{ color: '#333333' }}><h2 className="text-2xl font-semibold ps-4 pt-3" style={{color:'#333333'}}>Key Features</h2></Card.Title>
                                <Row className="gx-4 gy-4">
                                    {/* First Column with Three Features */}
                                    <Col xs={12} md={6}>
                                        <Card style={{ border: 'none'}}>
                                            <Card.Body style={{ background: "#04D02A0F" }}>
                                                <Row className="mt-3">
                                                    {/* Feature 1 */}
                                                    <Col xs={12} className="mb-4">
                                                        <Card style={{ border: 'none' }}>
                                                            <Card.Body style={{ backgroundColor: "#04D02A0F" }}>
                                                                <svg style={{paddingBottom:'2%', paddingRight:'2%'}} width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Contact Icon">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.84417 3.10743C11.026 1.89713 12.9725 1.89713 14.1543 3.10743L14.8049 3.77372C15.0747 4.05001 15.4458 4.20376 15.832 4.19916L16.7632 4.18807C18.4546 4.16792 19.831 5.5443 19.8109 7.23577L19.7998 8.16695C19.7952 8.55309 19.9489 8.92426 20.2252 9.19406L20.8915 9.84465C22.1018 11.0265 22.1018 12.973 20.8915 14.1548L20.2252 14.8054C19.9489 15.0751 19.7952 15.4463 19.7998 15.8325L19.8109 16.7636C19.831 18.4551 18.4546 19.8315 16.7632 19.8113L15.832 19.8003C15.4458 19.7957 15.0747 19.9494 14.8049 20.2257L14.1543 20.892C12.9725 22.1023 11.026 22.1023 9.84417 20.892L9.19357 20.2257C8.92378 19.9494 8.5526 19.7957 8.16646 19.8003L7.23528 19.8113C5.54381 19.8315 4.16743 18.4551 4.18758 16.7636L4.19867 15.8325C4.20327 15.4463 4.04952 15.0751 3.77323 14.8054L3.10694 14.1548C1.89664 12.973 1.89664 11.0265 3.10694 9.84465L3.77323 9.19405C4.04952 8.92426 4.20327 8.55309 4.19867 8.16695L4.18758 7.23577C4.16743 5.5443 5.54381 4.16792 7.23528 4.18807L8.16646 4.19916C8.5526 4.20376 8.92378 4.05001 9.19357 3.77372L9.84417 3.10743ZM15.6256 10.6252C15.9381 10.3128 15.9381 9.80622 15.6256 9.4938C15.3132 9.18138 14.8067 9.18138 14.4943 9.4938L11.482 12.5061C11.2775 12.7105 11.1526 12.8339 11.0591 12.9137C10.9656 12.8339 10.8406 12.7105 10.6362 12.5061L9.56482 11.4347C9.2524 11.1223 8.74586 11.1223 8.43344 11.4347C8.12103 11.7471 8.12103 12.2537 8.43345 12.5661L9.53408 13.6667C9.74144 13.8742 9.94954 14.0824 10.1457 14.2321C10.3696 14.4029 10.6691 14.5708 11.0591 14.5708C11.4491 14.5708 11.7486 14.4029 11.9725 14.2321C12.1686 14.0824 12.3767 13.8742 12.5841 13.6667L15.6256 10.6252Z" fill="green"></path>
                                                                </svg>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="">
                                                                    <Card.Title>Single-Number Contact</Card.Title>
                                                                    <Card.Text style={{ color: '#5b5b5b', fontSize: '18px' }}>
                                                                        Simplify customer experience by using a single 0700 number for all your team members.
                                                                    </Card.Text>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    {/* Feature 2 */}
                                                    <Col xs={12} className="mb-4">
                                                        <Card style={{ border: 'none' }}>
                                                            <Card.Body style={{ backgroundColor: "#04D02A0F" }}>
                                                                <svg style={{paddingBottom:'2%', paddingRight:'2%'}} width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Contact Icon">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.84417 3.10743C11.026 1.89713 12.9725 1.89713 14.1543 3.10743L14.8049 3.77372C15.0747 4.05001 15.4458 4.20376 15.832 4.19916L16.7632 4.18807C18.4546 4.16792 19.831 5.5443 19.8109 7.23577L19.7998 8.16695C19.7952 8.55309 19.9489 8.92426 20.2252 9.19406L20.8915 9.84465C22.1018 11.0265 22.1018 12.973 20.8915 14.1548L20.2252 14.8054C19.9489 15.0751 19.7952 15.4463 19.7998 15.8325L19.8109 16.7636C19.831 18.4551 18.4546 19.8315 16.7632 19.8113L15.832 19.8003C15.4458 19.7957 15.0747 19.9494 14.8049 20.2257L14.1543 20.892C12.9725 22.1023 11.026 22.1023 9.84417 20.892L9.19357 20.2257C8.92378 19.9494 8.5526 19.7957 8.16646 19.8003L7.23528 19.8113C5.54381 19.8315 4.16743 18.4551 4.18758 16.7636L4.19867 15.8325C4.20327 15.4463 4.04952 15.0751 3.77323 14.8054L3.10694 14.1548C1.89664 12.973 1.89664 11.0265 3.10694 9.84465L3.77323 9.19405C4.04952 8.92426 4.20327 8.55309 4.19867 8.16695L4.18758 7.23577C4.16743 5.5443 5.54381 4.16792 7.23528 4.18807L8.16646 4.19916C8.5526 4.20376 8.92378 4.05001 9.19357 3.77372L9.84417 3.10743ZM15.6256 10.6252C15.9381 10.3128 15.9381 9.80622 15.6256 9.4938C15.3132 9.18138 14.8067 9.18138 14.4943 9.4938L11.482 12.5061C11.2775 12.7105 11.1526 12.8339 11.0591 12.9137C10.9656 12.8339 10.8406 12.7105 10.6362 12.5061L9.56482 11.4347C9.2524 11.1223 8.74586 11.1223 8.43344 11.4347C8.12103 11.7471 8.12103 12.2537 8.43345 12.5661L9.53408 13.6667C9.74144 13.8742 9.94954 14.0824 10.1457 14.2321C10.3696 14.4029 10.6691 14.5708 11.0591 14.5708C11.4491 14.5708 11.7486 14.4029 11.9725 14.2321C12.1686 14.0824 12.3767 13.8742 12.5841 13.6667L15.6256 10.6252Z" fill="green"></path>
                                                                </svg>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="">
                                                                        <Card.Title>Enhanced Accessibility</Card.Title>
                                                                        <Card.Text style={{ color: '#5b5b5b', fontSize: '18px' }}>
                                                                            Customers can always reach you, improving retention and satisfaction.
                                                                        </Card.Text>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    {/* Feature 3 */}
                                                    <Col xs={12} className="mb-4">
                                                        <Card style={{ border: 'none' }}>
                                                            <Card.Body style={{ backgroundColor: "#04D02A0F" }}>
                                                                <svg style={{paddingBottom:'2%', paddingRight:'2%'}} width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Contact Icon">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.84417 3.10743C11.026 1.89713 12.9725 1.89713 14.1543 3.10743L14.8049 3.77372C15.0747 4.05001 15.4458 4.20376 15.832 4.19916L16.7632 4.18807C18.4546 4.16792 19.831 5.5443 19.8109 7.23577L19.7998 8.16695C19.7952 8.55309 19.9489 8.92426 20.2252 9.19406L20.8915 9.84465C22.1018 11.0265 22.1018 12.973 20.8915 14.1548L20.2252 14.8054C19.9489 15.0751 19.7952 15.4463 19.7998 15.8325L19.8109 16.7636C19.831 18.4551 18.4546 19.8315 16.7632 19.8113L15.832 19.8003C15.4458 19.7957 15.0747 19.9494 14.8049 20.2257L14.1543 20.892C12.9725 22.1023 11.026 22.1023 9.84417 20.892L9.19357 20.2257C8.92378 19.9494 8.5526 19.7957 8.16646 19.8003L7.23528 19.8113C5.54381 19.8315 4.16743 18.4551 4.18758 16.7636L4.19867 15.8325C4.20327 15.4463 4.04952 15.0751 3.77323 14.8054L3.10694 14.1548C1.89664 12.973 1.89664 11.0265 3.10694 9.84465L3.77323 9.19405C4.04952 8.92426 4.20327 8.55309 4.19867 8.16695L4.18758 7.23577C4.16743 5.5443 5.54381 4.16792 7.23528 4.18807L8.16646 4.19916C8.5526 4.20376 8.92378 4.05001 9.19357 3.77372L9.84417 3.10743ZM15.6256 10.6252C15.9381 10.3128 15.9381 9.80622 15.6256 9.4938C15.3132 9.18138 14.8067 9.18138 14.4943 9.4938L11.482 12.5061C11.2775 12.7105 11.1526 12.8339 11.0591 12.9137C10.9656 12.8339 10.8406 12.7105 10.6362 12.5061L9.56482 11.4347C9.2524 11.1223 8.74586 11.1223 8.43344 11.4347C8.12103 11.7471 8.12103 12.2537 8.43345 12.5661L9.53408 13.6667C9.74144 13.8742 9.94954 14.0824 10.1457 14.2321C10.3696 14.4029 10.6691 14.5708 11.0591 14.5708C11.4491 14.5708 11.7486 14.4029 11.9725 14.2321C12.1686 14.0824 12.3767 13.8742 12.5841 13.6667L15.6256 10.6252Z" fill="green"></path>
                                                                </svg>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="">
                                                                        <Card.Title>Brand Visibility</Card.Title>
                                                                        <Card.Text style={{ color: '#5b5b5b', fontSize: '18px' }}>
                                                                            Stand out with a recognizable number that reinforces your brand.
                                                                        </Card.Text>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    {/* Second Column with Two Features */}
                                    <Col xs={12} md={6}>
                                        <Card style={{border: 'none' }}>
                                            <Card.Body style={{ background: "#04D02A0F" }}>
                                                <Row className="mt-3">
                                                    {/* Feature 1 */}
                                                    <Col xs={12} className="mb-4">
                                                        <Card style={{ border: 'none' }}>
                                                            <Card.Body style={{ backgroundColor: "#04D02A0F" }}>
                                                                <svg style={{paddingBottom:'2%', paddingRight:'2%'}} width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Contact Icon">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.84417 3.10743C11.026 1.89713 12.9725 1.89713 14.1543 3.10743L14.8049 3.77372C15.0747 4.05001 15.4458 4.20376 15.832 4.19916L16.7632 4.18807C18.4546 4.16792 19.831 5.5443 19.8109 7.23577L19.7998 8.16695C19.7952 8.55309 19.9489 8.92426 20.2252 9.19406L20.8915 9.84465C22.1018 11.0265 22.1018 12.973 20.8915 14.1548L20.2252 14.8054C19.9489 15.0751 19.7952 15.4463 19.7998 15.8325L19.8109 16.7636C19.831 18.4551 18.4546 19.8315 16.7632 19.8113L15.832 19.8003C15.4458 19.7957 15.0747 19.9494 14.8049 20.2257L14.1543 20.892C12.9725 22.1023 11.026 22.1023 9.84417 20.892L9.19357 20.2257C8.92378 19.9494 8.5526 19.7957 8.16646 19.8003L7.23528 19.8113C5.54381 19.8315 4.16743 18.4551 4.18758 16.7636L4.19867 15.8325C4.20327 15.4463 4.04952 15.0751 3.77323 14.8054L3.10694 14.1548C1.89664 12.973 1.89664 11.0265 3.10694 9.84465L3.77323 9.19405C4.04952 8.92426 4.20327 8.55309 4.19867 8.16695L4.18758 7.23577C4.16743 5.5443 5.54381 4.16792 7.23528 4.18807L8.16646 4.19916C8.5526 4.20376 8.92378 4.05001 9.19357 3.77372L9.84417 3.10743ZM15.6256 10.6252C15.9381 10.3128 15.9381 9.80622 15.6256 9.4938C15.3132 9.18138 14.8067 9.18138 14.4943 9.4938L11.482 12.5061C11.2775 12.7105 11.1526 12.8339 11.0591 12.9137C10.9656 12.8339 10.8406 12.7105 10.6362 12.5061L9.56482 11.4347C9.2524 11.1223 8.74586 11.1223 8.43344 11.4347C8.12103 11.7471 8.12103 12.2537 8.43345 12.5661L9.53408 13.6667C9.74144 13.8742 9.94954 14.0824 10.1457 14.2321C10.3696 14.4029 10.6691 14.5708 11.0591 14.5708C11.4491 14.5708 11.7486 14.4029 11.9725 14.2321C12.1686 14.0824 12.3767 13.8742 12.5841 13.6667L15.6256 10.6252Z" fill="green"></path>
                                                                </svg>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="">
                                                                        <Card.Title>Seamless Call Routing</Card.Title>
                                                                        <Card.Text style={{ color: '#5b5b5b', fontSize: '18px' }}>
                                                                            Our call mapping technology ensures calls are directed to the next available line without hassle
                                                                        </Card.Text>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    {/* Feature 2 */}
                                                    <Col xs={12} className="mb-4">
                                                        <Card style={{ border: 'none' }}>
                                                            <Card.Body style={{ backgroundColor: "#04D02A0F" }}>
                                                                <svg style={{paddingBottom:'2%', paddingRight:'2%'}} width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Contact Icon">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.84417 3.10743C11.026 1.89713 12.9725 1.89713 14.1543 3.10743L14.8049 3.77372C15.0747 4.05001 15.4458 4.20376 15.832 4.19916L16.7632 4.18807C18.4546 4.16792 19.831 5.5443 19.8109 7.23577L19.7998 8.16695C19.7952 8.55309 19.9489 8.92426 20.2252 9.19406L20.8915 9.84465C22.1018 11.0265 22.1018 12.973 20.8915 14.1548L20.2252 14.8054C19.9489 15.0751 19.7952 15.4463 19.7998 15.8325L19.8109 16.7636C19.831 18.4551 18.4546 19.8315 16.7632 19.8113L15.832 19.8003C15.4458 19.7957 15.0747 19.9494 14.8049 20.2257L14.1543 20.892C12.9725 22.1023 11.026 22.1023 9.84417 20.892L9.19357 20.2257C8.92378 19.9494 8.5526 19.7957 8.16646 19.8003L7.23528 19.8113C5.54381 19.8315 4.16743 18.4551 4.18758 16.7636L4.19867 15.8325C4.20327 15.4463 4.04952 15.0751 3.77323 14.8054L3.10694 14.1548C1.89664 12.973 1.89664 11.0265 3.10694 9.84465L3.77323 9.19405C4.04952 8.92426 4.20327 8.55309 4.19867 8.16695L4.18758 7.23577C4.16743 5.5443 5.54381 4.16792 7.23528 4.18807L8.16646 4.19916C8.5526 4.20376 8.92378 4.05001 9.19357 3.77372L9.84417 3.10743ZM15.6256 10.6252C15.9381 10.3128 15.9381 9.80622 15.6256 9.4938C15.3132 9.18138 14.8067 9.18138 14.4943 9.4938L11.482 12.5061C11.2775 12.7105 11.1526 12.8339 11.0591 12.9137C10.9656 12.8339 10.8406 12.7105 10.6362 12.5061L9.56482 11.4347C9.2524 11.1223 8.74586 11.1223 8.43344 11.4347C8.12103 11.7471 8.12103 12.2537 8.43345 12.5661L9.53408 13.6667C9.74144 13.8742 9.94954 14.0824 10.1457 14.2321C10.3696 14.4029 10.6691 14.5708 11.0591 14.5708C11.4491 14.5708 11.7486 14.4029 11.9725 14.2321C12.1686 14.0824 12.3767 13.8742 12.5841 13.6667L15.6256 10.6252Z" fill="green"></path>
                                                                </svg>
                                                                <div className="d-flex align-items-start">
                                                                    <div>
                                                                        <Card.Title>Additional Add-Ons</Card.Title>
                                                                        <Card.Text style={{ color: '#5b5b5b', fontSize: '18px' }}>
                                                                            <ul style={{color: '#5b5b5b', fontSize: '18px'}}>
                                                                            <li className='pb-4'>Interactive Voice Response: Enhance customer engagement with self-service options.</li>
                                                                            <li className='pb-4'>Call Center Solutions: Tailor your customer support with our 24/7 call center services.</li>
                                                                            <li className='pb-4'>Virtual PBX: Get a fully virtual switchboard for managing incoming calls.</li>
                                                                        </ul>
                                                                        </Card.Text>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div> 
                </div>
                {/** How Sky id works section */}
                <div style={{marginBottom: '100px'}}>
                    <div style={{marginTop: '60px', marginBottom:'30px'}}>
                        <h1 style={{ color:'#00000099'}}>How Sky ID Works </h1>
                        <p style={{marginTop: "20px" ,color: '#5b5b5b', fontSize: '18px'}}>
                            With a Sky ID 0700 number, you can map several lines, so when a customer calls, 
                            the system routes the call to primary contact. If the primary number is unavailable , 
                            the system intelligently redirects the call to the next available team member.
                        </p>
                        <Button 
                            className="me-3 px-4 py-3 rounded-md" 
                            style={{ 
                                backgroundColor: '#D92027', 
                                border: 'none',}}>
                            Get Started
                        </Button>
                        <div style={{marginTop: '40px', marginBottom:'150px'}}>
                        <Image 
                            src={SKY_ID_WORKS_IMAGE}
                                style={{
                                    width: '100%',
                                    maxWidth: '1059px', // Ensures the image doesn't exceed this size
                                    height: 'auto', // Maintains aspect ratio
                                }} 
                            rounded
                        />
                        </div>
                    </div>
                </div>
                {/**Use case section */}
                    <div className='container justify-content-center'style={{ marginBottom: '150px' }}>
                        <div style={{ marginTop: '60px', marginBottom: '50px', color: '#333333' }}>
                            <h1 style={{ color:'#00000099'}}>Use Cases</h1>
                        </div>
                        <div>
                            <Row className="gy-4">
                                <Col xs={12} md={4}>
                                    <Card style={{ height:'370px', width: '100%', maxWidth: '320px', backgroundColor: "#ffffff", border: 'none', boxShadow: '0 15px 50px -12px #0000001C', borderRadius:'20px' }}>
                                        <Card.Body>
                                            <div className='d-flex justify-content-center align-items-center circle-container container'>
                                                <div className='circle'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.49971 9.2001C3.67717 9.2001 2.19971 10.6776 2.19971 12.5001V13.5001C2.19971 15.3226 3.67717 16.8001 5.49971 16.8001C7.32225 16.8001 8.79971 15.3226 8.79971 13.5001V12.5001C8.79971 10.6776 7.32225 9.2001 5.49971 9.2001Z" fill="#D92027" className="my-path"></path>
                                                    <path d="M18.4997 16.7997C20.3222 16.7997 21.7997 15.3222 21.7997 13.4997V12.4997C21.7997 10.6772 20.3222 9.19971 18.4997 9.19971C16.6772 9.19971 15.1997 10.6772 15.1997 12.4997V13.4997C15.1997 15.3222 16.6772 16.7997 18.4997 16.7997Z" fill="#D92027" className="my-path"></path>
                                                    <path d="M12 21.7999C12.9941 21.7999 13.8 20.994 13.8 19.9999C13.8 19.0058 12.9941 18.1999 12 18.1999C11.0059 18.1999 10.2 19.0058 10.2 19.9999C10.2 20.994 11.0059 21.7999 12 21.7999Z" fill="#D92027" className="my-path"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.19976 8.99971C5.19976 5.24417 8.24422 2.19971 11.9998 2.19971C15.7553 2.19971 18.7998 5.24417 18.7998 8.99971V9.99971H17.1998V8.99971C17.1998 6.12783 14.8716 3.79971 11.9998 3.79971C9.12788 3.79971 6.79976 6.12783 6.79976 8.99971V9.99971H5.19976V8.99971Z" fill="#D92027" className="my-path"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8001 15.9998C18.8001 18.6508 16.6511 20.7998 14.0001 20.7998H13.0001V19.1998H14.0001C15.7674 19.1998 17.2001 17.7671 17.2001 15.9998H18.8001Z" fill="#D92027" className="my-path"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <Card.Title className='text-center' style={{ color: "#333333" }}>Customer Service Optimization</Card.Title>
                                            <Card.Text className='text-center' style={{ color: '#5b5b5b', marginTop: "20px", fontSize: '18px' }}>
                                                Businesses can use SKY ID to provide better customer service by ensuring no calls are missed and employees are reachable without displaying personal numbers.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Card style={{ paddingBottom:'17%', width: '100%', maxWidth: '320px', height:'auto',maxHeight:'414px', backgroundColor: "#ffffff", border: 'none', boxShadow: '0 15px 50px -12px #0000001C', borderRadius:'20px' }}>
                                        <Card.Body>
                                            <div className='d-flex justify-content-center align-items-center circle-container container'>
                                                <div className='circle'>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.2385 3.20777H8.20121L8.20121 5.43442C8.20121 5.52201 8.20121 5.60769 8.20137 5.68979V6.04735C8.20137 6.43027 8.19894 6.53088 8.18646 6.60929C8.12051 7.0237 7.84289 7.37356 7.4543 7.53195C7.38078 7.56192 7.28335 7.58715 6.91045 7.67416C6.17402 7.84599 5.96086 7.88904 5.84038 7.8872C5.16899 7.87697 4.63664 7.31784 4.65935 6.64675C4.66343 6.52632 4.71688 6.31553 4.92462 5.58842L5.156 4.7786C5.36267 4.05524 5.42506 3.87113 5.5131 3.73975C5.66332 3.51558 5.88471 3.34859 6.14152 3.26573C6.29203 3.21717 6.4862 3.20777 7.2385 3.20777Z" fill="#D92027" className="my-path"></path>
                                                        <path d="M8.05822 9.0136C8.42122 8.86564 8.74272 8.64607 9.00764 8.3739C9.26795 8.63784 9.58057 8.85001 9.9297 8.99463C10.2272 9.11785 10.5328 9.16507 10.8524 9.18688C11.1588 9.20778 11.5313 9.20777 11.9746 9.20776H12.0278C12.4711 9.20777 12.8436 9.20778 13.15 9.18688C13.4696 9.16507 13.7752 9.11785 14.0727 8.99463C14.4219 8.84999 14.7346 8.63778 14.9949 8.3738C15.2598 8.64602 15.5813 8.86562 15.9444 9.0136C16.1509 9.09777 16.3825 9.1517 16.6736 9.21949L16.8467 9.25992C17.4096 9.39165 17.8396 9.4923 18.1866 9.48702C18.7919 9.47779 19.3487 9.27737 19.8012 8.94456L19.8012 15.4406C19.8012 16.5296 19.8012 17.4437 19.7208 18.1707C19.6357 18.9404 19.4474 19.6442 18.9811 20.2109C18.5148 20.7777 17.9357 21.0065 17.3023 21.11C16.7042 21.2077 15.952 21.2077 15.056 21.2077L14.8012 21.2077L14.8012 16.3608C14.8012 15.9299 14.8013 15.53 14.7574 15.2038C14.7089 14.8428 14.5938 14.4547 14.274 14.1349C13.9541 13.815 13.5661 13.7 13.2051 13.6514C12.8788 13.6076 12.479 13.6076 12.0481 13.6077H11.9543C11.5234 13.6076 11.1235 13.6076 10.7973 13.6514C10.4363 13.7 10.0483 13.815 9.72839 14.1349C9.40853 14.4547 9.29347 14.8428 9.24493 15.2038C9.20107 15.53 9.20112 15.9299 9.20118 16.3608L9.20118 21.2077L8.94631 21.2077C8.05031 21.2077 7.29819 21.2077 6.70004 21.11C6.0667 21.0065 5.48759 20.7777 5.02128 20.2109C4.55497 19.6442 4.36669 18.9404 4.28154 18.1707C4.20112 17.4437 4.20114 16.5296 4.20117 15.4407L4.20118 8.94437C4.65365 9.2773 5.2106 9.47779 5.816 9.48702C6.16297 9.4923 6.59301 9.39166 7.15589 9.25992L7.329 9.21949C7.62012 9.1517 7.85171 9.09777 8.05822 9.0136Z" fill="#D92027" className="my-path"></path>
                                                        <path d="M9.80137 3.20776V5.6641C9.80197 6.00329 9.80484 6.2491 9.81838 6.44762C9.83464 6.6858 9.86354 6.79694 9.89255 6.86698C10.0143 7.16102 10.248 7.39463 10.542 7.51642C10.612 7.54543 10.7232 7.57434 10.9614 7.59059C11.2067 7.60733 11.5243 7.60776 12.0012 7.60776C12.4781 7.60776 12.7957 7.60733 13.0411 7.59059C13.2792 7.57434 13.3904 7.54543 13.4604 7.51642C13.7545 7.39463 13.9881 7.16102 14.1099 6.86698C14.1389 6.79694 14.1678 6.6858 14.184 6.44762C14.2008 6.20225 14.2012 5.88465 14.2012 5.40776V3.20776H9.80137Z" fill="#D92027" className="my-path"></path>
                                                        <path d="M16.7641 3.20777C17.5164 3.20777 17.7106 3.21717 17.8611 3.26573C18.1179 3.34859 18.3393 3.51558 18.4895 3.73975C18.5776 3.87113 18.6399 4.05524 18.8466 4.7786L19.078 5.58842C19.2857 6.31553 19.3392 6.52632 19.3433 6.64675C19.366 7.31784 18.8336 7.87697 18.1622 7.8872C18.0417 7.88904 17.8286 7.84599 17.0922 7.67416C16.7193 7.58715 16.6218 7.56192 16.5483 7.53195C16.1597 7.37356 15.8821 7.0237 15.8162 6.60929C15.8037 6.53088 15.8012 6.43027 15.8012 6.04735V3.20777H16.7641Z" fill="#D92027" className="my-path"></path>
                                                        <path d="M19.7796 2.79224L19.8012 2.82326V2.79224H19.7796Z" fill="#D92027" className="my-path"></path>
                                                        <path d="M4.20118 2.79224H4.22304L4.20118 2.82363L4.20118 2.79224Z" fill="#D92027" className="my-path"></path>
                                                        <path d="M10.8458 15.2766C10.8458 15.2766 10.8473 15.2751 10.8524 15.2727C10.8486 15.2756 10.8458 15.2766 10.8458 15.2766Z" fill="#D92027" className="my-path"></path>
                                                        <path d="M11.0105 15.2372C10.9276 15.2483 10.8833 15.2608 10.8622 15.2687C10.8543 15.2898 10.8418 15.3341 10.8307 15.417C10.8029 15.6236 10.8012 15.9137 10.8012 16.4077V19.6077H13.2012V16.4077C13.2012 15.9137 13.1995 15.6236 13.1717 15.417C13.1606 15.3341 13.148 15.2898 13.1402 15.2687C13.119 15.2608 13.0747 15.2483 12.9919 15.2372C12.7852 15.2094 12.4952 15.2077 12.0012 15.2077C11.5072 15.2077 11.2171 15.2094 11.0105 15.2372Z" fill="#D92027" className="my-path"></path>
                                                        <path d="M13.1566 15.2766C13.1566 15.2766 13.1538 15.2756 13.15 15.2727C13.1551 15.2751 13.1566 15.2766 13.1566 15.2766Z" fill="#D92027" className="my-path"></path>
                                                        <path d="M13.1361 15.2589C13.1333 15.2551 13.1322 15.2522 13.1322 15.2522C13.1322 15.2522 13.1338 15.2538 13.1361 15.2589Z" fill="#D92027" className="my-path"></path>
                                                        <path d="M10.8662 15.2589C10.8686 15.2538 10.8701 15.2522 10.8701 15.2522C10.8701 15.2522 10.8691 15.2551 10.8662 15.2589Z" fill="#D92027" className="my-path"></path>
                                                    </svg>                           
                                                </div>
                                            </div>
                                            <Card.Title className='text-center' style={{ color: "#333333" }}>Small & Medium Sized Businesses</Card.Title>
                                            <Card.Text className='text-center' style={{ color: '#5b5b5b', marginTop: "20px", fontSize: '18px' }}>
                                                Helps small businesses maintain a professional identity and contact management through a unified phone number.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Card style={{ paddingBottom:'25%',width: '100%', maxWidth: '320px',height:'auto',maxHeight:'414px', backgroundColor: "#ffffff", border: 'none', boxShadow: '0 15px 50px -12px #0000001C', borderRadius:'20px' }}>
                                        <Card.Body>
                                            <div className='d-flex justify-content-center align-items-center circle-container container'>
                                                <div className='circle'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.3085 20.8002C18.3703 20.5436 18.4031 20.2757 18.4031 20.0001V15.0001C18.4031 13.7289 17.9639 12.5603 17.2289 11.6377C17.7579 11.3584 18.3609 11.2002 19.0008 11.2002C21.0995 11.2002 22.8008 12.9015 22.8008 15.0002V19.0002C22.8008 19.9943 21.9949 20.8002 21.0008 20.8002H18.3085Z" fill="#D92027" className="my-path"></path>
                                                    <path d="M6.77835 11.6395C6.04417 12.5617 5.60547 13.7297 5.60547 15.0001V20.0001C5.60547 20.2757 5.63826 20.5436 5.70014 20.8002H3.00313C2.00901 20.8002 1.20312 19.9943 1.20312 19.0002V15.0002C1.20312 12.9015 2.90444 11.2002 5.00312 11.2002C5.64436 11.2002 6.2485 11.359 6.77835 11.6395Z" fill="#D92027" className="my-path"></path>
                                                    <path d="M12.0008 2.2002C9.9021 2.2002 8.20078 3.90151 8.20078 6.0002C8.20078 8.09888 9.9021 9.8002 12.0008 9.8002C14.0995 9.8002 15.8008 8.09888 15.8008 6.0002C15.8008 3.90151 14.0995 2.2002 12.0008 2.2002Z" fill="#D92027" className="my-path"></path>
                                                    <path d="M5.00078 5.2002C3.73053 5.2002 2.70078 6.22994 2.70078 7.5002C2.70078 8.77045 3.73053 9.8002 5.00078 9.8002C6.27104 9.8002 7.30078 8.77045 7.30078 7.5002C7.30078 6.22994 6.27104 5.2002 5.00078 5.2002Z" fill="#D92027" className="my-path"></path>
                                                    <path d="M19.0008 5.2002C17.7305 5.2002 16.7008 6.22994 16.7008 7.5002C16.7008 8.77045 17.7305 9.8002 19.0008 9.8002C20.271 9.8002 21.3008 8.77045 21.3008 7.5002C21.3008 6.22994 20.271 5.2002 19.0008 5.2002Z" fill="#D92027" className="my-path"></path>
                                                    <path d="M10.9984 11.2002C8.89976 11.2002 7.19844 12.9015 7.19844 15.0002V20.0002C7.19844 20.9943 8.00433 21.8002 8.99844 21.8002H14.9984C15.9926 21.8002 16.7984 20.9943 16.7984 20.0002V15.0002C16.7984 12.9015 15.0971 11.2002 12.9984 11.2002H10.9984Z" fill="#D92027" className="my-path"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <Card.Title className='text-center' style={{ color: "#333333" }}>Sales & Support Teams</Card.Title>
                                            <Card.Text className='text-center' style={{ color: '#5b5b5b', marginTop: "20px", fontSize: '18px' }}>
                                                Teams can ensure that multiple agents receive calls without customers needing to dial multiple numbers.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <style>{`
                                .circle-container {
                                    height: 15vh; /* Full-screen height */
                                    background-color: #ffffff; /* White background */
                                }
                                .circle {
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    width: 92px; /* Adjust as needed */
                                    height: 92px; /* Adjust as needed */
                                    border-radius: 50%; /* Makes the div a circle */
                                    background-color: #fff2f2; /* Light gray color for the circle */
                                }
                                @media (max-width: 768px) {
                                    .use-case-card {
                                        margin-bottom: 20px;
                                        width: 100%;
                                    }
                                

                            `}</style>
                        </div>
                    </div>
                    {/** Why choose Sky ID */}
                    <div className='container justify-content-center' style={{ marginBottom: '100px'}}>
                        <Card style={{ width: '100%', maxWidth: '1000px', backgroundColor: "#D92027", borderRadius: "20px" }}>
                            <Card.Body>
                                <Card.Title style={{ color: 'white', fontSize: "44px", margin: "40px" }}>Why Choose Sky ID</Card.Title>
                                <div className='row row-cols-1 row-cols-md-3 g-3'>
                                    <div className='col d-flex justify-content-center'>
                                        <Card style={{ width: '100%', backgroundColor: "#D92027", border: 'none' }}>
                                            <Card.Body className=''>
                                                <svg style={{ marginBottom: '10%' }} width="52" height="52" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.9294 13.9106C10.9294 13.9106 10.9322 13.9093 10.9368 13.9086C10.9316 13.9106 10.9294 13.9106 10.9294 13.9106Z" fill="#ffffff" className="my-path"></path>
                                                    <path d="M10.9565 13.9086C10.9611 13.9093 10.9639 13.9106 10.9639 13.9106C10.9639 13.9106 10.9617 13.9106 10.9565 13.9086Z" fill="#ffffff" className="my-path"></path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.9399 2.19971H13.0596C14.8944 2.19969 16.3528 2.19968 17.4954 2.35329C18.6734 2.51166 19.6346 2.84639 20.3938 3.6056C21.153 4.3648 21.4878 5.32606 21.6461 6.50402C21.7997 7.64658 21.7997 9.10502 21.7997 10.9398V13.0596C21.7997 14.8944 21.7997 16.3528 21.6461 17.4954C21.4878 18.6734 21.153 19.6346 20.3938 20.3938C19.6346 21.153 18.6734 21.4878 17.4954 21.6461C16.3528 21.7997 14.8944 21.7997 13.0596 21.7997H10.9398C9.10502 21.7997 7.64658 21.7997 6.50402 21.6461C5.32606 21.4878 4.3648 21.153 3.6056 20.3938C2.84639 19.6346 2.51166 18.6734 2.35329 17.4954C2.19968 16.3528 2.19969 14.8944 2.19971 13.0596V10.9399C2.19969 9.10503 2.19968 7.64658 2.35329 6.50402C2.51166 5.32606 2.84639 4.3648 3.6056 3.6056C4.3648 2.84639 5.32606 2.51166 6.50402 2.35329C7.64658 2.19968 9.10504 2.19969 10.9399 2.19971ZM17.2359 9.96437C17.5483 9.65195 17.5483 9.14542 17.2359 8.833C16.9235 8.52058 16.4169 8.52058 16.1045 8.833L11.7952 13.1423C11.4459 13.4916 11.2396 13.6955 11.0738 13.822C11.0073 13.8727 10.9672 13.8952 10.9467 13.9045C10.9261 13.8952 10.886 13.8727 10.8195 13.822C10.6537 13.6955 10.4475 13.4916 10.0981 13.1423L8.56544 11.6096C8.25302 11.2972 7.74649 11.2972 7.43407 11.6096C7.12165 11.922 7.12165 12.4286 7.43407 12.741L8.99988 14.3068C9.30455 14.6116 9.58728 14.8944 9.84896 15.094C10.1386 15.315 10.4943 15.508 10.9467 15.508C11.399 15.508 11.7548 15.315 12.0444 15.094C12.3061 14.8944 12.5888 14.6116 12.8934 14.3068L17.2359 9.96437Z" fill="#ffffff" className="my-path"></path>
                                                </svg>
                                                <Card.Title style={{ color: "white" }}>Always Reachable</Card.Title>
                                                <Card.Text style={{ color: 'white', marginTop: "20px" }}>
                                                    Customers enjoy reliable access, and businesses experience increased sales.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className='col d-flex justify-content-center'>
                                        <Card style={{ width: 'auto', maxWidth:'100%', height:'auto', maxHeight: '100%', backgroundColor:"#D92027", border: 'none'}}>
                                            <Card.Body>
                                                <svg style={{marginBottom: '10%'}} width="52" height="52" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.9294 13.9106C10.9294 13.9106 10.9322 13.9093 10.9368 13.9086C10.9316 13.9106 10.9294 13.9106 10.9294 13.9106Z" fill="#ffffff" className="my-path"></path>
                                                    <path d="M10.9565 13.9086C10.9611 13.9093 10.9639 13.9106 10.9639 13.9106C10.9639 13.9106 10.9617 13.9106 10.9565 13.9086Z" fill="#ffffff" className="my-path"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9399 2.19971H13.0596C14.8944 2.19969 16.3528 2.19968 17.4954 2.35329C18.6734 2.51166 19.6346 2.84639 20.3938 3.6056C21.153 4.3648 21.4878 5.32606 21.6461 6.50402C21.7997 7.64658 21.7997 9.10502 21.7997 10.9398V13.0596C21.7997 14.8944 21.7997 16.3528 21.6461 17.4954C21.4878 18.6734 21.153 19.6346 20.3938 20.3938C19.6346 21.153 18.6734 21.4878 17.4954 21.6461C16.3528 21.7997 14.8944 21.7997 13.0596 21.7997H10.9398C9.10502 21.7997 7.64658 21.7997 6.50402 21.6461C5.32606 21.4878 4.3648 21.153 3.6056 20.3938C2.84639 19.6346 2.51166 18.6734 2.35329 17.4954C2.19968 16.3528 2.19969 14.8944 2.19971 13.0596V10.9399C2.19969 9.10503 2.19968 7.64658 2.35329 6.50402C2.51166 5.32606 2.84639 4.3648 3.6056 3.6056C4.3648 2.84639 5.32606 2.51166 6.50402 2.35329C7.64658 2.19968 9.10504 2.19969 10.9399 2.19971ZM17.2359 9.96437C17.5483 9.65195 17.5483 9.14542 17.2359 8.833C16.9235 8.52058 16.4169 8.52058 16.1045 8.833L11.7952 13.1423C11.4459 13.4916 11.2396 13.6955 11.0738 13.822C11.0073 13.8727 10.9672 13.8952 10.9467 13.9045C10.9261 13.8952 10.886 13.8727 10.8195 13.822C10.6537 13.6955 10.4475 13.4916 10.0981 13.1423L8.56544 11.6096C8.25302 11.2972 7.74649 11.2972 7.43407 11.6096C7.12165 11.922 7.12165 12.4286 7.43407 12.741L8.99988 14.3068C9.30455 14.6116 9.58728 14.8944 9.84896 15.094C10.1386 15.315 10.4943 15.508 10.9467 15.508C11.399 15.508 11.7548 15.315 12.0444 15.094C12.3061 14.8944 12.5888 14.6116 12.8934 14.3068L17.2359 9.96437Z" fill="#ffffff" className="my-path"></path>
                                                </svg>
                                                <Card.Title className='' style={{color:"white"}}>Flexible Mapping</Card.Title>
                                                <Card.Text className='' style={{color: 'white', marginTop: "20px" }}>
                                                    Link multiple numbers to one line providing flexible distribution of calls based on availability.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className='col d-flex justify-content-center'>
                                        <Card style={{width: 'auto', maxWidth:'100%', height:'auto', maxHeight: '100%', backgroundColor:"#D92027",  border: 'none'}}>
                                            <Card.Body>
                                                <svg style={{ marginBottom: '10%'}} width="52" height="52" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.9294 13.9106C10.9294 13.9106 10.9322 13.9093 10.9368 13.9086C10.9316 13.9106 10.9294 13.9106 10.9294 13.9106Z" fill="#ffffff" className="my-path"></path>
                                                    <path d="M10.9565 13.9086C10.9611 13.9093 10.9639 13.9106 10.9639 13.9106C10.9639 13.9106 10.9617 13.9106 10.9565 13.9086Z" fill="#ffffff" className="my-path"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9399 2.19971H13.0596C14.8944 2.19969 16.3528 2.19968 17.4954 2.35329C18.6734 2.51166 19.6346 2.84639 20.3938 3.6056C21.153 4.3648 21.4878 5.32606 21.6461 6.50402C21.7997 7.64658 21.7997 9.10502 21.7997 10.9398V13.0596C21.7997 14.8944 21.7997 16.3528 21.6461 17.4954C21.4878 18.6734 21.153 19.6346 20.3938 20.3938C19.6346 21.153 18.6734 21.4878 17.4954 21.6461C16.3528 21.7997 14.8944 21.7997 13.0596 21.7997H10.9398C9.10502 21.7997 7.64658 21.7997 6.50402 21.6461C5.32606 21.4878 4.3648 21.153 3.6056 20.3938C2.84639 19.6346 2.51166 18.6734 2.35329 17.4954C2.19968 16.3528 2.19969 14.8944 2.19971 13.0596V10.9399C2.19969 9.10503 2.19968 7.64658 2.35329 6.50402C2.51166 5.32606 2.84639 4.3648 3.6056 3.6056C4.3648 2.84639 5.32606 2.51166 6.50402 2.35329C7.64658 2.19968 9.10504 2.19969 10.9399 2.19971ZM17.2359 9.96437C17.5483 9.65195 17.5483 9.14542 17.2359 8.833C16.9235 8.52058 16.4169 8.52058 16.1045 8.833L11.7952 13.1423C11.4459 13.4916 11.2396 13.6955 11.0738 13.822C11.0073 13.8727 10.9672 13.8952 10.9467 13.9045C10.9261 13.8952 10.886 13.8727 10.8195 13.822C10.6537 13.6955 10.4475 13.4916 10.0981 13.1423L8.56544 11.6096C8.25302 11.2972 7.74649 11.2972 7.43407 11.6096C7.12165 11.922 7.12165 12.4286 7.43407 12.741L8.99988 14.3068C9.30455 14.6116 9.58728 14.8944 9.84896 15.094C10.1386 15.315 10.4943 15.508 10.9467 15.508C11.399 15.508 11.7548 15.315 12.0444 15.094C12.3061 14.8944 12.5888 14.6116 12.8934 14.3068L17.2359 9.96437Z" fill="#ffffff" className="my-path"></path>
                                                </svg>
                                                <Card.Title className='' style={{color:"white"}}>Additional Features</Card.Title>
                                                <Card.Text className='' style={{color: 'white', marginTop: "20px"}}>
                                                    Enhance your service with options like Interactive Voice Response, Call center Solutions, and VirtualPBX.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                {/** Pricing */}
                    <div id='pricing' style={{marginBottom: '', paddingTop: '17%'}} className='container'>
                        <div className='text-center'>
                            <h1 style={{fontSize:"60px", color:'#00000099' }}>Choose the Plan for You</h1>
                        </div>
                        <div className='d-flex justify-content-center' style={{marginTop:"2%"}}>
                            <div style={{width:'auto', maxWidth:'620px'}}>
                                <p style={{textAlign: 'center', fontSize:'18px', color: '#5b5b5b'}}>Choose the right plan for your team with affordable rates and flexible options,
                                so you're always reachable</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{}}>
                            <Button href="#" size="lg" className="rounded-button" style={{backgroundColor:'#000000', borderColor:'#000000'}} disabled>
                                Annual Subscription
                            </Button>
                            <style>{`
                                .rounded-button {
                                border-radius: 30px; /* Adjust this value for more or less curve */
                                padding: 0.5rem 1.5rem; /* Adjust padding for desired size */ }
                            `}</style>
                        </div>
                        <div className="container" style={{ marginTop: '3%' }}>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" style={{paddingRight: '40%'}}>
                                <Card style={{ height: "auto",maxHeight:'435px', width:'350px', border: "2px solid #D92027", borderRadius: "20px", padding:'20px' , gap:"40px"}}>
                                    <Card.Body className="d-flex flex-column h-100">
                                    <Card.Title style={{ fontSize: '20px', textAlign: 'center', color: '#5b5b5b' }}>First Line</Card.Title>
                                    <Card.Title style={{ fontSize: '32px', textAlign: 'center', padding: '10%', fontWeight: 'bold' }}>20,000/yr</Card.Title>
                                    <Card.Title style={{ fontSize: '18px', color: '#5b5b5b'}}>
                                        <svg style={{}} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 7L12 13" stroke="#000000" strokeWidth="1.6" strokeLinecap="round" className="my-path"></path>
                                        <path d="M11.9992 15.9414L11.9492 15.9414" stroke="#000000" strokeWidth="1.6" strokeLinecap="round" className="my-path"></path>
                                        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" strokeWidth="1.6" className="my-path"></path>
                                        </svg>
                                        Add-Ons priced separately
                                    </Card.Title>
                                    <Card.Text>
                                        <ul style={{ fontSize: '18px', color: '#5b5b5b'}}>
                                        <li style={{ paddingBottom: '4%' }}>Interactive Voice Response</li>
                                        <li style={{ paddingBottom: '4%' }}>Call Center Solutions</li>
                                        <li style={{}}>Virtual PBX</li>
                                        </ul>
                                    </Card.Text>
                                    <div className="mt-auto">
                                        <Button className="w-100 px-4 py-2 text-white rounded-md" style={{ backgroundColor: '#D92027', border: 'none' }} size="lg">
                                        Get Started
                                        </Button>
                                    </div>
                                    </Card.Body>
                                </Card>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <Card style={{height: "auto",maxHeight:'435px', width:'350px', border: "2px solid #D92027", borderRadius: "20px", padding:'20px' , gap:"40px" }}>
                                    <Card.Body className="d-flex flex-column h-100">
                                    <Card.Title style={{ fontSize: '20px', textAlign: 'center', color: '#5b5b5b' }}>Additional Lines</Card.Title>
                                    <Card.Title style={{ fontSize: '32px', textAlign: 'center', padding: '10%', fontWeight: 'bold' }}>15,000/each</Card.Title>
                                    <Card.Title style={{ fontSize: '18px', color: '#5b5b5b'}}>
                                        <svg style={{ }} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 7L12 13" stroke="#000000" strokeWidth="1.6" strokeLinecap="round" className="my-path"></path>
                                        <path d="M11.9992 15.9414L11.9492 15.9414" stroke="#000000" strokeWidth="1.6" strokeLinecap="round" className="my-path"></path>
                                        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" strokeWidth="1.6" className="my-path"></path>
                                        </svg>
                                        Add-Ons priced separately
                                    </Card.Title>
                                    <Card.Text>
                                        <ul style={{ fontSize: '18px', color: '#5b5b5b'}}>
                                        <li style={{ paddingBottom: '4%' }}>Interactive Voice Response</li>
                                        <li style={{ paddingBottom: '4%' }}>Call Center Solutions</li>
                                        <li style={{}}>Virtual PBX</li>
                                        </ul>
                                    </Card.Text>
                                    <div className="mt-auto">
                                        <Button className="w-100 px-4 py-2 text-white rounded-md" style={{ backgroundColor: '#D92027', border: 'none' }} size="lg">
                                        Get Started
                                        </Button>
                                    </div>
                                    </Card.Body>
                                </Card>
                                </div>
                        </div>
                    </div>
                    </div>
                {/** FAQ */}
                     <div className='container' id='faqs' style={{marginBottom: '100px', paddingTop: '10%'}}>
                        <div style={{marginTop: '60px', marginBottom:'30px'}}>
                            <h1 style={{ color:'#00000099'}}>FAQs</h1>
                        </div>
                        <div className='' style={{marginTop:"2%"}}>
                            <Accordion style={{paddingBottom:'2%',width:'auto', maxWidth:'1106px'}}>
                                <Accordion.Item eventKey="0" style={{border:'2px solid #D3D3D3' }}>
                                    <Accordion.Header className="custom-header">
                                        <strong>1. How do I get started with Sky ID for my business?</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Our return policy allows returns within 30 days of purchase, provided the item is in original condition.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            
                            <Accordion style={{paddingBottom:'2%'}}>
                                <Accordion.Item eventKey="1" style={{border:'2px solid #D3D3D3' }}>
                                    <Accordion.Header>
                                        <strong>2. What is call mapping, and why is it beneficial?</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Once your order ships, you will receive a tracking number by email to follow your delivery progress.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion style={{paddingBottom:'2%'}}>
                                <Accordion.Item eventKey="2" style={{border:'2px solid #D3D3D3' }}>
                                    <Accordion.Header>
                                        <strong>3. How does Sky ID improve brand visibility?</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Yes, we offer international shipping to most countries. Shipping fees and times vary by destination.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion style={{paddingBottom:'2%'}}>
                                <Accordion.Item eventKey="3" style={{border:'2px solid #D3D3D3' }}>
                                    <Accordion.Header>
                                        <strong>4. Can I add more lines to my 0700 number?</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Yes, we offer international shipping to most countries. Shipping fees and times vary by destination.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion style={{paddingBottom:'2%'}}>
                                <Accordion.Item eventKey="4" style={{border:'2px solid #D3D3D3' }}>
                                    <Accordion.Header>
                                           <strong>5. Can I add or change the phone numbers linked to my 0700 number?</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Yes, we offer international shipping to most countries. Shipping fees and times vary by destination.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion style={{paddingBottom:'2%'}}>
                                <Accordion.Item eventKey="5" style={{border:'2px solid #D3D3D3' }}>
                                    <Accordion.Header>
                                        <strong>6. What if a call doesn’t go through to the primary contact?</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Yes, we offer international shipping to most countries. Shipping fees and times vary by destination.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion style={{paddingBottom:'2%'}}>
                                <Accordion.Item eventKey="6" style={{border:'2px solid #D3D3D3' }}>
                                    <Accordion.Header>
                                        <strong>7. What additional features does Sky ID offer?</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Yes, we offer international shipping to most countries. Shipping fees and times vary by destination.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion style={{paddingBottom:'2%'}}>
                                <Accordion.Item eventKey="7" style={{border:'2px solid #D3D3D3' }}>
                                    <Accordion.Header>
                                        <strong>8. How much does the annual subscription cost?</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Yes, we offer international shipping to most countries. Shipping fees and times vary by destination.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion style={{paddingBottom:'5%'}}>
                                <Accordion.Item eventKey="8" style={{border:'2px solid #D3D3D3' }}>
                                    <Accordion.Header>
                                        <strong>9. Is technical support available if I have issues?</strong>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Yes, we offer international shipping to most countries. Shipping fees and times vary by destination.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <style>{`
                                .accordion {
                                --bs-accordion-btn-color: #5b5b5b;
                                --bs-accordion-active-bg: #ededed;
                                --bs-accordion-active-color: #5b5b5b;
                                }
                            `}</style>
                        </div>
                    </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
};


