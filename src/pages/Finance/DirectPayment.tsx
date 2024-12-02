import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import Card from 'react-bootstrap/esm/Card';

export const DirectPayment = () => {
    const [popupState, setPopupState] = useState<"open" | "success" | null>(null);

    const openPopup = () => setPopupState("open");
    const closePopup = () => setPopupState(null);

    const handleClick = () => {
        setPopupState("success");
    }

    return (
        <div>
            <div>
                <button
                    onClick={openPopup}
                    className="p-2 rounded-md bg-[#12A53E] group transition-all duration-500 text-white w-[185px] h-[44px]"
                >
                    Direct Payment
                </button>
            </div>

            {popupState === "open" && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative overflow-y-auto max-h-[90vh]">
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>

                        {/* Popup Content */}
                        <h2 className="text-xl font-semibold mb-4">Direct Payment</h2>
                        <p style={{ color: "#00000080" }} >Payment Details</p>

                        <div style={{ color: "#00000080" }}  className="flex justify-between pt-2">
                            <p>Amount</p>
                            <p className="mt-1"><b>N40,000.00</b></p>
                        </div>

                        <div className="flex justify-center items-center">
                            <hr className="w-[100%]" />
                        </div>

                        <div style={{ color: "#00000080" }} className="mt-4">
                            <p>Account Name</p>
                            <h3><b>Abubakar Ismail</b></h3>
                        </div>

                        <div style={{ color: "#00000080" }} className="mt-4">
                            <p>Account Number</p>
                            <h3><b>67227027903</b></h3>
                        </div>

                        <div className="mt-4 flex">
                            <div className="me-2">
                                {/* Info Icon */}
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z"
                                        fill="#5A9CFF"
                                    ></path>
                                </svg>
                            </div>
                            <p style={{ color: "#00000080" }}>
                                Ensure you send the exact amount to the recipient to avoid any issue.
                            </p>
                        </div>

                        <div className="mt-4 flex">
                            <div className="me-2">
                                {/* Info Icon */}
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z"
                                        fill="#5A9CFF"
                                    ></path>
                                </svg>
                            </div>
                            <p style={{ color: "#00000080" }}>
                                After the transfer, click on "Payment Completed" to confirm.
                            </p>
                        </div>

                        <div className="mt-[40px]">
                                <CustomButton
                                    name="Payment Completed"
                                    onClick={handleClick}
                                    backgroundColor="bg-[#D92027]"
                                    textColor="text-[#ffffff]"
                                    style="w-[100%]"
                                />
                        </div>
                    </div>
                </div>
            )}
            {popupState === "success" && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
                        <Card className='bg-[#E6FFEB] mb-3' style={{borderRadius:"10px"}}>
                            <Card.Body className=" bg-[#E6FFEB]">
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
                                    ></path>
                                    <path
                                        d="M10.9644 13.4587C10.9644 13.4587 10.9616 13.4574 10.957 13.4567C10.9601 13.4579 10.9633 13.4587 10.9633 13.4587L10.9644 13.4587Z"
                                        fill="#12A53E"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.2002 11.9997C2.2002 6.58732 6.5878 2.19971 12.0002 2.19971C17.4126 2.19971 21.8002 6.58732 21.8002 11.9997C21.8002 17.4121 17.4126 21.7997 12.0002 21.7997C6.5878 21.7997 2.2002 17.4121 2.2002 11.9997ZM17.2364 9.51246C17.5488 9.20004 17.5488 8.69351 17.2364 8.38109C16.9239 8.06867 16.4174 8.06867 16.105 8.38109L11.7957 12.6904C11.4464 13.0397 11.2401 13.2436 11.0743 13.3701C11.0078 13.4208 10.9677 13.4433 10.9472 13.4526C10.9266 13.4433 10.8865 13.4208 10.82 13.3701C10.6542 13.2436 10.4479 13.0397 10.0986 12.6904L8.56593 11.1577C8.25351 10.8453 7.74698 10.8453 7.43456 11.1577C7.12214 11.4701 7.12214 11.9767 7.43456 12.2891L9.00037 13.8549C9.30504 14.1597 9.58777 14.4425 9.84945 14.6421C10.1391 14.8631 10.4948 15.0561 10.9472 15.0561C11.3995 15.0561 11.7552 14.8631 12.0449 14.6421C12.3065 14.4424 12.5892 14.1597 12.8939 13.8549L17.2364 9.51246Z"
                                        fill="#12A53E"
                                    ></path>
                                    </svg>
                                </div>
                                <div className="flex justify-content-center mb-1 text-center">
                                    <h5><p>
                                    You have successfully completed the payment. 
                                    </p></h5>
                                </div>
                            </Card.Body>
                        </Card>
                        <CustomButton
                            name="Done"
                            backgroundColor="bg-[#277CFA]"
                            textColor="text-[#ffffff]"
                            style="w-[100%]"
                            onClick={() => setPopupState(null)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
