import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function UseCase(){
    return (
        <div>
            <div className="container justify-content-center" style={{ marginBottom: "150px" }}>
                <div style={{ marginTop: "60px", marginBottom: "50px", color: "#333333" }}><h1 style={{ color: "#00000099" }}>Use Cases</h1></div>
                <div>
                    <Row className="gy-4">
                        <Col className="custom-card" xs={12} md={4}>
                            <Card style={{height: "auto",maxHeight: "500px",width: "100%", maxWidth: "500px",backgroundColor: "#ffffff", border: "none",boxShadow: "0 15px 50px -12px #0000001C",borderRadius: "20px",}}>
                                <Card.Body>
                                    <div className="d-flex justify-content-center align-items-center circle-container container">
                                        <div className="circle">
                                            <svg width="48"height="48"viewBox="0 0 24 24"fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.49971 9.2001C3.67717 9.2001 2.19971 10.6776 2.19971 12.5001V13.5001C2.19971 15.3226 3.67717 16.8001 5.49971 16.8001C7.32225 16.8001 8.79971 15.3226 8.79971 13.5001V12.5001C8.79971 10.6776 7.32225 9.2001 5.49971 9.2001Z"fill="#D92027"className="my-path"></path>
                                                <path d="M18.4997 16.7997C20.3222 16.7997 21.7997 15.3222 21.7997 13.4997V12.4997C21.7997 10.6772 20.3222 9.19971 18.4997 9.19971C16.6772 9.19971 15.1997 10.6772 15.1997 12.4997V13.4997C15.1997 15.3222 16.6772 16.7997 18.4997 16.7997Z"fill="#D92027"className="my-path"></path>
                                                <path d="M12 21.7999C12.9941 21.7999 13.8 20.994 13.8 19.9999C13.8 19.0058 12.9941 18.1999 12 18.1999C11.0059 18.1999 10.2 19.0058 10.2 19.9999C10.2 20.994 11.0059 21.7999 12 21.7999Z" fill="#D92027"className="my-path"></path>
                                                <path fill-rule="evenodd"clip-rule="evenodd"d="M5.19976 8.99971C5.19976 5.24417 8.24422 2.19971 11.9998 2.19971C15.7553 2.19971 18.7998 5.24417 18.7998 8.99971V9.99971H17.1998V8.99971C17.1998 6.12783 14.8716 3.79971 11.9998 3.79971C9.12788 3.79971 6.79976 6.12783 6.79976 8.99971V9.99971H5.19976V8.99971Z"fill="#D92027"className="my-path"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd"d="M18.8001 15.9998C18.8001 18.6508 16.6511 20.7998 14.0001 20.7998H13.0001V19.1998H14.0001C15.7674 19.1998 17.2001 17.7671 17.2001 15.9998H18.8001Z"fill="#D92027"className="my-path"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <Card.Title className="text-center" style={{ color: "#333333" }}>Customer Service Optimization</Card.Title>
                                    <Card.Text className="text-center"style={{ color: "#5b5b5b", marginTop: "20px", fontSize: "18px" }}>Keep customer service seamless by ensuring that calls are always answered without exposing personal numbers.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} className="custom-card">
                            <Card  style={{paddingBottom: "9%",width: "100%",maxWidth: "500px",height: "auto",maxHeight: "360px",backgroundColor: "#ffffff",border: "none", boxShadow: "0 15px 50px -12px #0000001C",borderRadius: "20px",}}>
                                <Card.Body>
                                    <div className="d-flex justify-content-center align-items-center circle-container container">
                                        <div className="circle">
                                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none"xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.2385 3.20777H8.20121L8.20121 5.43442C8.20121 5.52201 8.20121 5.60769 8.20137 5.68979V6.04735C8.20137 6.43027 8.19894 6.53088 8.18646 6.60929C8.12051 7.0237 7.84289 7.37356 7.4543 7.53195C7.38078 7.56192 7.28335 7.58715 6.91045 7.67416C6.17402 7.84599 5.96086 7.88904 5.84038 7.8872C5.16899 7.87697 4.63664 7.31784 4.65935 6.64675C4.66343 6.52632 4.71688 6.31553 4.92462 5.58842L5.156 4.7786C5.36267 4.05524 5.42506 3.87113 5.5131 3.73975C5.66332 3.51558 5.88471 3.34859 6.14152 3.26573C6.29203 3.21717 6.4862 3.20777 7.2385 3.20777Z"fill="#D92027"className="my-path"></path>
                                                <path d="M8.05822 9.0136C8.42122 8.86564 8.74272 8.64607 9.00764 8.3739C9.26795 8.63784 9.58057 8.85001 9.9297 8.99463C10.2272 9.11785 10.5328 9.16507 10.8524 9.18688C11.1588 9.20778 11.5313 9.20777 11.9746 9.20776H12.0278C12.4711 9.20777 12.8436 9.20778 13.15 9.18688C13.4696 9.16507 13.7752 9.11785 14.0727 8.99463C14.4219 8.84999 14.7346 8.63778 14.9949 8.3738C15.2598 8.64602 15.5813 8.86562 15.9444 9.0136C16.1509 9.09777 16.3825 9.1517 16.6736 9.21949L16.8467 9.25992C17.4096 9.39165 17.8396 9.4923 18.1866 9.48702C18.7919 9.47779 19.3487 9.27737 19.8012 8.94456L19.8012 15.4406C19.8012 16.5296 19.8012 17.4437 19.7208 18.1707C19.6357 18.9404 19.4474 19.6442 18.9811 20.2109C18.5148 20.7777 17.9357 21.0065 17.3023 21.11C16.7042 21.2077 15.952 21.2077 15.056 21.2077L14.8012 21.2077L14.8012 16.3608C14.8012 15.9299 14.8013 15.53 14.7574 15.2038C14.7089 14.8428 14.5938 14.4547 14.274 14.1349C13.9541 13.815 13.5661 13.7 13.2051 13.6514C12.8788 13.6076 12.479 13.6076 12.0481 13.6077H11.9543C11.5234 13.6076 11.1235 13.6076 10.7973 13.6514C10.4363 13.7 10.0483 13.815 9.72839 14.1349C9.40853 14.4547 9.29347 14.8428 9.24493 15.2038C9.20107 15.53 9.20112 15.9299 9.20118 16.3608L9.20118 21.2077L8.94631 21.2077C8.05031 21.2077 7.29819 21.2077 6.70004 21.11C6.0667 21.0065 5.48759 20.7777 5.02128 20.2109C4.55497 19.6442 4.36669 18.9404 4.28154 18.1707C4.20112 17.4437 4.20114 16.5296 4.20117 15.4407L4.20118 8.94437C4.65365 9.2773 5.2106 9.47779 5.816 9.48702C6.16297 9.4923 6.59301 9.39166 7.15589 9.25992L7.329 9.21949C7.62012 9.1517 7.85171 9.09777 8.05822 9.0136Z"fill="#D92027"className="my-path"></path>
                                                <path d="M9.80137 3.20776V5.6641C9.80197 6.00329 9.80484 6.2491 9.81838 6.44762C9.83464 6.6858 9.86354 6.79694 9.89255 6.86698C10.0143 7.16102 10.248 7.39463 10.542 7.51642C10.612 7.54543 10.7232 7.57434 10.9614 7.59059C11.2067 7.60733 11.5243 7.60776 12.0012 7.60776C12.4781 7.60776 12.7957 7.60733 13.0411 7.59059C13.2792 7.57434 13.3904 7.54543 13.4604 7.51642C13.7545 7.39463 13.9881 7.16102 14.1099 6.86698C14.1389 6.79694 14.1678 6.6858 14.184 6.44762C14.2008 6.20225 14.2012 5.88465 14.2012 5.40776V3.20776H9.80137Z"fill="#D92027"className="my-path"></path>
                                                <path d="M16.7641 3.20777C17.5164 3.20777 17.7106 3.21717 17.8611 3.26573C18.1179 3.34859 18.3393 3.51558 18.4895 3.73975C18.5776 3.87113 18.6399 4.05524 18.8466 4.7786L19.078 5.58842C19.2857 6.31553 19.3392 6.52632 19.3433 6.64675C19.366 7.31784 18.8336 7.87697 18.1622 7.8872C18.0417 7.88904 17.8286 7.84599 17.0922 7.67416C16.7193 7.58715 16.6218 7.56192 16.5483 7.53195C16.1597 7.37356 15.8821 7.0237 15.8162 6.60929C15.8037 6.53088 15.8012 6.43027 15.8012 6.04735V3.20777H16.7641Z"fill="#D92027"className="my-path"></path>
                                                <path d="M19.7796 2.79224L19.8012 2.82326V2.79224H19.7796Z"fill="#D92027"className="my-path"></path>
                                                <path d="M4.20118 2.79224H4.22304L4.20118 2.82363L4.20118 2.79224Z"fill="#D92027"className="my-path"></path>
                                                <path d="M10.8458 15.2766C10.8458 15.2766 10.8473 15.2751 10.8524 15.2727C10.8486 15.2756 10.8458 15.2766 10.8458 15.2766Z"fill="#D92027"className="my-path"></path>
                                                <path d="M11.0105 15.2372C10.9276 15.2483 10.8833 15.2608 10.8622 15.2687C10.8543 15.2898 10.8418 15.3341 10.8307 15.417C10.8029 15.6236 10.8012 15.9137 10.8012 16.4077V19.6077H13.2012V16.4077C13.2012 15.9137 13.1995 15.6236 13.1717 15.417C13.1606 15.3341 13.148 15.2898 13.1402 15.2687C13.119 15.2608 13.0747 15.2483 12.9919 15.2372C12.7852 15.2094 12.4952 15.2077 12.0012 15.2077C11.5072 15.2077 11.2171 15.2094 11.0105 15.2372Z"fill="#D92027"className="my-path"></path>
                                                <path d="M13.1566 15.2766C13.1566 15.2766 13.1538 15.2756 13.15 15.2727C13.1551 15.2751 13.1566 15.2766 13.1566 15.2766Z"fill="#D92027"className="my-path"></path>
                                                <path d="M13.1361 15.2589C13.1333 15.2551 13.1322 15.2522 13.1322 15.2522C13.1322 15.2522 13.1338 15.2538 13.1361 15.2589Z"fill="#D92027"className="my-path"></path>
                                                <path d="M10.8662 15.2589C10.8686 15.2538 10.8701 15.2522 10.8701 15.2522C10.8701 15.2522 10.8691 15.2551 10.8662 15.2589Z"fill="#D92027"className="my-path"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <Card.Title className="text-center" style={{ color: "#333333" }}>Small & Medium Sized Businesses</Card.Title>
                                    <Card.Text className="text-center"style={{ color: "#5b5b5b", marginTop: "20px", fontSize: "18px" }}>Establish a professional identity with a single, unified phone number.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} className="custom-card">
                            <Card  style={{paddingBottom: "17%",width: "100%",maxWidth: "500px",height: "auto",maxHeight: "360px",backgroundColor: "#ffffff",border: "none",boxShadow: "0 15px 50px -12px #0000001C",borderRadius: "20px",}}>
                                <Card.Body>
                                    <div className="d-flex justify-content-center align-items-center circle-container container">
                                        <div className="circle">
                                            <svg width="48"height="48"viewBox="0 0 24 24"fill="none"xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.3085 20.8002C18.3703 20.5436 18.4031 20.2757 18.4031 20.0001V15.0001C18.4031 13.7289 17.9639 12.5603 17.2289 11.6377C17.7579 11.3584 18.3609 11.2002 19.0008 11.2002C21.0995 11.2002 22.8008 12.9015 22.8008 15.0002V19.0002C22.8008 19.9943 21.9949 20.8002 21.0008 20.8002H18.3085Z"fill="#D92027"className="my-path"></path>
                                                <path d="M6.77835 11.6395C6.04417 12.5617 5.60547 13.7297 5.60547 15.0001V20.0001C5.60547 20.2757 5.63826 20.5436 5.70014 20.8002H3.00313C2.00901 20.8002 1.20312 19.9943 1.20312 19.0002V15.0002C1.20312 12.9015 2.90444 11.2002 5.00312 11.2002C5.64436 11.2002 6.2485 11.359 6.77835 11.6395Z"fill="#D92027"className="my-path"></path>
                                                <path d="M12.0008 2.2002C9.9021 2.2002 8.20078 3.90151 8.20078 6.0002C8.20078 8.09888 9.9021 9.8002 12.0008 9.8002C14.0995 9.8002 15.8008 8.09888 15.8008 6.0002C15.8008 3.90151 14.0995 2.2002 12.0008 2.2002Z"fill="#D92027"className="my-path"></path>
                                                <path d="M5.00078 5.2002C3.73053 5.2002 2.70078 6.22994 2.70078 7.5002C2.70078 8.77045 3.73053 9.8002 5.00078 9.8002C6.27104 9.8002 7.30078 8.77045 7.30078 7.5002C7.30078 6.22994 6.27104 5.2002 5.00078 5.2002Z"fill="#D92027"className="my-path"></path>
                                                <path d="M19.0008 5.2002C17.7305 5.2002 16.7008 6.22994 16.7008 7.5002C16.7008 8.77045 17.7305 9.8002 19.0008 9.8002C20.271 9.8002 21.3008 8.77045 21.3008 7.5002C21.3008 6.22994 20.271 5.2002 19.0008 5.2002Z"fill="#D92027"className="my-path"></path>
                                                <path d="M10.9984 11.2002C8.89976 11.2002 7.19844 12.9015 7.19844 15.0002V20.0002C7.19844 20.9943 8.00433 21.8002 8.99844 21.8002H14.9984C15.9926 21.8002 16.7984 20.9943 16.7984 20.0002V15.0002C16.7984 12.9015 15.0971 11.2002 12.9984 11.2002H10.9984Z"fill="#D92027"className="my-path"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <Card.Title className="text-center" style={{ color: "#333333" }}> Sales & Support Teams</Card.Title>
                                    <Card.Text className="text-center"style={{ color: "#5b5b5b", marginTop: "20px", fontSize: "18px" }} >Guarantee that customers reach the first available agent without needing multiple numbers.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <style>{`
                         .circle-container { height: 15vh; background-color: #ffffff; }
                         .circle {display: flex;justify-content: center;align-items: center;width: 92px; height: 92px; border-radius: 50%; background-color: #fff2f2;}
                        // @media (max-width: 768px) {
                        //     .use-case-card {margin-bottom: 20px;width: 100%;
                        // }  
                        .use-case-card {
                            width: 100%;
                            max-width: 320px;
                            margin: auto;
                            background-color: #ffffff;
                            border: none;
                            box-shadow: 0 15px 50px -12px #0000001C;
                            border-radius: 20px;
                            color: #333333;
                        }

                        .icon-container {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-bottom: 20px;
                        }

                        .use-case-card .card-title {
                            color: #333333;
                            font-weight: 600;
                        }

                        .use-case-card .card-text {
                            color: #5b5b5b;
                            font-size: 18px;
                        }

                        @media (max-width: 100%) {
                            .custom-card {
                                max-width: 100% !important;
                                width: 100% !important;
                                margin: 0 auto; 
                            }
                        }

                    `}</style>
                </div>
            </div>
        </div>
    )
}