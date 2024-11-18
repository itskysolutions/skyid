import  { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'react-bootstrap';

type SelectDateButtonProps = {
  onDateChange: (startDate: Date | null, endDate: Date | null, isSingleDate: boolean) => void;
};

const SelectDateButton = ({ onDateChange }: SelectDateButtonProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [isSingleDate, setIsSingleDate] = useState<boolean>(false);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    
    if (start && !end) {
      // If only one date is selected, treat it as a single date
      setStartDate(start);
      setEndDate(null);
      setIsSingleDate(true);
      onDateChange(start, null, true);  // Pass the single date to parent
    } else if (start && end) {
      // If both start and end dates are selected, treat it as a date range
      setStartDate(start);
      setEndDate(end);
      setIsSingleDate(false);
      onDateChange(start, end, false);  // Pass the date range to parent
    }
  };

  const toggleDatePicker = () => {
    setShowDatePicker((prev) => !prev);
  };

  return (
    <div>
      <Button onClick={toggleDatePicker} style={{backgroundColor:"#D92027", border:"2px solid #D92027", height:"45px"}}>
        {startDate && endDate ? `Selected Dates: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}` :
         startDate ? `Selected Date: ${startDate.toLocaleDateString()}` : 'Select Date'}
      </Button>

      {showDatePicker && (
        <div style={{ position: 'absolute', zIndex: 9999 }}>
          <DatePicker
            selected={startDate ?? undefined}
            onChange={handleDateChange}
            startDate={startDate ?? undefined}
            endDate={endDate ?? undefined}
            selectsRange
            inline
          />
        </div>
      )}
    </div>
  );
};

export default SelectDateButton;
