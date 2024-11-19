import { Accordion } from "react-bootstrap";

const data = [
  {
    title: "1. How do I get started with Sky ID for my business?",
    description:
      "",
  },
  {
    title: "2. What are the benefits of using call mapping for my business?",
    description: "Call mapping allows you to link multiple phone lines to a single 0700 number, ensuring calls reach the next available team member if the primary contact is unavailable.​",
  },
  {
    title: "3. How does Sky ID improve brand visibility?​",
    description: "Sky ID gives you a unique, easy-to-remember 0700 number, which strengthens your brand by offering a consistent, professional point of contact for customers.",
  },
  {
    title: "4. Can I add more lines to my 0700 number??​",
    description: "Yes, you can add multiple lines. The first line is 20,000 NGN, and each additional line is 15,000 NGN annually.",
  },
  {
    title: "5. Can I add or change the phone numbers linked to my 0700 number??​",
    description: "Yes, you can update or add new phone numbers.This allows you to ensure the right team members are always accessible through your Sky ID number.",
  },
  {
    title: "6. What if a call doesn’t go through to the primary contact??​",
    description: "If the primary contact is unavailable, our system intelligently routes the call to the next available team member to ensure no call goes unanswered.",
  },
  {
    title: "7. What additional features does Sky ID offer?​",
    description: "Sky ID includes optional add-ons such as Interactive Voice Response, Call Center Solutions, and Virtual PBX to enhance customer engagement.",
  },
  {
    title: "8. How much does the annual subscription cost? ​",
    description: "The annual subscription of the lines is 15,000 NGN.",
  },
  {
    title: "9. Is technical support available if I have issues?​",
    description: "  - Yes, we provide dedicated support for setup and troubleshooting. Contact us via phone, email, or live chat for assistance.",
  },

];

export default function Faq() {
  return (
      <div className="" style={{ marginTop: "2%" }}>
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
        <style>{`
          .accordion {
            --bs-accordion-btn-color: #5b5b5b;
            --bs-accordion-active-bg: #ededed;
            --bs-accordion-active-color: #5b5b5b;
          }
        `}</style>
      </div>
  );
}
