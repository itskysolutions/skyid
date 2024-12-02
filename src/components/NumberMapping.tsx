import Card from "react-bootstrap/Card";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { useState } from 'react';
import { NavLink, Link } from "react-router-dom";

export const NumberMapping = () =>  {
    type OptionType = { value: string; label: string };

    const { control } = useForm();

    const [showAdditionalInput, setShowAdditionalInput] = useState<string[]>([]);

    const handleAddMoreClick = () => {
        setShowAdditionalInput([...showAdditionalInput, ""]);
    };

    const Networkoptions = [
        { value: 'MTN', label: 'MTN' },
        { value: 'GLO', label: 'GLO' },
        { value: 'Airtel', label: 'Airtel' },
        { value: '9mobile', label: '9mobile' },
    ];
    
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

    const handleChange = (option: OptionType | null) => {
        setSelectedOption(option);
    };

    const customStyles = {
        control: (provided: any) => ({
          ...provided,
          width: '198px',
          height: '45px',
          minHeight: '45px'
        })
      };

    return (
        <div className="container" style={{maxWidth:"500px"}}>
            <div className="w-full">
                <div className="pb-2">
                    <NavLink to="/app/buyNumber/chooseSpecialNumber"  className="no-underline" style={{ color: "#D92027", display:"flex" , fontSize:"18px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left mt-1 me-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                        </svg>
                        Back
                    </NavLink>
                </div>
                <div className="pb-4">
                    <Card className="bg-[#F5F5F5] mx-auto" style={{ border: "none" }}>
                    <Card.Body
                        className="bg-[#F5F5F5] mx-auto w-full max-w-[500px] h-auto p-4 md:h-[60px] flex items-center justify-between rounded-[20px]"
                    >
                        <div className="w-full flex flex-col md:flex-row md:justify-between">
                        <div className="text-sm md:text-base font-medium">Sky ID Number</div>
                        <div className="flex items-center md:mt-0">
                            <svg
                            className="me-2 mb-3"
                            width="24"
                            height="24"
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
                            <p className="text-sm md:text-base font-medium">0700310040</p>
                        </div>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
            </div>
            <div style={{ paddingBottom: '2%'}}><h4><b>Numper Mapping</b></h4> </div>
            <div><p>Enter numbers to map to Sky ID Number</p></div>
            <div>
                <div className="flex justify-between items-center">
                    <div className="mt-1"> <Select value={selectedOption} onChange={handleChange} options={Networkoptions} placeholder="Network Type" styles={customStyles} /> </div>
                    <CustomInput name="mappednumber" placeholder="Enter Number"  control={control as never} style="h-[45px]"/>
                </div>
                <div className="flex justify-between items-center">
                    <hr className="w-[75%]"/>
                    <p className="mt-3" style={{color:"#00000099"}}>₦20,000.00</p> 
                </div>  
                <div style={{display:"flex", paddingTop:"2%"}}> 
                    <div className='me-2'><svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                        </svg>
                    </div>
                    <p style={{color:"#00000080"}}>Additional mapping cost ₦15,000 for each number added per year</p>
                </div>
                {showAdditionalInput.map((_, index) => (
                    <div className="mb-2" key={index}>
                        <div className="flex justify-between items-center">
                            <div className="mt-1"> <Select value={selectedOption} onChange={handleChange} options={Networkoptions} placeholder="Network Type" styles={customStyles} /> </div>
                            <CustomInput name={`mappednumber-${index + 1}`} placeholder="Enter Number"  control={control as never} style="h-[45px]"/>
                         </div>
                        <div className="flex justify-between items-center">
                            <hr className="w-[75%]"/>
                            <p className="mt-3" style={{color:"#00000099"}}>₦15,000.00</p> 
                        </div>  
                    </div>
                ))}
                <CustomButton
                    name="Add More"
                    backgroundColor="bg-[#FFFFFF]"
                    textColor="text-[#00000080]"
                    style="w-[full] p-2" 
                    border="border-2 border-[#5A9CFF]"
                    onClick={handleAddMoreClick}
                    trailingIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>}
                />
            </div>
            <div className="mt-[40px] mb-5">
                <Link to="/app/buyNumber/dashboardAddOns" className="no-underline">
                    <CustomButton 
                    name="Continue" 
                    backgroundColor="bg-[#D92027]" 
                    textColor="text-white" 
                    style="w-full max-w-[500px] p-3 mx-auto" 
                    />
                </Link>
            </div>
        </div>
    )

}
