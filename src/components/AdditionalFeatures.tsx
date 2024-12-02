import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const data = [
  {
    title: "1. Interactive Voice Response (IVR)",
    text1: "IVR is a feature that lets customers choose options by pressing numbers on their phone when they call. It helps route the caller to the right person or department without needing a receptionist.",
    text2: "When a customer calls a textile shop, they hear, “Thank you for calling ABC Textiles! Press 1 for new orders, press 2 for delivery inquiries, or press 3 to speak with a sales representative.” This way, customers can quickly get connected to the right person based on their needs, keeping operations smooth even during busy times.",
  },
  {
    title: "2. Integrated Voice Messaging (IVM)",
    text1: "IVM plays recorded messages to callers, sharing useful information if no one can answer immediately or while the caller is on hold. It’s often paired with IVR to provide details about products, special promotions, or answers to common questions, helping small businesses manage high call volumes.",
    text2: "A textile shop uses IVM to keep callers informed if there’s a delay in answering. When a customer calls during peak hours and no one is available, they hear, “Thank you for calling! We will be with you shortly. Did you know our new fabric line is 10% off this month?” This helps keep customers engaged and informed, even while they wait.",
  },
];

export default function AdditionalFeatures() {
  const [expanded, setExpanded] = useState(Array(data.length).fill(false));

  const toggleReadMore = (index: number) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div>
      <Card style={{ border: "none", width: "auto", maxWidth: "1000px", height: "auto", maxHeight: "100%" }}>
        <Card.Body style={{ background: "#515151", borderRadius: "20px" }}>
          <Card.Title className="text-2xl font-semibold" style={{ color: "white" }}>
            <h2 className="text-2xl font-semibold ps-4 pt-3" style={{ color: "white" }}>Add Ons (With Charges)</h2>
          </Card.Title>
          <Row className="gx-4 gy-4">
            {data.map((item, index) => (
              <Col key={index} xs={12} md={6}>
                <Card style={{ border: "none" }}>
                  <Card.Body style={{ background: "#515151" }}>
                    <Row className="mt-3">
                      <Col xs={12} className="mb-4">
                        <Card style={{ border: "none" }}>
                          <Card.Body style={{ backgroundColor: "#515151" }}>
                            <div className="d-flex align-items-start">
                              <div>
                                <Card.Title style={{ color: "white" }}>{item.title}</Card.Title>
                                <Card.Text style={{ color: "white", fontSize: "14px" }}>
                                  {expanded[index] ? (
                                    <>
                                      <div className="mb-2">{item.text1} <br /></div>
                                      <b>Example:</b> {item.text2}
                                    </>
                                  ) : (
                                    `${item.text1.substring(0, 100)}...`
                                  )}
                                </Card.Text>
                                <button
                                  onClick={() => toggleReadMore(index)}
                                  style={{
                                    background: "none",
                                    color: "#D92027",
                                    border: "none",
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                    fontSize: "16px",
                                  }}
                                >
                                  {expanded[index] ? "Read Less" : "Read More"}
                                </button>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
