import {fakeData3 } from "../assets/data/index";
import { AddOnsTable } from "../components/AddOnsTable";
import { Row, Col } from "react-bootstrap";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { useState } from 'react';
import SelectDateButton from "../components/SelectDateButton";
import { NestedDropdown } from "../components/NestedDropdown";

export const  AddOns = () => {

  const Statusoptions = [
    { id: 'all', label: 'All', value: "all", children: [] },
    {
      id: "ivr-status",
      label: 'IVR Status',
      children: [
        { id: '3', value: 'Awaiting IVR', label: 'Awaiting IVR', parentId: 'ivr-status' , children: []  },
        { id: '4', value: 'IVR Added', label: 'IVR Added', parentId: 'ivr-status' , children: []  },
        { id: '5', value: 'No IVR', label: 'No IVR', parentId: 'ivr-status' , children: []  },
      ],
    },
    {
      id: 'ivm-status',
      label: 'IVM Status',
      children: [
        { id: '7', value: 'Awaiting IVM', label: 'Awaiting IVM', parentId: 'ivm-status' , children: []  },
        { id: '8', value: 'IVM Added', label: 'IVM Added', parentId: 'ivm-status'  , children: [] },
        { id: '9', value: 'No IVM', label: 'No IVM', parentId: 'ivm-status' , children: []  },
      ],
    },
  ];

  const [searchItem, setSearchItem] = useState('')
  const [filteredData, setFilteredData] = useState(fakeData3);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchTerm = e.target.value.toLowerCase();
      setSearchItem(searchTerm);

      const filteredItems = fakeData3.filter((item) =>
        item.Number.toLowerCase().includes(searchTerm)
      );

      setFilteredData(filteredItems);
  };

  const handleFilterChange = (selectedFilters: { [key: string]: boolean }) => {
    // Create a mapping of filter IDs to their corresponding values
    const filterMapping: { [key: string]: string } = {
      '3': 'Awaiting IVR',
      '4': 'IVR Added',
      '5': 'No IVR',
      '7': 'Awaiting IVM',
      '8': 'IVM Added',
      '9': 'No IVM',
    };
  
    // Get active filters based on selected checkboxes
    const activeFilters = Object.keys(selectedFilters).filter((key) => selectedFilters[key]);
  
    if (activeFilters.length === 0 || activeFilters.includes("all")) {
      // If no filters are selected or "all" is selected, show all data
      setFilteredData(fakeData3);
    } else {
      // Filter the data based on the active filters and their corresponding values
      setFilteredData(
        fakeData3.filter((item) =>
          activeFilters.some((filterId) => {
            const filterValue = filterMapping[filterId];
            return item.IVRstatus === filterValue || item.IVMstatus === filterValue;
          })
        )
      );
    }
  };
  
  const handleDateChange = (startDate: Date | null, endDate: Date | null, isSingleDate: boolean) => {
    if (isSingleDate && startDate) {
      // Filter by the single date
      const filtered = fakeData3.filter(item => {
        const itemDate = new Date(item.Date);
        return itemDate.toDateString() === startDate.toDateString();  // Compare only date part
      });
      setFilteredData(filtered);
    } else if (startDate && endDate) {
      // Filter by the date range
      const filtered = fakeData3.filter(item => {
        const itemDate = new Date(item.Date);
        return itemDate >= startDate && itemDate <= endDate;
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(fakeData3);  // No date selected, show all data
    }
  };
  
    return (
      <div>
        <div style={{paddingTop:"5%"}}>
            <h2><b>Add Ons</b></h2>
        </div>
        <div style={{paddingTop:"2%"}}>
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
                            </InputGroup>
                        </Form>
                    </Col>
                <Col md="auto">
                    <NestedDropdown options={Statusoptions} onFilterChange={handleFilterChange}/>
                </Col>
                <Col md="auto">
                  <SelectDateButton onDateChange={handleDateChange} />
                </Col>
            </Row>
        </div>
        <div style={{paddingTop:"3%"}}>
            <div style={{paddingTop:""}}><AddOnsTable Data={filteredData}/></div>
        </div>
      </div>
    )
}
