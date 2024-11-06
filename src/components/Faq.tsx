import { Accordion } from "react-bootstrap";

const data = [
  {
    title: "1. How do I get started with Sky ID for my business?",
    description:
      "Our return policy allows returns within 30 days of purchase, provided the item is in original condition.",
  },

  {
    title: "2. What is call mapping, and why is it beneficial?",
    description: "Once your order ships, you will receive a tracking number by email to follow your delivery progress.",
  },
];

export default function Faq() {
  return (
    <div className="container" id="faqs" style={{ marginBottom: "100px", paddingTop: "10%" }}>
      <div style={{ marginTop: "60px", marginBottom: "30px" }}>
        <h1 style={{ color: "#00000099" }}>FAQs</h1>
      </div>
      <div className="" style={{ marginTop: "2%" }}>
        {/* <Accordion style={{ paddingBottom: "2%", width: "auto", maxWidth: "1106px" }}>
          <Accordion.Item eventKey="0" style={{ border: "2px solid #D3D3D3" }}>
            <Accordion.Header className="custom-header">
              <strong></strong>
            </Accordion.Header>
            <Accordion.Body>
              
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}

        {data.map((item, index) => (
          <Accordion key={index} style={{ paddingBottom: "2%" }}>
            <Accordion.Item eventKey="1" style={{ border: "2px solid #D3D3D3" }}>
              <Accordion.Header>
                <strong>{item.title}</strong>
              </Accordion.Header>
              <Accordion.Body>{item.description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}

        {/* <Accordion style={{ paddingBottom: "2%" }}>
          <Accordion.Item eventKey="1" style={{ border: "2px solid #D3D3D3" }}>
            <Accordion.Header>
              <strong>2. What is call mapping, and why is it beneficial?</strong>
            </Accordion.Header>
            <Accordion.Body>
              Once your order ships, you will receive a tracking number by email to follow your delivery progress.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}

        <Accordion style={{ paddingBottom: "2%" }}>
          <Accordion.Item eventKey="2" style={{ border: "2px solid #D3D3D3" }}>
            <Accordion.Header>
              <strong>3. How does Sky ID improve brand visibility?</strong>
            </Accordion.Header>
            <Accordion.Body>
              Yes, we offer international shipping to most countries. Shipping fees and times vary by destination.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion style={{ paddingBottom: "2%" }}>
          <Accordion.Item eventKey="3" style={{ border: "2px solid #D3D3D3" }}>
            <Accordion.Header>
              <strong>4. Can I add more lines to my 0700 number?</strong>
            </Accordion.Header>
            <Accordion.Body>
              Yes, we offer international shipping to most countries. Shipping fees and times vary by destination.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion style={{ paddingBottom: "2%" }}>
          <Accordion.Item eventKey="4" style={{ border: "2px solid #D3D3D3" }}>
            <Accordion.Header>
              <strong>5. Can I add or change the phone numbers linked to my 0700 number?</strong>
            </Accordion.Header>
            <Accordion.Body>
              Yes, we offer international shipping to most countries. Shipping fees and times vary by destination.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion style={{ paddingBottom: "2%" }}>
          <Accordion.Item eventKey="5" style={{ border: "2px solid #D3D3D3" }}>
            <Accordion.Header>
              <strong>6. What if a call doesn’t go through to the primary contact?</strong>
            </Accordion.Header>
            <Accordion.Body>
              Yes, we offer international shipping to most countries. Shipping fees and times vary by destination.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion style={{ paddingBottom: "2%" }}>
          <Accordion.Item eventKey="6" style={{ border: "2px solid #D3D3D3" }}>
            <Accordion.Header>
              <strong>7. What additional features does Sky ID offer?</strong>
            </Accordion.Header>
            <Accordion.Body>
              Yes, we offer international shipping to most countries. Shipping fees and times vary by destination.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion style={{ paddingBottom: "2%" }}>
          <Accordion.Item eventKey="7" style={{ border: "2px solid #D3D3D3" }}>
            <Accordion.Header>
              <strong>8. How much does the annual subscription cost?</strong>
            </Accordion.Header>
            <Accordion.Body>
              Yes, we offer international shipping to most countries. Shipping fees and times vary by destination.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion style={{ paddingBottom: "5%" }}>
          <Accordion.Item eventKey="8" style={{ border: "2px solid #D3D3D3" }}>
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
  );
}
