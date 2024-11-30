import IMAGES from "../constant/Images";
import {  Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function HowSkyIDWorks() {
    return (
      <div>
        <div style={{ marginBottom: "50px" }}>
            <div className="" style={{ marginTop: "60px"}}>
              <h1 className="text-center font-anjaEliane" style={{ color: "#00000099" }}>How Sky ID Works </h1>
              <p  style={{ marginTop: "20px", color: "#5b5b5b", fontSize: "18px", textAlign: "center" }}>
                With a Sky ID (0700/0800 number), you can map several lines, so when a customer calls, 
                and the primary contact is unavailable, the system intelligently redirects the
                call to the next available team member.
              </p>
            </div>
            <div className="d-flex justify-content-center"><Button className="me-3 px-4 py-3 rounded-md" style={{backgroundColor: "#D92027",border: "none",}}>Get Started</Button></div>
            <div style={{ marginTop: "40px", marginBottom: "150px" }}><Image src={IMAGES.SKYID} style={{width: "100%",maxWidth: "1059px", height: "auto"}}rounded/></div>
          </div>
      </div>
    )
}
