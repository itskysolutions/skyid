
import { useState } from "react";
import Select from "react-select";
import CustomButton from "../../components/CustomButton";
import { BusinessData } from "../../assets/data";
import Card from "react-bootstrap/Card";

export const ManageButtonCustomers = () => {
  type OptionType = { value: string; label: string };

  const [popupState, setPopupState] = useState<"block" | "unblock" | "successblock" | "sucessunblock" | null>(null);
  const [timeOption, setTimeOption] = useState<OptionType | null>(null);
  const [blockedbusiness, setBlockedbusiness] = useState<any>(null);

  const Timeoptions = [
    { value: "24", label: "24 Hours" },
    { value: "32", label: "32 Hours" },
    { value: "48", label: "48 Hours" },
    { value: "unlimited", label: "Unlimited" },
  ];

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: "400px",
      height: "45px",
      minHeight: "45px",
    }),
  };

  const handleBlock = () => {
    if (!timeOption) return alert("Please select a time period.");
    const updatedbusiness = { ...BusinessData[0], Status: "Blocked", blockDuration: timeOption.label };
    setBlockedbusiness(updatedbusiness);
    setPopupState("successblock");
  };

  const handleUnblock = () => {
    if (blockedbusiness) {
      const updatedbusiness = { ...blockedbusiness, Status: "Active" };
      setBlockedbusiness(updatedbusiness);
      setPopupState("unblock");
      setPopupState("sucessunblock");
    }
  };

  const currentStatus = blockedbusiness?.Status || BusinessData[0]?.Status;

  return (
    <div>
      <button
        onClick={() => setPopupState(currentStatus === "Active" ? "block" : "unblock")}
        className="bg-blue-600 text-white px-2 py-2 rounded-md"
      >
        Manage
      </button>

    {popupState === "block" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative overflow-y-auto max-h-[90vh]">
                <button onClick={() => setPopupState(null)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    ✕
                </button>
                <h2 className="text-xl font-semibold mb-4">Manage Businesses</h2>
                <div className='flex'>
                    <div className='me-2'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM9.26001 24.6875C9.98342 23.5561 10.98 22.625 12.1579 21.9801C13.3358 21.3351 14.6571 20.9971 16 20.9971C17.3429 20.9971 18.6642 21.3351 19.8421 21.9801C21.02 22.625 22.0166 23.5561 22.74 24.6875C20.8129 26.1862 18.4413 26.9999 16 26.9999C13.5587 26.9999 11.1871 26.1862 9.26001 24.6875ZM12 15C12 14.2089 12.2346 13.4355 12.6741 12.7777C13.1137 12.1199 13.7384 11.6072 14.4693 11.3045C15.2002 11.0017 16.0044 10.9225 16.7804 11.0769C17.5563 11.2312 18.269 11.6122 18.8284 12.1716C19.3878 12.731 19.7688 13.4437 19.9231 14.2196C20.0775 14.9956 19.9983 15.7998 19.6955 16.5307C19.3928 17.2616 18.8801 17.8864 18.2223 18.3259C17.5645 18.7654 16.7911 19 16 19C14.9391 19 13.9217 18.5786 13.1716 17.8284C12.4214 17.0783 12 16.0609 12 15ZM24.22 23.3013C23.1047 21.6851 21.5365 20.4348 19.7125 19.7075C20.6923 18.9358 21.4072 17.878 21.7579 16.6811C22.1086 15.4843 22.0776 14.2079 21.6693 13.0294C21.2609 11.851 20.4955 10.8291 19.4794 10.1059C18.4634 9.38262 17.2472 8.99397 16 8.99397C14.7528 8.99397 13.5366 9.38262 12.5206 10.1059C11.5045 10.8291 10.7391 11.851 10.3307 13.0294C9.92238 14.2079 9.8914 15.4843 10.2421 16.6811C10.5928 17.878 11.3077 18.9358 12.2875 19.7075C10.4635 20.4348 8.89529 21.6851 7.78001 23.3013C6.37072 21.7165 5.4496 19.7581 5.12756 17.6619C4.80553 15.5657 5.09631 13.4211 5.9649 11.4864C6.83349 9.55163 8.24285 7.90922 10.0233 6.75692C11.8037 5.60462 13.8792 4.99156 16 4.99156C18.1208 4.99156 20.1963 5.60462 21.9768 6.75692C23.7572 7.90922 25.1665 9.55163 26.0351 11.4864C26.9037 13.4211 27.1945 15.5657 26.8724 17.6619C26.5504 19.7581 25.6293 21.7165 24.22 23.3013Z" fill="black" fill-opacity="0.6"/>
                        </svg>
                    </div>
                    <div className='mt-1'>
                        <p>Tech Solutions Limited</p>
                    </div>
                </div>
                <div className="mt-4" style={{display:"flex"}}> 
                    <div className='me-2'>
                        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                        </svg>
                    </div>
                    <p style={{color:"#00000080"}}>You can block the business for specific time period until an issue is resolved and also unblock them when desired.</p>
                </div>
                <div>
                    <Select 
                        value={timeOption}
                        onChange={(option) => setTimeOption(option)}
                        options={Timeoptions}
                        placeholder="Select Period:" 
                        styles={customStyles}
                    />
                </div>
                <div className="mt-[40px]"><CustomButton onClick={handleBlock} name="Block" backgroundColor="bg-[#D92027]" textColor="text-[#ffffff]" style="w-[100%]" /></div>
            </div>
        </div>
    )}

    {popupState === "unblock" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative overflow-y-auto max-h-[90vh]">
                <button
                    onClick={() => setPopupState(null)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>
                <h2 className="text-xl font-semibold mb-4">Manage Businesses</h2>
                <div className='flex'>
                    <div className='me-2'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM9.26001 24.6875C9.98342 23.5561 10.98 22.625 12.1579 21.9801C13.3358 21.3351 14.6571 20.9971 16 20.9971C17.3429 20.9971 18.6642 21.3351 19.8421 21.9801C21.02 22.625 22.0166 23.5561 22.74 24.6875C20.8129 26.1862 18.4413 26.9999 16 26.9999C13.5587 26.9999 11.1871 26.1862 9.26001 24.6875ZM12 15C12 14.2089 12.2346 13.4355 12.6741 12.7777C13.1137 12.1199 13.7384 11.6072 14.4693 11.3045C15.2002 11.0017 16.0044 10.9225 16.7804 11.0769C17.5563 11.2312 18.269 11.6122 18.8284 12.1716C19.3878 12.731 19.7688 13.4437 19.9231 14.2196C20.0775 14.9956 19.9983 15.7998 19.6955 16.5307C19.3928 17.2616 18.8801 17.8864 18.2223 18.3259C17.5645 18.7654 16.7911 19 16 19C14.9391 19 13.9217 18.5786 13.1716 17.8284C12.4214 17.0783 12 16.0609 12 15ZM24.22 23.3013C23.1047 21.6851 21.5365 20.4348 19.7125 19.7075C20.6923 18.9358 21.4072 17.878 21.7579 16.6811C22.1086 15.4843 22.0776 14.2079 21.6693 13.0294C21.2609 11.851 20.4955 10.8291 19.4794 10.1059C18.4634 9.38262 17.2472 8.99397 16 8.99397C14.7528 8.99397 13.5366 9.38262 12.5206 10.1059C11.5045 10.8291 10.7391 11.851 10.3307 13.0294C9.92238 14.2079 9.8914 15.4843 10.2421 16.6811C10.5928 17.878 11.3077 18.9358 12.2875 19.7075C10.4635 20.4348 8.89529 21.6851 7.78001 23.3013C6.37072 21.7165 5.4496 19.7581 5.12756 17.6619C4.80553 15.5657 5.09631 13.4211 5.9649 11.4864C6.83349 9.55163 8.24285 7.90922 10.0233 6.75692C11.8037 5.60462 13.8792 4.99156 16 4.99156C18.1208 4.99156 20.1963 5.60462 21.9768 6.75692C23.7572 7.90922 25.1665 9.55163 26.0351 11.4864C26.9037 13.4211 27.1945 15.5657 26.8724 17.6619C26.5504 19.7581 25.6293 21.7165 24.22 23.3013Z" fill="black" fill-opacity="0.6"/>
                        </svg>
                    </div>
                    <div className='mt-1'>
                        <strong>{blockedbusiness?.BusinessName || "Unknown VSO"}</strong>
                    </div>
                </div>
                <div className="mt-3" style={{display:"flex"}}>
                    <button className='bg-[#FFC5C7] text-[#D92027] rounded-lg p-1 h-[30px]'>Blocked</button>
                    <div className="ms-4 mt-1"><p><strong style={{color:"#00000099"}}><strong>{blockedbusiness?.BusinessName || "Unknown duration"}</strong>.</strong></p></div>
                </div>
                <div className="mt-4" style={{display:"flex"}}> 
                    <div className='me-2'>
                        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                        </svg>
                    </div>
                    <p style={{color:"#00000080"}}>You can block the business for specific time period until an issue is resolved and also unblock them when desired.</p>
                </div>
                <div className="mt-4">
                    <CustomButton
                        onClick={handleUnblock}
                        name="Unblock"
                        backgroundColor="bg-[#12A53E]"
                        textColor="text-[#ffffff]"
                        style="w-[100%]"
                    />
                </div>
            </div>
        </div>  
    )}

    {popupState === "successblock" && (
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
                        You have successfully blocked <strong> {blockedbusiness?.BusinessName || "Unknown Business"}</strong> for{" "}
                        <strong> {blockedbusiness?.blockDuration || "Unknown duration"}</strong>.
                        </p></h5>
                    </div>
                    <div className="flex justify-content-center text-center">
                        <p>The blocked business will be automatically unblocked after the time period has elapsed</p>
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
      {popupState === "sucessunblock" && (
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
                        You have successfully unblocked <strong> {blockedbusiness?.BusinessName || "Unknown Business"}</strong> for{" "}
                        <strong> {blockedbusiness?.blockDuration || "Unknown duration"}</strong>.
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
