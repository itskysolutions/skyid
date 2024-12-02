import {  FormControl, Form, InputGroup, Tab, Tabs } from 'react-bootstrap';
import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from '../components/CustomButton';
import { Table } from "../components/Table";
import {fakeData } from "../assets/data/index";
import { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import Select from "react-select";
import SelectDateButton from "../components/SelectDateButton";
import { useEffect } from 'react'; 
import Card from "react-bootstrap/Card";
import { SuccessComponent } from "../components/SuccessComponent"

type OptionType = { value: string; label: string };

export const  ManageNumbers = () =>  {
    const { control } = useForm();

    const [showAdditionalInput, setShowAdditionalInput] = useState<string[]>([]);
    const [showProceedButton, setShowProceedButton] = useState(false);
    const [popupState, setPopupState] = useState<"replace" | "success"  | null>(null);

    const handleAddMoreClick = () => {
        setShowAdditionalInput((prev) => [...prev, `mappednumber-${prev.length + 1}`]); 
        setShowProceedButton(true);
    };

    const handleReplaceButton = () => {
        setPopupState("replace"); 
    };

    const handleSuccessButton = () => {
        setPopupState("success"); 
    };

    const [showSuccess, setShowSuccess] = useState(false); 

    const handleCheckout = () => {
        setShowSuccess(true);
    };

    const Typeoptions = [
        { value: 'all', label: 'All' },
        { value: 'Additional Line', label: 'Additional Line' },
        { value: 'Special Number', label: 'Special Number' },
      ];

    const Statusoptions = [
        { value: 'all', label: 'All' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Pending', label: 'Pending' },
        { value: 'Failed', label: 'Failed' },
    ];

    const Actionoptions = [
        { value: 'all', label: 'All' },
        { value: 'Created', label: 'Created' },
        { value: 'Mapped', label: 'Mapped' },
        { value: 'Deleted', label: 'Deleted' },
    ];

    const [searchItem, setSearchItem] = useState('')
    const [selectedOption1, setSelectedOption1] = useState<OptionType | null>(null);
    const [selectedOption2, setSelectedOption2] = useState<OptionType | null>(null);
    const [selectedOption3, setSelectedOption3] = useState<OptionType | null>(null);
    const [filteredData, setFilteredData] = useState(fakeData);

    useEffect(() => {
        let data = fakeData;

        if (selectedOption1 && selectedOption1.value !== 'all') {
            data = data.filter(item => item.Type === selectedOption1.value);
        }

        if (selectedOption2 && selectedOption2.value !== 'all') {
            data = data.filter(item => item.Status === selectedOption2.value);
        }

        if (selectedOption3 && selectedOption3.value !== 'all') {
            data = data.filter(item => item.Action === selectedOption3.value);
        }

        setFilteredData(data);
    }, [selectedOption1, selectedOption2, selectedOption3]);

    const handleChange1 = (option: OptionType | null) => {
        setSelectedOption1(option);
    };

    const handleChange2 = (option: OptionType | null) => {
        setSelectedOption2(option);
    };

    const handleChange3 = (option: OptionType | null) => {
        setSelectedOption3(option);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchItem(searchTerm);
    
        const filteredItems = fakeData.filter((item) =>
          item.Number.toLowerCase().includes(searchTerm)
        );
    
        setFilteredData(filteredItems);
    };

    const handleDateChange = (startDate: Date | null, endDate: Date | null, isSingleDate: boolean) => {
        if (isSingleDate && startDate) {
          // Filter by the single date
          const filtered = fakeData.filter(item => {
            const itemDate = new Date(item.Date);
            return itemDate.toDateString() === startDate.toDateString();  // Compare only date part
          });
          setFilteredData(filtered);
        } else if (startDate && endDate) {
          // Filter by the date range
          const filtered = fakeData.filter(item => {
            const itemDate = new Date(item.Date);
            return itemDate >= startDate && itemDate <= endDate;
          });
          setFilteredData(filtered);
        } else {
          setFilteredData(fakeData);  // No date selected, show all data
        }
      };

    const customStyles = {
        control: (provided: any) => ({
          ...provided,
          width: '151px',
          height: '45px',
          minHeight: '45px'
        })
      };

    return (
      <div>
        <div style={{paddingTop:"5%"}}>
            <h2><b>Manage Numbers</b></h2>
        </div>
        <div style={{paddingTop:"3%"}}>
            <Tabs defaultActiveKey="SkyIDNumber" className="mb-3 horizontal-tabs custom-tabs" transition={false}>
                <Tab eventKey="SkyIDNumber" title={<span className="tab-title">Sky ID Number</span>} className="headings">
                    <Row>
                        <Col xs={6} md={6}> 
                            <CustomInput
                                control={control}
                                name=""
                                placeholder="07003100015"
                                style="w-[full]" 
                                plainText
                                bgInput='bg-[#eaeaea]'
                            />
                        </Col>
                        <Col xs={6} md={6} style={{paddingTop:"0.5%"}}> 
                            <CustomButton
                                name="Renewal Date: 12/03/2025"
                                backgroundColor="bg-[#E4EFFF]"
                                textColor="text-black"
                                style="w-[50%] p-3" 
                            />
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="MappedLines" title={<span className="tab-title">Mapped Lines</span>} className="headings">
                    <Row>
                        <Col md="auto"> 
                            <CustomInput
                                control={control}
                                name=""
                                placeholder="09023507465"
                                style="w-[333px]" 
                            />
                        </Col>
                        <Col md="auto" style={{paddingTop:"10px"}}> 
                            <CustomButton
                                name="Replace"
                                onClick={handleReplaceButton}
                                backgroundColor="bg-[#0DC143]"
                                textColor="text-white"
                                style="w-[full] p-3" 
                            />
                        </Col>
                        <Col md="auto" style={{paddingTop:"10px"}}> 
                            <CustomButton
                                name="Remove"
                                backgroundColor="bg-[#D92027]"
                                textColor="text-white"
                                style="w-[full] p-3" 
                            />
                        </Col>
                    </Row>
                    <Row style={{paddingTop:"3%"}}>
                        <Col md="auto"> 
                            <CustomInput
                                control={control}
                                name=""
                                placeholder="08189210086"
                                style="w-[333px]" 
                            />
                        </Col>
                        <Col md="auto" style={{paddingTop:"10px"}}> 
                            <CustomButton
                                name="Replace"
                                onClick={handleReplaceButton}
                                backgroundColor="bg-[#0DC143]"
                                textColor="text-white"
                                style="w-[full] p-3" 
                            />
                        </Col>
                        <Col md="auto" style={{paddingTop:"10px"}}> 
                            <CustomButton
                                name="Remove"
                                backgroundColor="bg-[#D92027]"
                                textColor="text-white"
                                style="w-[full] p-3" 
                            />
                        </Col>
                    </Row>
                    <div style={{paddingTop:"3%"}}><hr  style={{width:"65%", border:"1px solid #0000001A", }}/></div>
                    {showAdditionalInput.map((_, index) => (
                        <div className="flex  mb-4">
                            <CustomInput 
                                name={`mappednumber-${index + 1}`}
                                placeholder="Enter Number"  
                                control={control} 
                            />
                            <p className="mt-3" style={{color:"#00000099", paddingLeft:"27%"}}>₦15,000.00</p>   
                        </div>
                    ))}
                    <div style={{display:"flex"}}> 
                        <div className='me-2'><svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                            </svg></div>
                        <p style={{color:"#00000080"}}>Additional mapping cost ₦15,000 for each number added per year</p>
                    </div>
                    <div className='mb-5'> 
                        <CustomButton
                            name="New Mapping Request"
                            backgroundColor="bg-[#FFFFFF]"
                            textColor="text-[#00000080]"
                            style="w-[30%] p-4" 
                            onClick={handleAddMoreClick}
                            border="border-2 border-[#5A9CFF]"
                            trailingIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                            </svg>}
                        />
                    </div>
                    {showProceedButton && (
                        <div className="flex items-center mt-5">
                            <CustomButton
                                name="Proceed to Checkout"
                                onClick={handleCheckout}
                                backgroundColor="bg-[#FFFFFF]"
                                textColor="text-[#D92027]"
                                style="w-[40%]"
                                border="border-2 border-[#D92027] mb-5"
                            />
                        </div>
                    )}
                    {showSuccess && (
                         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative overflow-y-auto max-h-[90vh]" style={{color:'#00000099'}}>
                                <SuccessComponent 
                                    label="Your payment has been confirmed" 
                                    paragraph="Check your email inbox to see your transaction receipts." 
                                    buttonLabel="Done" 
                                    buttonLink="/app/manageNumbers" 
                                />
                            </div>
                        </div>
                    )}
                    {popupState === "replace" && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative overflow-y-auto max-h-[90vh]" style={{color:'#00000099'}}>
                                <button onClick={() => setPopupState(null)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                                    ✕
                                </button>
                                <h2 className="text-xl font-semibold mb-4">Replace Mapped Line</h2>
                                <div className='mb-4'>
                                    <CustomInput
                                        control={control}
                                        name=""
                                        placeholder="08189210086"
                                        style="w-[full]" 
                                        plainText
                                        label='Current Number'
                                    />
                                </div>
                                <hr />
                                <div className='mb-4'>
                                    <CustomInput
                                        control={control}
                                        name=""
                                        placeholder="Enter new number"
                                        style="w-[full]" 
                                        label='Replace With'
                                    />
                                </div>
                                <div className='flex justify-between'>
                                    <div><p><b>Total</b></p></div>
                                    <div><b>N2,000.00</b></div>
                                </div>
                                <div className="mt-4" style={{display:"flex"}}> 
                                    <div className='me-2'>
                                        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                                        </svg>
                                    </div>
                                    <p style={{color:"#00000080"}}> You will be charged N2,000 for replacing your mapped line.</p>
                                </div>
                                <div className="mt-4">
                                    <CustomButton
                                        onClick={handleSuccessButton}
                                        name="Proceed to pay N2,000.00"
                                        backgroundColor="bg-[#D92027]"
                                        textColor="text-[#ffffff]"
                                        style="w-[100%] p-3"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Success Popup */}
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
                                            Your Payment has been confirmed
                                            </p></h5>
                                        </div>
                                        <div className="flex justify-content-center text-center">
                                            <p>Access the Manage Numbers tab to manage your numbers.</p>
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
                </Tab>
                <Tab eventKey="History" title={<span className="tab-title">History</span>}  className="headings">
                    <div style={{paddingTop:"2%", paddingBottom:"2%"}}>
                        <Row className="d-flex ">
                            <Col md="auto" className='mb-2'>
                            <Form className="d-flex">
                                    <InputGroup>
                                        <FormControl
                                        type="text"
                                        placeholder="Search"
                                        value={searchItem}
                                        onChange={handleInputChange}
                                        aria-label="Search"
                                        className="pb-3"
                                        />
                                    </InputGroup>
                                </Form>
                            </Col>
                            <Col md="auto" className='mb-2'>
                                <Select 
                                    value={selectedOption1}
                                    onChange={handleChange1}
                                    options={Typeoptions}
                                    placeholder="Type:" 
                                    styles={customStyles}
                                />
                            </Col>
                            <Col md="auto" className='mb-2'>
                                <Select 
                                    value={selectedOption2}
                                    onChange={handleChange2}
                                    options={Statusoptions}
                                    placeholder="Status:" 
                                    styles={customStyles}
                                />
                            </Col>
                            <Col md="auto" className='mb-2'>
                                <Select 
                                    value={selectedOption3}
                                    onChange={handleChange3}
                                    options={Actionoptions}
                                    placeholder="Action:" 
                                    styles={customStyles}
                                />
                            </Col>
                            <Col md="auto" className='mb-2'>
                                <SelectDateButton onDateChange={handleDateChange}/>
                            </Col>
                        </Row>
                    </div>
                    <Table Data={filteredData}/>
                </Tab>
            </Tabs>
            <style>{`
            .custom-tabs .nav-link {
                color: #333333;
                background-color: #EEEEEE
            }
            .custom-tabs .nav-link.active {
                background-color: #333333; 
                color: #FFFFFF; 
            }
            `}</style>
        </div>
      </div>
    )
}
