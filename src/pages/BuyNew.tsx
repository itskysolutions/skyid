import { useState } from 'react';
import CustomButton from "../components/CustomButton";
import Card from "react-bootstrap/Card";

export const BuyNew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSuccessPop, setIsSuccessPop] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option: string) => {
    if (selected.includes(option)) {
      // Remove the option if it's already selected
      setSelected(selected.filter((item) => item !== option));
    } else {
      // Add the option if it's not selected
      setSelected([...selected, option]);
    }
  };

  const SecondtogglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const SucessPopup = () => {
    setIsSuccessPop(!isSuccessPop);
  };

  const prices: { [key: string]: number } = {
    option1: 20000,
    option2: 5000,
  };

  // Calculate the total dynamically based on selected options
  const calculateTotal = () =>
    selected.reduce((total, option) => total + prices[option], 0);


  return (
    <div className="">
      <div style={{ display: "flex" }}>
        <button
          onClick={togglePopup}
          className="p-2 rounded-md bg-[#D92027] group transition-all duration-500 hover:bg-[#db9fa1] flex item-center text-white"
        >
          Buy
        </button>
        <button className="p-2 ms-2 rounded-md bg-[#00000099] group transition-all duration-500 hover:bg-[#000000CC] flex item-center text-white">
          View more
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Buy IVR / IVM (07003100015)</h2>

            <p>Select Add On: </p>

            <div
              className={`flex items-center mb-4 rounded-md ${
                selected.includes("option1") ? "bg-[#E8F1FF]" : "bg-white"
              } h-[56px] ps-3`}
            >
              <input
                type="checkbox"
                id="featureCheckbox1"
                checked={selected.includes("option1")}
                onChange={() => handleCheckboxChange("option1")}
                className={` w-4 h-4 rounded-md border-2 border-blue-300 ${
                  selected.includes("option1") ? "bg-blue-600" : "bg-white"
                }`}
              />
              <label htmlFor="featureCheckbox1" className="ml-2 text-gray-700">
                Interactive Voice Response (IVR)
              </label>
            </div>
            <div
              className={`flex items-center mb-4 rounded-md ${
                selected.includes("option2") ? "bg-[#E8F1FF]" : "bg-white"
              } h-[56px] ps-3`}
            >
              <input
                type="checkbox"
                id="featureCheckbox2"
                checked={selected.includes("option2")}
                onChange={() => handleCheckboxChange("option2")}
                className={` w-4 h-4 rounded-md border-2 border-blue-300 ${
                  selected.includes("option2") ? "bg-blue-600" : "bg-white"
                }`}
              />
              <label htmlFor="featureCheckbox2" className="ml-2 text-gray-700">
                Integrated Voice Messaging (IVM)
              </label>
            </div>
            <div className="mt-4">
              {selected.includes("option1") && (
                <div>
                    <div className="mt-4 ms-3" style={{display:"flex"}}> 
                        <div className='me-2'><svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                            </svg></div>
                        <p style={{color:"#00000080", fontSize:"16px"}}>After completing payment you can manage IVR & IVM through the Add Ons tab on your dashboard.</p>
                    </div>
                    <div className='ms-3'>
                        <p className='mt-3 text-[#00000099]'><h5>Add Ons</h5></p>
                        <div className='text-[#00000099]'>
                            <p>Interactive Voice Response (IVR)</p>
                            <p><b>N20,000.00</b></p>
                        </div>
                    </div>
                </div>
              )}
              {selected.includes("option2") && (
                <div>
                  <div className='text-[#00000099] ms-3'>
                        <p>Interactive Voice Messaging (IVM)</p>
                        <p><b>N5,000.00</b></p>
                    </div>
                </div>
              )}
            </div>
            <hr className='ms-3 w-[90%]' />
            <div>
              <div className="flex items-center justify-between w-[95%] mb-3">
                <p className="text-[#00000099] ms-4">
                  <b>Total</b>
                </p>
                <p className="text-[#00000099]">
                  <b>{calculateTotal().toLocaleString("en-NG", { style: "currency", currency: "NGN" })}</b>
                </p>
              </div>
              <div className="flex items-center justify-center mb-3">
                <button
                  onClick={SecondtogglePopup}
                  className="px-4 py-3 bg-[#D92027] text-white rounded w-[90%]"
                >
                  Proceed to Checkout to pay{" "}
                  {calculateTotal().toLocaleString("en-NG", { style: "currency", currency: "NGN" })}
                </button>
              </div>
            </div>
            {isPopupVisible && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="mt-[40px]">
                  <CustomButton
                    name="Done"
                    backgroundColor="bg-[#277CFA]"
                    textColor="text-[#ffffff]"
                    style="w-[100%]"
                    onClick={SucessPopup}
                  />
                </div>
                {isSuccessPop && (
                  <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
                      <Card
                        className="bg-[#E6FFEB]"
                        style={{ borderColor: "#00000033" }}
                      >
                        <Card.Body
                          className=" bg-[#E6FFEB]"
                          style={{ borderRadius: "" }}
                        >
                          <div className="flex justify-content-center mb-5">
                            <svg
                              width="149.5"
                              height="149.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.9299 13.4587C10.9299 13.4587 10.9327 13.4574 10.9373 13.4567C10.9321 13.4587 10.9299 13.4587 10.9299 13.4587Z"
                                fill="#12A53E"
                                className="my-path"
                              ></path>
                              <path
                                d="M10.9644 13.4587C10.9644 13.4587 10.9616 13.4574 10.957 13.4567C10.9601 13.4579 10.9633 13.4587 10.9633 13.4587L10.9644 13.4587Z"
                                fill="#12A53E"
                                className="my-path"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.2002 11.9997C2.2002 6.58732 6.5878 2.19971 12.0002 2.19971C17.4126 2.19971 21.8002 6.58732 21.8002 11.9997C21.8002 17.4121 17.4126 21.7997 12.0002 21.7997C6.5878 21.7997 2.2002 17.4121 2.2002 11.9997ZM17.2364 9.51246C17.5488 9.20004 17.5488 8.69351 17.2364 8.38109C16.9239 8.06867 16.4174 8.06867 16.105 8.38109L11.7957 12.6904C11.4464 13.0397 11.2401 13.2436 11.0743 13.3701C11.0078 13.4208 10.9677 13.4433 10.9472 13.4526C10.9266 13.4433 10.8865 13.4208 10.82 13.3701C10.6542 13.2436 10.4479 13.0397 10.0986 12.6904L8.56593 11.1577C8.25351 10.8453 7.74698 10.8453 7.43456 11.1577C7.12214 11.4701 7.12214 11.9767 7.43456 12.2891L9.00037 13.8549C9.30504 14.1597 9.58777 14.4425 9.84945 14.6421C10.1391 14.8631 10.4948 15.0561 10.9472 15.0561C11.3995 15.0561 11.7552 14.8631 12.0449 14.6421C12.3065 14.4424 12.5892 14.1597 12.8939 13.8549L17.2364 9.51246Z"
                                fill="#12A53E"
                                className="my-path"
                              ></path>
                            </svg>
                          </div>
                          <p className="flex justify-content-center">
                            <h5>Your payment has been confirmed</h5>
                          </p>
                          <p className="flex justify-content-center">
                            Access your Manage Numbers tab to manage your
                            numbers.
                          </p>
                        </Card.Body>
                      </Card>
                      <div className="mt-[40px]">
                        <a
                          href="/app/addOns"
                          className="no-underline"
                        >
                          <CustomButton
                            name="Back to Add Ons"
                            backgroundColor="bg-[#277CFA]"
                            textColor="text-[#ffffff]"
                            style="w-[100%]"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
