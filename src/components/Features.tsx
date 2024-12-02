import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

interface FeatureCardProps {
    title: string;
    text: string;
}

// Reusable FeatureCard Component
const FeatureCard: React.FC<FeatureCardProps> = ({ title, text }) => (
  <Card style={{ border: "none" }}>
    <Card.Body style={{ backgroundColor: "#04D02A0F" }}>
      <svg
        style={{ paddingBottom: "2%", paddingRight: "2%" }}
        width="35"
        height="35"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`${title} Icon`}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.84417 3.10743C11.026 1.89713 12.9725 1.89713 14.1543 3.10743L14.8049 3.77372C15.0747 4.05001 15.4458 4.20376 15.832 4.19916L16.7632 4.18807C18.4546 4.16792 19.831 5.5443 19.8109 7.23577L19.7998 8.16695C19.7952 8.55309 19.9489 8.92426 20.2252 9.19406L20.8915 9.84465C22.1018 11.0265 22.1018 12.973 20.8915 14.1548L20.2252 14.8054C19.9489 15.0751 19.7952 15.4463 19.7998 15.8325L19.8109 16.7636C19.831 18.4551 18.4546 19.8315 16.7632 19.8113L15.832 19.8003C15.4458 19.7957 15.0747 19.9494 14.8049 20.2257L14.1543 20.892C12.9725 22.1023 11.026 22.1023 9.84417 20.892L9.19357 20.2257C8.92378 19.9494 8.5526 19.7957 8.16646 19.8003L7.23528 19.8113C5.54381 19.8315 4.16743 18.4551 4.18758 16.7636L4.19867 15.8325C4.20327 15.4463 4.04952 15.0751 3.77323 14.8054L3.10694 14.1548C1.89664 12.973 1.89664 11.0265 3.10694 9.84465L3.77323 9.19405C4.04952 8.92426 4.20327 8.55309 4.19867 8.16695L4.18758 7.23577C4.16743 5.5443 5.54381 4.16792 7.23528 4.18807L8.16646 4.19916C8.5526 4.20376 8.92378 4.05001 9.19357 3.77372L9.84417 3.10743ZM15.6256 10.6252C15.9381 10.3128 15.9381 9.80622 15.6256 9.4938C15.3132 9.18138 14.8067 9.18138 14.4943 9.4938L11.482 12.5061C11.2775 12.7105 11.1526 12.8339 11.0591 12.9137C10.9656 12.8339 10.8406 12.7105 10.6362 12.5061L9.56482 11.4347C9.2524 11.1223 8.74586 11.1223 8.43344 11.4347C8.12103 11.7471 8.12103 12.2537 8.43345 12.5661L9.53408 13.6667C9.74144 13.8742 9.94954 14.0824 10.1457 14.2321C10.3696 14.4029 10.6691 14.5708 11.0591 14.5708C11.4491 14.5708 11.7486 14.4029 11.9725 14.2321C12.1686 14.0824 12.3767 13.8742 12.5841 13.6667L15.6256 10.6252Z"
          fill="#04D02ACC"
        ></path>
      </svg>
      <div className="d-flex align-items-start">
        <div>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ color: "#5b5b5b", fontSize: "18px" }}>{text}</Card.Text>
        </div>
      </div>
    </Card.Body>
  </Card>
);

export default function Features() {
  const features = [
    {
      title: "Enhanced Accessibility",
      text: "Customers can always reach you, improving retention and satisfaction.",
    },
    {
      title: "Seamless Call Routing",
      text: "Our call mapping technology ensures calls are directed to the next available line without hassle.",
    },
    {
      title: "Brand Visibility",
      text: "Stand out with a recognizable number that reinforces your brand.",
    },
  ];

  return (
    <div>
      <div style={{ paddingTop: "9%", paddingBottom: "10%" }}>
        <Card style={{ border: "none", width: "auto", maxWidth: "1000px", height: "auto", maxHeight: "100%" }}>
          <Card.Body style={{ background: "#04D02A0F", borderRadius: "20px" }}>
            <Card.Title className="text-2xl font-semibold" style={{ color: "#333333" }}>
              <h2 className="text-2xl font-semibold ps-4 pt-3" style={{ color: "#333333" }}>
                The Benefits
              </h2>
            </Card.Title>
            <Row className="gx-4 gy-4">
              {features.map((feature, index) => (
                <Col xs={12} md={4} key={index}>
                  <FeatureCard title={feature.title} text={feature.text} />
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
