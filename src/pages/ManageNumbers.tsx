import { Button, FormControl, Form, InputGroup, Tab, Tabs } from 'react-bootstrap';
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

type OptionType = { value: string; label: string };

export const  ManageNumbers = () =>  {
    const { control } = useForm();

    const [showAdditionalInput, setShowAdditionalInput] = useState(false);

    const handleAddMoreClick = () => {
        setShowAdditionalInput(true);
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
            <Tabs defaultActiveKey="SpecialNumber" className="mb-3 horizontal-tabs custom-tabs" transition={false}>
                <Tab eventKey="SpecialNumber" title={<span className="tab-title">Special Numbers</span>} className="headings">
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
                                style="w-[50%]" 
                            />
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="AdditionalLines" title={<span className="tab-title">Additional Lines</span>} className="headings">
                    <Row>
                        <Col xs={6} md={6}> 
                            <CustomInput
                                control={control}
                                name=""
                                placeholder="09023507465"
                                style="w-[full]" 
                                plainText
                                bgInput='bg-[#eaeaea]'
                            />
                        </Col>
                        <Col xs={6} md={6} style={{paddingTop:"0.5%"}}> 
                            <CustomButton
                                name="Remove"
                                backgroundColor="bg-[#D92027]"
                                textColor="text-white"
                                style="w-[30%]" 
                            />
                        </Col>
                    </Row>
                    <Row style={{paddingTop:"3%"}}>
                        <Col xs={6} md={6}> 
                            <CustomInput
                                control={control}
                                name=""
                                placeholder="08189210086"
                                style="w-[full]" 
                                plainText
                                bgInput='bg-[#eaeaea]'
                            />
                        </Col>
                        <Col xs={6} md={6} style={{paddingTop:"0.5%"}}> 
                            <CustomButton
                                name="Remove"
                                backgroundColor="bg-[#D92027]"
                                textColor="text-white"
                                style="w-[30%]" 
                            />
                        </Col>
                    </Row>
                    <div style={{paddingTop:"3%"}}><hr  style={{width:"65%", border:"1px solid #0000001A", }}/></div>
                    {showAdditionalInput && (
                        <div className="flex  mb-4">
                            <CustomInput 
                                name="mappednumber-2" 
                                placeholder="Enter Number"  
                                control={control} 
                            />
                            <p className="mt-3" style={{color:"#00000099", paddingLeft:"27%"}}>₦15,000.00</p>   
                        </div>
                    )}
                    <div style={{display:"flex"}}> 
                        <div className='me-2'><svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                            </svg></div>
                        <p style={{color:"#00000080"}}>Additional mapping cost ₦15,000 for each number added per year</p>
                    </div>
                    <div>
                        <CustomButton
                            name="New Mapping Request"
                            backgroundColor="bg-[#FFFFFF]"
                            textColor="text-[#00000080]"
                            style="w-[20%]" 
                            onClick={handleAddMoreClick}
                            border="border-2 border-[#5A9CFF]"
                            trailingIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                            </svg>}
                        />
                    </div>
                    {showAdditionalInput && (
                    <div className="flex items-center mt-5">
                        <CustomButton
                            name="Proceed to Checkout"
                            backgroundColor="bg-[#FFFFFF]"
                            textColor="text-[#D92027]"
                            style="w-[40%]" 
                            border="border-2 border-[#D92027]"
                        />
                    </div>
                    )}
                </Tab>
                <Tab eventKey="History" title={<span className="tab-title">History</span>}  className="headings">
                    <div style={{paddingTop:"2%", paddingBottom:"2%"}}>
                        <Row className="d-flex ">
                            <Col md="auto">
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
                                        <Button
                                        onClick={(e) => e.preventDefault()}
                                        className="bg-white"
                                        style={{ border: "0.84px solid rgba(0, 0, 0, 0.2)" }}
                                        >
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                            d="M18.5 18.5L21 21"
                                            stroke="black"
                                            strokeLinecap="round"
                                            className="my-path"
                                            ></path>
                                            <path
                                            d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                            stroke="black"
                                            className="my-path"
                                            ></path>
                                        </svg>
                                        </Button>
                                    </InputGroup>
                                </Form>
                            </Col>
                            <Col md="auto">
                                <Select 
                                    value={selectedOption1}
                                    onChange={handleChange1}
                                    options={Typeoptions}
                                    placeholder="Type:" 
                                    styles={customStyles}
                                />
                            </Col>
                            <Col md="auto">
                                <Select 
                                    value={selectedOption2}
                                    onChange={handleChange2}
                                    options={Statusoptions}
                                    placeholder="Status:" 
                                    styles={customStyles}
                                />
                            </Col>
                            <Col md="auto">
                                <Select 
                                    value={selectedOption3}
                                    onChange={handleChange3}
                                    options={Actionoptions}
                                    placeholder="Action:" 
                                    styles={customStyles}
                                />
                            </Col>
                            <Col md="auto">
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
