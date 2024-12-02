import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom'; 
import { Row, Col } from "react-bootstrap";
import Select from "react-select";
import SelectDateButton from "../components/SelectDateButton";
import { useState, useEffect } from 'react';
import { WalletTable } from '../components/WalletTable';
import {fakeData2 } from "../assets/data/index"; 
import { Form, FormControl, Button, InputGroup } from "react-bootstrap";

export  const Wallet = () => {
    type OptionType = { value: string; label: string };

    const navigate = useNavigate();

    const Typeoptions = [
        { value: 'all', label: 'All' },
        { value: 'Deposit', label: 'Deposit' },
        { value: 'Withdraw', label: 'Withdraw' },
      ];

    const Statusoptions = [
        { value: 'all', label: 'All' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Pending', label: 'Pending' },
        { value: 'Failed', label: 'Failed' },
    ];

    const [searchItem, setSearchItem] = useState('')
    const [selectedOption1, setSelectedOption1] = useState<OptionType | null>(null);
    const [selectedOption2, setSelectedOption2] = useState<OptionType | null>(null);
    const [filteredData, setFilteredData] = useState(fakeData2);

    useEffect(() => {
        let data = fakeData2;

        if (selectedOption1 && selectedOption1.value !== 'all') {
            data = data.filter(item => item.Type === selectedOption1.value);
        }

        if (selectedOption2 && selectedOption2.value !== 'all') {
            data = data.filter(item => item.Status === selectedOption2.value);
        }


        setFilteredData(data);
    }, [selectedOption1, selectedOption2]);

    const handleChange1 = (option: OptionType | null) => {
        setSelectedOption1(option);
    };

    const handleChange2 = (option: OptionType | null) => {
        setSelectedOption2(option);
    };


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchItem(searchTerm);
    
        const filteredItems = fakeData2.filter((item) =>
          item.Ref_ID.toLowerCase().includes(searchTerm)
        );
    
        setFilteredData(filteredItems);
    };

    const handleDateChange = (startDate: Date | null, endDate: Date | null, isSingleDate: boolean) => {
        if (isSingleDate && startDate) {
          // Filter by the single date
          const filtered = fakeData2.filter(item => {
            const itemDate = new Date(item.Date);
            return itemDate.toDateString() === startDate.toDateString();  // Compare only date part
          });
          setFilteredData(filtered);
        } else if (startDate && endDate) {
          // Filter by the date range
          const filtered = fakeData2.filter(item => {
            const itemDate = new Date(item.Date);
            return itemDate >= startDate && itemDate <= endDate;
          });
          setFilteredData(filtered);
        } else {
          setFilteredData(fakeData2);  // No date selected, show all data
        }
      };


    const customStyles = {
        control: (provided: any) => ({
          ...provided,
          width: '265px',
          height: '45px',
          minHeight: '45px'
        })
      };

    return (
      <div>
        <div style={{paddingTop:"5%", color:"#00000099", display: 'flex'}}><h2><b>Wallet Balance</b></h2>
        <div className="mt-2 ms-2" ><svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
            </svg></div>
        </div>
        <div>
            <Row className="d-flex justify-content-end">
                <Col md="auto" className='mb-2'>
                    <CustomButton
                        name="Deposit"
                        backgroundColor="bg-[#D92027]"
                        textColor="text-white"
                        style="w-[160px] h-[55.47px]" 
                        onClick={() => navigate("/app/wallet/deposit")}
                        trailingIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0z"/>
                          </svg>}
                    />
                </Col>
                <Col md="auto" className='mb-2'>
                    <CustomButton
                        name="Withdraw"
                        backgroundColor="bg-[#ffffff]"
                        textColor="text-[#D92027]"
                        style="w-[160px] h-[55.47px]" 
                        border="border-2 border-[#D92027]"
                        onClick={() => navigate("/app/wallet/withdraw")}
                        trailingIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                          </svg>}
                    />
                </Col>
            </Row>
        </div>
        <div><h1 style={{color:"#00000099"}}><b>₦250,000.00</b></h1></div>
        <div><h4  style={{color:"#00000099", paddingTop:"7%"}}>Transaction History</h4></div>
        <div style={{paddingTop:"2%"}}>
            <Row className="d-flex ">
                 <Col md="auto" style={{marginBottom:"2%"}}>
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
                <Col md="auto">
                    <SelectDateButton onDateChange={handleDateChange} />
                </Col>
            </Row>
        </div>
        <div style={{paddingTop:"3%"}}><WalletTable Data={filteredData}/></div>
      </div>
    )
}
