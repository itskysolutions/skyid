//import CustomButton from '../components/CustomButton';
//import { useNavigate } from 'react-router-dom'; 
import { Row, Col } from "react-bootstrap";
import Select from "react-select";
import { useState, useEffect } from 'react';
import { Form, FormControl, Button, InputGroup } from "react-bootstrap";
import { VSOData } from "../../assets/data";
import { VSOTable } from "../../components/CPComponents/VSOTable";

export const ManageVSOs = () => {
    type OptionType = { value: string; label: string };
    const [searchItem, setSearchItem] = useState('')
    const [filteredData, setFilteredData] = useState(VSOData);
    const [selectedOption, setSelectedOption1] = useState<OptionType | null>(null);
    const [selectedSalesFilterOption, setSelectedSalesFilterOption] = useState<OptionType | null>(null);
    const [maxRatio, setMaxRatio] = useState(10);
    const [showDropdown, setShowDropdown] = useState(false); 

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchItem(searchTerm);
    
        const filteredItems = VSOData.filter((item) =>
          item.Name.toLowerCase().includes(searchTerm)
        );
    
        setFilteredData(filteredItems);
    };

    const Statusoptions = [
        { value: 'all', label: 'All' },
        { value: 'Active', label: 'Active' },
        { value: 'Blocked', label: 'Blocked' },
      ];

    const SalesOptions = [
        { value: 'all', label: 'All Data' },
        { value: 'top5highest', label: 'Top 5 Highest Sales' },
        { value: 'top5lowest', label: 'Top 5 Lowest Sales' },
    ];

    const handleChange1 = (option: OptionType | null) => {
        setSelectedOption1(option);
    };

    const handleSalesFilterChange = (option: OptionType | null) => {
        setSelectedSalesFilterOption(option);
    };

    const handleAddNewVSOClick = () => {
        window.location.href = "/manageVSOs/addNewVSO";
      };

    useEffect(() => {
        let data = VSOData;

        if (selectedOption && selectedOption.value !== 'all') {
            data = data.filter(item => item.Status === selectedOption.value);
        }

        data = data.filter(item => {
            const ratio = item.Ratio || 0; 
            return ratio <= maxRatio;
        });

        if (selectedSalesFilterOption) {
            if (selectedSalesFilterOption.value === 'top5highest') {
                data = data.sort((a, b) => b.TotalSales - a.TotalSales).slice(0, 5);
            } else if (selectedSalesFilterOption.value === 'top5lowest') {
                data = data.sort((a, b) => a.TotalSales - b.TotalSales).slice(0, 5);
            }
        }

        setFilteredData(data);
    }, [selectedOption, maxRatio, selectedSalesFilterOption]);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const customStyles = {
        control: (provided: any) => ({
          ...provided,
          width: '151px',
          height: '47px',
          minHeight: '45px'
        })
      };
    return(
        <div>
            <div style={{paddingTop:"5%"}}>
            <h2><b>Manage VSO's</b></h2>
            </div>
            <div className="mt-4">
                <button onClick={handleAddNewVSOClick} className="bg-[#277CFA] p-3 text-white rounded-md w-[205px] h-[56px]">Add New VSO</button>
            </div>
            <div style={{paddingTop:"2%"}}>
            <Row className="d-flex ">
                 <Col md="auto" className="mb-2" style={{marginBottom:""}}>
                    <Form className="d-flex w-[462px]"> 
                        <InputGroup>
                            <FormControl
                            type="text"
                            placeholder="Search"
                            value={searchItem}
                            onChange={handleInputChange}
                            aria-label="Search"
                            className="pb-3 "
                            />
                            </InputGroup>
                        </Form>
                    </Col>
                <Col md="auto" className="mb-2">
                    <Select 
                        value={selectedOption}
                        onChange={handleChange1}
                        options={Statusoptions}
                        placeholder="Status:" 
                        styles={customStyles}
                    />
                </Col>
                <Col md="auto">
                    <Select
                        value={selectedSalesFilterOption}
                        onChange={handleSalesFilterChange}
                        options={SalesOptions}
                        placeholder="Sales Filter:"
                        styles={customStyles}
                    />
                </Col>
                <Col md="auto" className="mb-2">
                    <button 
                        onClick={toggleDropdown} 
                        className="bg-[#D92027] text-white p-2 rounded-md h-[47px]"
                    >
                        Select Ratio
                    </button>
                    {/* Dropdown for Ratios */}
                    {showDropdown && (
                            <div className="ratio-filter-card mt-2">
                                <label style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px" }}>Filter by Ratio:</label>
                                <div style={{ marginBottom: "10px" }}>
                                    <label>Max Ratio: {maxRatio}%</label>
                                    <input 
                                        type="range" 
                                        min="5" 
                                        max="10" 
                                        step="0.1"
                                        value={maxRatio} 
                                        onChange={(e) => setMaxRatio(Number(e.target.value))}
                                        style={{
                                            width: "200px", 
                                            marginTop: "5px"
                                        }}
                                    />
                                </div>
                                <style>{`
                                .ratio-filter-card {
                                    background-color: #ffffff;
                                    padding: 15px; 
                                    border-radius: 8px; 
                                    border: 1px solid #d1d1d1;
                                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 
                                    backdrop-filter: blur(8px); 
                                    margin-bottom: 15px;
                                    width: fit-content; 
                                }

                                .ratio-filter-card label {
                                    font-size: 16px;
                                    font-weight: 600;
                                    margin-bottom: 10px;
                                    display: block;
                                }

                                .ratio-filter-card input[type="range"] {
                                    width: 100%; 
                                    margin-top: 10px;
                                }
                                `}</style>
                            </div>
                        )}
                    </Col>
            </Row>
        </div>
        <div style={{paddingTop:"3%"}}><VSOTable Data={filteredData}/></div>
     </div>
    )
}