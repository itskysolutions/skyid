import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import logo from "../../public/logo.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <Navbar expand="lg" className="bg-white pb-4 shadow-custom" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" style={{ width: "173.05px", height: "50px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mt-2">
              {/* <Nav.Link href="/" className="me-5 text-black">Home</Nav.Link> */}
              <Nav.Link href="/#features" className="me-5 text-black">
                Features
              </Nav.Link>
              <Nav.Link href="/#pricing" className="me-5 text-black">
                Pricing
              </Nav.Link>
              <Nav.Link href="/#faqs" className="me-5 text-black">
                FAQs
              </Nav.Link>
              <div className="me-3 mb-2">
                <Button
                  className="px-4 py-2 rounded-md"
                  onClick={() => navigate("/signin")}
                  style={{
                    backgroundColor: "white",
                    color: "#D92027",
                    borderColor: "#D92027",
                  }}
                >
                  Sign In
                </Button>
              </div>
              <div className="">
                <Button
                  className="px-4 py-2 rounded-md"
                  onClick={() => navigate("/signup")}
                  style={{
                    backgroundColor: "#D92027",
                    border: "none",
                  }}
                >
                  Get Started
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* Style for custom tab colors */}
        <style>{`
          .shadow-custom {
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
          }
          html {
            scroll-behavior: smooth;
          }

        `}</style>
      </Navbar>
    </div>
  );
};
