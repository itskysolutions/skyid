import IMAGES from "../constant/Images";
import {  Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function HowSkyIDWorks() {
    return (
      <div>
        <div style={{ marginBottom: "100px" }}>
            <div style={{ marginTop: "60px", marginBottom: "30px" }}>
              <h1 style={{ color: "#00000099" }}>How Sky ID Works </h1>
              <p style={{ marginTop: "20px", color: "#5b5b5b", fontSize: "18px" }}>
                With a Sky ID 0700 number, you can map several lines, so when a customer calls, the system routes the
                call to primary contact. If the primary number is unavailable , the system intelligently redirects the
                call to the next available team member.
              </p>
              <Button className="me-3 px-4 py-3 rounded-md" style={{backgroundColor: "#D92027",border: "none",}}>Get Started</Button>
              <div style={{ marginTop: "40px", marginBottom: "150px" }}><Image src={IMAGES.SKYID} style={{width: "100%",maxWidth: "1059px", height: "auto"}}rounded/></div>
            </div>
          </div>
      </div>
    )
}
