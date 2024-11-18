import { Form, FormControl, Button, InputGroup, Card } from "react-bootstrap";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import {availableNumbers} from "../assets/data/index"

type Results = { found: true; number: number  } | { found: false; suggestions: number[] } | null;

export const ChooseSpecialNumber = () => {
  const [query, setQuery] = useState('');
    const [results, setResults] = useState<Results>(null);
    const navigate = useNavigate();
  

    const handleSearch = () => {
      const parsedQuery = parseInt(query, 10);

      if (availableNumbers.some(num => parseInt(num.Number, 10) === parsedQuery)) {
        setResults({ found: true, number: parsedQuery });
      } else {
        const suggestions = availableNumbers
          .filter(num => Math.abs(parseInt(num.Number, 10) - parsedQuery) <= 10)
          .slice(0, 3)
          .map(num => parseInt(num.Number, 10)); // Convert suggestions to numbers
          
        setResults({ found: false, suggestions });
      }
    };

  return (
    <div 
      style={{ minHeight: ''}}
    >
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div style={{ paddingBottom: '2%', paddingRight:'25%' }}>
          Check for your Sky ID number availability
        </div>


        <div style={{ width: '100%', maxWidth: '600px' }}>
          <Form className="d-flex flex-column flex-md-row flex-wrap justify-content-center align-items-center" style={{ width: "100%", maxWidth: "800px" }} onSubmit={(e) => e.preventDefault()}>
            <InputGroup className="w-100">
                <InputGroup.Text style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: '10px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5 18.5L21 21" stroke="black" strokeWidth="1" strokeLinecap="round" className="my-path"></path>
                    <path d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="black" strokeWidth="1" className="my-path"></path>
                </svg>
                </InputGroup.Text>
                <FormControl 
                    type="search"
                    placeholder="Search For Availability"
                    className="me-2"aria-label="Search "
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{ borderTopRightRadius: "10px", borderBottomRightRadius:'10px', minWidth: "250px", flex: "1 1 auto" }}/>
                <Button 
                    onClick={handleSearch}
                    className="rounded-md"
                    style={{backgroundColor: "#515151",color: "white",borderColor: "#515151",minWidth: "120px",height: "56px",borderRadius: "10px",marginTop: "5px",}}>
                {" "}Search</Button>
            </InputGroup>
            <div style={{display:"flex", paddingTop:"2%", paddingRight:"25%"}}> 
              <div className='me-2'><svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                  </svg>
              </div>
              <p style={{color:"#00000080"}}>Number range available 0700310XXXX - 0700319XXXX</p>
            </div>
            {results && (
            <Card 
            className="mt-4" 
            style={{ width: '100%', backgroundColor: results.found ? '#E0FFE6CC' : '#f8d7da', color: results.found ? '#155724' : '#721c24', borderColor: results.found ? '#c3e6cb' : '#f5c6cb' }}
            >
            <Card.Body>
                {results.found ? (
                    <div style={{display:"flex"}}>
                        <Card.Body>
                        <div>
                          {/* Top Section */}
                          <div className="flex items-center justify-between ">
                            {/* Left Content: Icon and Number */}
                            <div className="flex items-center">
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.9299 13.4587C10.9299 13.4587 10.9327 13.4574 10.9373 13.4567C10.9321 13.4587 10.9299 13.4587 10.9299 13.4587Z"
                                  fill="#09E131CC"
                                  className="my-path"
                                ></path>
                                <path
                                  d="M10.9644 13.4587C10.9644 13.4587 10.9616 13.4574 10.957 13.4567C10.9601 13.4579 10.9633 13.4587 10.9633 13.4587L10.9644 13.4587Z"
                                  fill="#09E131CC"
                                  className="my-path"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M2.2002 11.9997C2.2002 6.58732 6.5878 2.19971 12.0002 2.19971C17.4126 2.19971 21.8002 6.58732 21.8002 11.9997C21.8002 17.4121 17.4126 21.7997 12.0002 21.7997C6.5878 21.7997 2.2002 17.4121 2.2002 11.9997ZM17.2364 9.51246C17.5488 9.20004 17.5488 8.69351 17.2364 8.38109C16.9239 8.06867 16.4174 8.06867 16.105 8.38109L11.7957 12.6904C11.4464 13.0397 11.2401 13.2436 11.0743 13.3701C11.0078 13.4208 10.9677 13.4433 10.9472 13.4526C10.9266 13.4433 10.8865 13.4208 10.82 13.3701C10.6542 13.2436 10.4479 13.0397 10.0986 12.6904L8.56593 11.1577C8.25351 10.8453 7.74698 10.8453 7.43456 11.1577C7.12214 11.4701 7.12214 11.9767 7.43456 12.2891L9.00037 13.8549C9.30504 14.1597 9.58777 14.4425 9.84945 14.6421C10.1391 14.8631 10.4948 15.0561 10.9472 15.0561C11.3995 15.0561 11.7552 14.8631 12.0449 14.6421C12.3065 14.4424 12.5892 14.1597 12.8939 13.8549L17.2364 9.51246Z"
                                  fill="#09E131CC"
                                  className="my-path"
                                ></path>
                              </svg>
                              <strong className="ms-2 text-gray-800">{results.number}</strong>
                            </div>

                            {/* Right Content: Button */}
                            <div >
                              <Button
                                className="px-4 py-2 rounded-md text-white w-[150px] h-[56px]"
                                onClick={() => navigate("/app/dashboard/numberMapping")}
                                style={{
                                  backgroundColor: "#D92027",
                                  border: "none",
                                }}
                              >
                                Select
                              </Button>
                            </div>
                          </div>

                          {/* Bottom Section */}
                          <div>
                            <span className="text-gray-600">The number is available!</span>
                          </div>
                        </div>
                        </Card.Body>
                    </div>
                ) : (
                <>
                  <Card.Body>
                    The number is not available. Try Searching for another
                    </Card.Body>
                    {results.suggestions.length > 0 ? (
                    <>
                        <Card.Body>Suggested available numbers:</Card.Body>
                        <div className="">
                        {results.suggestions.map((num, index) => (
                            <Card className="mb-2" key={index} style={{ width: '100%', backgroundColor: "#E0FFE6CC" }}>
                            <div>
                              <Card.Body className="d-flex justify-between items-center">
                                <div className="flex items-center">
                                    <svg
                                      width="26"
                                      height="26"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M10.9299 13.4587C10.9299 13.4587 10.9327 13.4574 10.9373 13.4567C10.9321 13.4587 10.9299 13.4587 10.9299 13.4587Z"
                                        fill="#09E131CC"
                                        className="my-path"
                                      ></path>
                                      <path
                                        d="M10.9644 13.4587C10.9644 13.4587 10.9616 13.4574 10.957 13.4567C10.9601 13.4579 10.9633 13.4587 10.9633 13.4587L10.9644 13.4587Z"
                                        fill="#09E131CC"
                                        className="my-path"
                                      ></path>
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.2002 11.9997C2.2002 6.58732 6.5878 2.19971 12.0002 2.19971C17.4126 2.19971 21.8002 6.58732 21.8002 11.9997C21.8002 17.4121 17.4126 21.7997 12.0002 21.7997C6.5878 21.7997 2.2002 17.4121 2.2002 11.9997ZM17.2364 9.51246C17.5488 9.20004 17.5488 8.69351 17.2364 8.38109C16.9239 8.06867 16.4174 8.06867 16.105 8.38109L11.7957 12.6904C11.4464 13.0397 11.2401 13.2436 11.0743 13.3701C11.0078 13.4208 10.9677 13.4433 10.9472 13.4526C10.9266 13.4433 10.8865 13.4208 10.82 13.3701C10.6542 13.2436 10.4479 13.0397 10.0986 12.6904L8.56593 11.1577C8.25351 10.8453 7.74698 10.8453 7.43456 11.1577C7.12214 11.4701 7.12214 11.9767 7.43456 12.2891L9.00037 13.8549C9.30504 14.1597 9.58777 14.4425 9.84945 14.6421C10.1391 14.8631 10.4948 15.0561 10.9472 15.0561C11.3995 15.0561 11.7552 14.8631 12.0449 14.6421C12.3065 14.4424 12.5892 14.1597 12.8939 13.8549L17.2364 9.51246Z"
                                        fill="#09E131CC"
                                        className="my-path"
                                      ></path>
                                    </svg>
                                    <strong className="ms-2 text-gray-800">{num}</strong>
                                  </div>
                                  {/* <span className="mb-3">{num}</span> */}
                                  <Button
                                    className="px-4 py-2 rounded-md text-white w-[100px] h-[56px]"
                                    onClick={() => navigate("/app/dashboard/numberMapping")}
                                    style={{
                                      backgroundColor: "#D92027",
                                      border: "none",
                                    }}>
                                  Select
                                </Button>
                              </Card.Body>
                            </div>
                            </Card>
                        ))}
                        </div>
                    </>
                    ) : (
                    <Card.Body>This number is not within our range!!! Search again!!!</Card.Body>
                    )}
                </>
                )}
            </Card.Body>
            </Card>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};
