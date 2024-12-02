import {  FormControl, Form, InputGroup, Tab, Tabs } from 'react-bootstrap';
import { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import Select from "react-select";
import SelectDateButton from '../../components/SelectDateButton';
import { useEffect } from 'react'; 
import { PendingData } from '../../assets/data';
import { CompletedData } from '../../assets/data';
import { FinanceTable } from '../../components/Finance/FinanceTable';
import { NoInteractiveFinanceTable } from '../../components/Finance/NoInteractiveFinanceTable';

type OptionType = { value: string; label: string };

export const ManageRequests = () => {

    const [searchItem, setSearchItem] = useState('')
    const [userOption, setuserOption] = useState<OptionType | null>(null);
    const [filteredData, setFilteredData] = useState(PendingData);
    const [activeTab, setActiveTab] = useState('pendingRequests');
    const currentData = activeTab === 'pendingRequests' ? PendingData : CompletedData;

    const UserLevel = [
        { value: 'all', label: 'All' },
        { value: 'VSO', label: 'VSO' },
        { value: 'Channel Partner', label: 'Channel Partner' },
    ];

    useEffect(() => {
        let data = currentData;
    
        if (userOption && userOption.value !== 'all') {
          data = data.filter(item => item.userLevel === userOption.value);
        }
    
        setFilteredData(data);
      
    }, [userOption, activeTab]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchItem(searchTerm);
    
        const filteredItems = currentData.filter((item) =>
          item.Name.toLowerCase().includes(searchTerm)
        );
    
        setFilteredData(filteredItems);
      };

    const handleTabChange = (tab: string | null) => {
        if (tab) {
            setActiveTab(tab); // Update active tab
            setFilteredData(tab === 'pendingRequests' ? PendingData : CompletedData); // Reset data for the active tab
            setSearchItem(''); // Clear search input
            setuserOption(null); // Reset user filter
        }
    };

    const handleDateChange = (startDate: Date | null, endDate: Date | null, isSingleDate: boolean) => {
        const parseDate = (dateString: string) => {
          const [day, month, year] = dateString.split('/').map(Number); // Split and convert to numbers
          return new Date(year, month - 1, day); // Create a valid Date object (month is 0-based)
        };
      
        const filtered = currentData.filter((item) => {
          const itemDate = parseDate(item.Date); // Parse the item's date
      
          if (isSingleDate && startDate) {
            return itemDate.toDateString() === startDate.toDateString();
          } else if (startDate && endDate) {
            return itemDate >= startDate && itemDate <= endDate;
          }
          return true; // No filtering if no dates are selected
        });
      
        setFilteredData(filtered);
      };
      

      const customStyles = {
        control: (provided: any) => ({
          ...provided,
          width: '300px',
          height: '45px',
          minHeight: '45px'
        })
      };
    return (
        <div>
            <div style={{paddingTop:"5%"}}>
                <h2><b>Manage Requests</b></h2>
            </div>
            <div style={{paddingTop:"2%", paddingBottom:"2%"}}>
                <Row className="d-flex ">
                    <Col md="auto">
                        <Form className="d-flex w-full sm:w-[550px] mb-2">
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
                        <SelectDateButton onDateChange={handleDateChange}/>
                    </Col>
                    <Col md="auto">
                        <Select 
                            value={userOption}
                            onChange={setuserOption}
                            options={UserLevel}
                            placeholder="User Level:" 
                            styles={customStyles}
                        />
                    </Col>
                </Row>
            </div>
            <div style={{paddingTop:""}}>
                <Tabs defaultActiveKey="pendingRequests" className="mb-3 horizontal-tabs custom-tabs" transition={false} onSelect={handleTabChange}>
                    <Tab eventKey="pendingRequests" title={<span className="tab-title">Pending Requests</span>} className="headings">
                        <div><FinanceTable Data={filteredData}/></div>
                    </Tab>
                    <Tab eventKey="completedRequests" title={<span className="tab-title">Completed Requests</span>} className="headings">
                        <div style={{paddingTop:"2%", paddingBottom:"2%"}}>
                            <div><NoInteractiveFinanceTable Data={filteredData}/></div>
                        </div>
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