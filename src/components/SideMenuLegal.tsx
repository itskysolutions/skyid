import { useState } from 'react';
import { Nav, Collapse, Navbar, Offcanvas } from 'react-bootstrap';

export const SideMenuLegal = () => {
    const [openTos, setOpenTos] = useState(false);
    const [openPrivacy, setOpenPrivacy] = useState(false);
    const [openCookie, setOpenCookie] = useState(false);
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleToggleTos = () => {
        setOpenTos(!openTos);
        setOpenPrivacy(false);
        setOpenCookie(false);
    };

    const handleTogglePrivacy = () => {
        setOpenPrivacy(!openPrivacy);
        setOpenTos(false);
        setOpenCookie(false);
    };

    const handleToggleCookie = () => {
        setOpenCookie(!openCookie);
        setOpenTos(false);
        setOpenPrivacy(false);
    };

    return (
        <div className="vertical-line" style={{
                        marginTop: '5%',
                        position: 'fixed', // Makes the side menu fixed
                        top: '0',
                        left: '0',
                        width: 'auto', // Adjust width as needed
                        maxWidth:'271.5px',
                        height: '100vh', // Full viewport height
                        overflowY: 'auto', // Scrollable if content exceeds height
                        backgroundColor: '#f8f9fa', // Light background color
                        padding: '20px',
                        boxSizing: 'border-box', 
                        paddingTop:'10%',
                    }}>
                        <div><a href="/" style={{ color: 'black'}}>
                                    <svg
                                        style={{ marginRight: '10px', marginBottom: "2%" }}
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.62722 5.37299C9.93964 5.68541 9.93964 6.19194 9.62722 6.50436L4.13157 12L9.62722 17.4957C9.93964 17.8081 9.93964 18.3146 9.62722 18.627C9.31481 18.9395 8.80827 18.9395 8.49585 18.627L2.43451 12.5657C2.12209 12.2533 2.12209 11.7467 2.43451 11.4343L8.49585 5.37299C8.80827 5.06057 9.31481 5.06057 9.62722 5.37299Z"
                                            fill="black"
                                            className="my-path"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2.2002 12C2.2002 11.5581 2.55837 11.2 3.0002 11.2H21.0002C21.442 11.2 21.8002 11.5581 21.8002 12C21.8002 12.4418 21.442 12.8 21.0002 12.8H3.0002C2.55837 12.8 2.2002 12.4418 2.2002 12Z"
                                            fill="black"
                                            className="my-path"
                                        />
                                    </svg>
                                    Home
                                </a></div>
                        
            <Navbar bg="light" expand="lg" >
                <div ><Navbar.Toggle onClick={() => setShowOffcanvas(true)} aria-controls="offcanvasNavbar"/></div>
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                    show={showOffcanvas}
                    onHide={() => setShowOffcanvas(false)}
                >
                    <Offcanvas.Header  closeButton></Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="flex-column mt-4 nav nav-tabs vertical-tabs" style={{ width: '250px' }} role="tablist">
                            <Nav.Item>
                                <div style={{ width: '100%', borderBottom: '2px solid #ccc', paddingBottom: '10px', boxSizing: 'border-box', paddingLeft: '5%' }}>
                                    <h4>Site Policy</h4>
                                </div>
                                <div style={{ paddingBottom: '1%' }}>
                                    <Nav.Link
                                        href="/policies/#tos"
                                        role="tab"
                                        aria-selected="true"
                                        onClick={handleToggleTos}
                                        aria-expanded={openTos}
                                        aria-controls="tos-submenu"
                                        style={{
                                            backgroundColor: openTos ? '#f0f0f0' : 'transparent',
                                            fontWeight: openTos ? 'bold' : 'normal',
                                            color: openTos ? '#D92027' : '#000',
                                            borderColor: openTos ? '#D92027' : '#D92027'
                                        }}
                                    >
                                        Terms Of Service
                                    </Nav.Link>
                                    <Collapse in={openTos}>
                                        <div id="tos-submenu">
                                            <Nav className="flex-column" style={{ marginLeft: "2%" , marginTop:'2%'}}>
                                                <Nav.Link href="/policies/#tos" role="tab" aria-controls="tos-overview">Acceptance of Terms and Conditions</Nav.Link>
                                                <Nav.Link href="/policies/#tos-rus" role="tab" aria-controls="tos-usage">Restrictions on the Use of the Service</Nav.Link>
                                                <Nav.Link href="/policies/#tos-dow" role="tab" aria-controls="tos-conditions">Disclaimer of Warranty</Nav.Link>
                                                <Nav.Link href="/policies/#tos-lol" role="tab" aria-controls="tos-conditions">Limitation of Liability</Nav.Link>
                                                <Nav.Link href="/policies/#tos-i" role="tab" aria-controls="tos-conditions">Indemnification</Nav.Link>
                                                <Nav.Link href="/policies/#tos-w" role="tab" aria-controls="tos-conditions">Waiver</Nav.Link>
                                                <Nav.Link href="/policies/#tos-tdn" role="tab" aria-controls="tos-conditions">Take-down Notice</Nav.Link>
                                                <Nav.Link href="/policies/#tos-t" role="tab" aria-controls="tos-conditions">Termination or Modification; Consequences of Violation of Terms of Service</Nav.Link>
                                                <Nav.Link href="/policies/#tos-fm" role="tab" aria-controls="tos-conditions">Force Majeure</Nav.Link>
                                                <Nav.Link href="/policies/#tos-gl" role="tab" aria-controls="tos-conditions">Governing Law</Nav.Link>
                                                <Nav.Link href="/policies/#tos-a" role="tab" aria-controls="tos-conditions">Acceptance</Nav.Link>
                                            </Nav>
                                        </div>
                                    </Collapse>
                                </div>

                                <div style={{ paddingBottom: '1%' }}>
                                    <Nav.Link
                                        href="/policies/#privacy"
                                        role="tab"
                                        aria-selected="true"
                                        onClick={handleTogglePrivacy}
                                        aria-expanded={openPrivacy}
                                        aria-controls="p-submenu"
                                        style={{
                                            backgroundColor: openPrivacy ? '#f0f0f0' : 'transparent',
                                            fontWeight: openPrivacy ? 'bold' : 'normal',
                                            color: openPrivacy ? '#D92027' : '#000',
                                            borderColor: openPrivacy ? '#D92027' : '#D92027'
                                        }}
                                    >
                                        Privacy Policy
                                    </Nav.Link>
                                    <Collapse in={openPrivacy}>
                                        <div id="p-submenu">
                                            <Nav className="flex-column" style={{ marginLeft: "2%" , marginTop:'2%'}}>
                                                <Nav.Link href="/policies/#p-pdi" role="tab" aria-controls="p-overview">Protection of Database Information</Nav.Link>
                                                <Nav.Link href="/policies/#p-dyi" role="tab" aria-controls="p-usage">Disclosure of your Information</Nav.Link>
                                                <Nav.Link href="/policies/#p-ldi" role="tab" aria-controls="p-conditions">Limitations on Disclosure of Information</Nav.Link>
                                                <Nav.Link href="/policies/#p-cli" role="tab" aria-controls="p-conditions">Confidential Information</Nav.Link>
                                                <Nav.Link href="/policies/#p-cpipi" role="tab" aria-controls="p-conditions">Copyright Policy/Intellectual Property Infringement</Nav.Link>
                                                <Nav.Link href="/policies/#p-n" role="tab" aria-controls="p-conditions">Notice and Procedure for Making Claims of Copyright or Intellectual Property Infringement.</Nav.Link>
                                                <Nav.Link href="/policies/#p-acl" role="tab" aria-controls="p-conditions">Automatically Collected Information</Nav.Link>
                                            </Nav>
                                        </div>
                                    </Collapse>
                                </div>

                                <div style={{ paddingBottom: '1%' }}>
                                    <Nav.Link href="/policies/#refund" role="tab" data-toggle="tab" aria-controls="refund" aria-selected="true" style={{ borderColor: '#D92027' }}> Refund Policy</Nav.Link>
                                </div>

                                <div style={{ paddingBottom: '1%' }}>
                                    <Nav.Link
                                        href="/policies/#cookie"
                                        role="tab"
                                        data-toggle="tab"
                                        aria-controls="cookie"
                                        aria-selected="true"
                                        onClick={handleToggleCookie}
                                        aria-expanded={openCookie}
                                        style={{
                                            backgroundColor: openCookie ? '#f0f0f0' : 'transparent',
                                            fontWeight: openCookie ? 'bold' : 'normal',
                                            color: openCookie ? '#D92027' : '#000',
                                            borderColor: openCookie ? '#D92027' : '#D92027'
                                        }}
                                    >
                                        Cookie Policy
                                    </Nav.Link>
                                    <Collapse in={openCookie}>
                                        <div id="c-submenu">
                                            <Nav className="flex-column" style={{ marginLeft: "2%" , marginTop:'2%'}}>
                                                <Nav.Link href="/policies/#c-uoc" role="tab" aria-controls="c-overview">Use of Cookies</Nav.Link>
                                                <Nav.Link href="/policies/#c-coc" role="tab" aria-controls="c-usage">Control of Cookies</Nav.Link>
                                            </Nav>
                                        </div>
                                    </Collapse>
                                </div>

                                <div style={{ paddingBottom: '1%' }}>
                                    <Nav.Link href="/policies/#contact" role="tab" data-toggle="tab" aria-controls="contact" aria-selected="true" style={{ borderColor: '#D92027' }}>Contact Us</Nav.Link>
                                </div>
                            </Nav.Item>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
            <style>{`
                .nav-tabs .nav-item .nav-link {
                    color: black;
                }
                .nav-tabs .nav-item .nav-link.active {
                    background-color: #D92027;
                    color: #FFFFFF;
                }
                .vertical-tabs .nav-link {
                    border-radius: 20; /* Remove rounded corners */
                    width: 100%; /* Full width of the container */
                }
                .vertical-tabs .nav-link:not(.active) {
                    background-color: #f8f9fa; /* Light background for inactive tabs */
                }
            `}</style>

                <style>{`
                    .vertical-line {
                        border-right: 2px solid #ccc; /* Vertical line */
                        height: 100%; /* Full height of the viewport */
                    }
            `}</style>
        </div>
    );
}
