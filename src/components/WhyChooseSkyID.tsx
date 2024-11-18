import Card from "react-bootstrap/Card";

const data = [
  {
      title: "Always Reachable",
      description: "Customers enjoy reliable access, and businesses experience increased sales."
  }, 
  {
      title: "Flexible Mapping",
      description: "Link multiple numbers to one line providing flexible distribution of calls based on availability."
  },
  {
      title: "Additional Features",
      description: "Enhance your service with options like Interactive Voice Response, Call center Solutions, and VirtualPBX."
  },
]

export default function WhyChooseSkyID()  {

    return (
      <div>
         <div className="container justify-content-center" style={{ marginBottom: "100px" }}>
            <Card style={{ width: "100%", maxWidth: "1000px", backgroundColor: "#D92027", borderRadius: "20px" }}>
              <Card.Body>
                <Card.Title className="responsive-title" style={{color:"white"}}>Why Choose Sky ID</Card.Title>
                <div className="row row-cols-1 row-cols-md-3 g-3">
                {data.map((item, index) => (
                  <div className="col d-flex justify-content-center" key={index}>
                    <Card style={{ width: "auto", maxWidth: "100%", height: "auto", maxHeight: "100%", backgroundColor: "#D92027", border: "none", }}>
                      <Card.Body>
                        <svg style={{ marginBottom: "10%" }}width="52"height="52"viewBox="0 0 24 24"fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.9294 13.9106C10.9294 13.9106 10.9322 13.9093 10.9368 13.9086C10.9316 13.9106 10.9294 13.9106 10.9294 13.9106Z"fill="#ffffff"className="my-path" ></path>
                          <path d="M10.9565 13.9086C10.9611 13.9093 10.9639 13.9106 10.9639 13.9106C10.9639 13.9106 10.9617 13.9106 10.9565 13.9086Z"fill="#ffffff"className="my-path"></path>
                          <path fillRule="evenodd"clipRule="evenodd"d="M10.9399 2.19971H13.0596C14.8944 2.19969 16.3528 2.19968 17.4954 2.35329C18.6734 2.51166 19.6346 2.84639 20.3938 3.6056C21.153 4.3648 21.4878 5.32606 21.6461 6.50402C21.7997 7.64658 21.7997 9.10502 21.7997 10.9398V13.0596C21.7997 14.8944 21.7997 16.3528 21.6461 17.4954C21.4878 18.6734 21.153 19.6346 20.3938 20.3938C19.6346 21.153 18.6734 21.4878 17.4954 21.6461C16.3528 21.7997 14.8944 21.7997 13.0596 21.7997H10.9398C9.10502 21.7997 7.64658 21.7997 6.50402 21.6461C5.32606 21.4878 4.3648 21.153 3.6056 20.3938C2.84639 19.6346 2.51166 18.6734 2.35329 17.4954C2.19968 16.3528 2.19969 14.8944 2.19971 13.0596V10.9399C2.19969 9.10503 2.19968 7.64658 2.35329 6.50402C2.51166 5.32606 2.84639 4.3648 3.6056 3.6056C4.3648 2.84639 5.32606 2.51166 6.50402 2.35329C7.64658 2.19968 9.10504 2.19969 10.9399 2.19971ZM17.2359 9.96437C17.5483 9.65195 17.5483 9.14542 17.2359 8.833C16.9235 8.52058 16.4169 8.52058 16.1045 8.833L11.7952 13.1423C11.4459 13.4916 11.2396 13.6955 11.0738 13.822C11.0073 13.8727 10.9672 13.8952 10.9467 13.9045C10.9261 13.8952 10.886 13.8727 10.8195 13.822C10.6537 13.6955 10.4475 13.4916 10.0981 13.1423L8.56544 11.6096C8.25302 11.2972 7.74649 11.2972 7.43407 11.6096C7.12165 11.922 7.12165 12.4286 7.43407 12.741L8.99988 14.3068C9.30455 14.6116 9.58728 14.8944 9.84896 15.094C10.1386 15.315 10.4943 15.508 10.9467 15.508C11.399 15.508 11.7548 15.315 12.0444 15.094C12.3061 14.8944 12.5888 14.6116 12.8934 14.3068L17.2359 9.96437Z" fill="#ffffff"className="my-path" ></path>
                        </svg>
                        <Card.Title style={{ color: "white" }}>{item.title}</Card.Title>
                        <Card.Text style={{ color: "white", marginTop: "20px" }}>
                          {item.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
                </div>
              </Card.Body>
              <style>{`
                .responsive-title {
                  font-size: 44px; !important;
                  margin-top: 40px; !important;
                  margin-bottom: 40px; !important;
                }
              .responsive-title > card-title > h5{
              color:white}
                @media (max-width: 992px) {
                  .responsive-title {
                    font-size: 40px; !important;
                  }
                }

                @media (max-width: 768px) {
                  .responsive-title {
                    font-size: 40px !important;

                  }
                }

                @media (max-width: 576px) {
                  .responsive-title {
                    font-size: 24px;!important;
                  }
                }
              `}</style>
            </Card>
          </div>
      </div>
    )
};
