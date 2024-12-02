import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { parse } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { CompletedData } from '../../assets/data';
import Select from 'react-select';
import { NoInteractiveFinanceTable } from '../../components/Finance/NoInteractiveFinanceTable';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

type OptionType = { value: string; label: string };

export const GenerateReports = () => {
    const [selectDays, setSelectDays] = useState<OptionType | null>(null);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [reportData, setReportData] = useState<any[]>([]);
    const [showDownloadPopup, setShowDownloadPopup] = useState(false);

    const Days = [
        { value: '7Days', label: 'Last 7 days' },
        { value: '15Days', label: 'Last 15 days' },
        { value: '30Days', label: 'Last 30 days' },
        { value: '60Days', label: 'Last 60 days' },
    ];

    const generateReport = () => {
        try {
            let filteredData = CompletedData;

            if (selectDays) {
                const stripTime = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
            
                const currentDate = stripTime(new Date());
                const fromDate = new Date(currentDate);
                switch (selectDays.value) {
                    case '7Days':
                        fromDate.setDate(currentDate.getDate() - 7);
                        break;
                    case '15Days':
                        fromDate.setDate(currentDate.getDate() - 15);
                        break;
                    case '30Days':
                        fromDate.setDate(currentDate.getDate() - 30);
                        break;
                    case '60Days':
                        fromDate.setDate(currentDate.getDate() - 60);
                        break;
                    default:
                        console.error('Unknown filter value:', selectDays.value);
                        return;
                }
            
                filteredData = filteredData.filter((row) => {
                    const rowDate = stripTime(parse(row.Date, 'dd/MM/yyyy', new Date()));
                    return rowDate >= fromDate && rowDate <= currentDate;
                });
            }
            
            if (startDate && endDate) {
                if (startDate > endDate) {
                    alert('Start Date cannot be later than End Date.');
                    return;
                }

                filteredData = filteredData.filter((row) => {
                    const rowDate = parse(row.Date, 'dd/MM/yyyy', new Date());
                    return rowDate >= startDate && rowDate <= endDate;
                });
            }
            setReportData(filteredData);
        } catch (error) {
            console.error('Error generating report:', error);
            alert('An error occurred while generating the report.');
        }
    };

    const downloadCSV = () => {
        if (reportData.length === 0) {
            alert('No data available to export.');
            return;
        }
        const csvContent =
            'data:text/csv;charset=utf-8,' +
            reportData
                .map((row) => Object.values(row).join(','))
                .join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'report.csv');
        document.body.appendChild(link);
        link.click();
    };
    
    const downloadPDF = () => {
        if (reportData.length === 0) {
            alert('No data available to export.');
            return;
        }
        const doc = new jsPDF();
        doc.text('Report Data', 14, 10);

        const tableColumn = Object.keys(reportData[0] || {});
        const tableRows = reportData.map((row) =>
            tableColumn.map((key) => row[key])
        );

        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: 20,
        });

        doc.save('report.pdf');
    };


    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            width: '100%',
            maxWidth: '500px',
            height: '45px',
            minHeight: '45px',
        }),
    };

    return (
        <div style={{ padding: '5%' }}>
            <h2>
                <b>Generate Report</b>
            </h2>
            <div className="flex justify-between items-center" style={{ maxWidth: "500px" }}>
                <div className="mt-4 w-full">
                    <label className="block mb-2 font-semibold">Select Last Days:</label>
                    <Select
                        value={selectDays}
                        onChange={(selectedOption: OptionType | null) => {
                            setSelectDays(selectedOption);
                            setStartDate(null);
                            setEndDate(null);
                        }}
                        styles={customStyles}
                        options={Days}
                    />
                </div>
                <div className="ms-5 w-full max-w-xs mt-5">
                    <button
                        onClick={generateReport}
                        className="bg-[#515151] text-white w-full p-2 rounded-md transition-all"
                    >
                        Generate Report
                    </button>
                </div>
            </div>
            <div className='mt-5 flex ' style={{color:"#00000099"}}>
                <hr className='w-[50%]'/>
                <p className='ms-5'>or</p>
                <hr className='w-[50%] ms-5'/>
            </div>

            <div className='flex justify-between items-center' style={{maxWidth:"800px"}}>
                <div className="mt-2">
                    <label className="block mb-2 font-semibold">Date Range:</label>
                    <div className="flex flex-wrap gap-1">
                        <div className="w-full sm:w-auto mb-2">
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => {
                                    setStartDate(date);
                                    setSelectDays(null);
                                }}
                                placeholderText="Start Date"
                                dateFormat="dd/MM/yyyy"
                                className="p-2 border rounded-md w-full"
                            />
                        </div>
                        <div className="w-full sm:w-auto">
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                placeholderText="End Date"
                                dateFormat="dd/MM/yyyy"
                                className="p-2 border rounded-md w-full"
                            />
                        </div>
                    </div>

                </div>
                <div className="ms-5 w-full max-w-xs mt-[35px]">
                    <button
                        onClick={generateReport}
                        className="bg-[#515151] text-white w-full p-2 rounded-md transition-all"
                    >
                        Generate Report
                    </button>
                </div>
            </div>
            <div className="mt-6">
                {reportData.length > 0 ? (
                    <>
                        <div className="mt-4">
                            <div className='flex justify-between'>
                                <h3 className="text-lg font-semibold mb-3">Results</h3>
                                <div className=''>
                                    <button
                                        onClick={() => setShowDownloadPopup(true)}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-md transition-all mb-4"
                                    >
                                        Download Report
                                    </button>
                                </div>
                            </div>
                        </div>
                        <NoInteractiveFinanceTable Data={reportData} />
                    </>
                ) : (
                    <p className="mt-4 text-gray-500">
                        No data to display. Select a range or days to generate a report.
                    </p>
                )}
            </div>
            {showDownloadPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h4 className="text-lg font-bold mb-4">Download Options</h4>
                        <div className="flex flex-col space-y-3">
                            <button
                                onClick={downloadCSV}
                                className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                            >
                                Download as CSV
                            </button>
                            <button
                                onClick={downloadPDF}
                                className="bg-red-500 text-white px-4 py-2 rounded-md"
                            >
                                Download as PDF
                            </button>
                        </div>
                        <button
                            onClick={() => setShowDownloadPopup(false)}
                            className="mt-4 text-gray-600 underline"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
