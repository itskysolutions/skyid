import CustomInput from "../components/CustomInput";
import CustomButton from '../components/CustomButton';
import { useForm } from "react-hook-form";
import Card from "react-bootstrap/Card";
import React, { useState } from 'react';

export const  Withdraw = () =>  {
  const { control } = useForm();

  const [walletBalance, setWalletBalance] = useState(1000); // Starting balance
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setWithdrawAmount(value.toString());

    if (value > walletBalance) {
      setError('Withdraw amount exceeds wallet balance');
    } else {
      setError(''); // Clear error if the value is within the balance
      setWalletBalance(1000 - value); // Adjust wallet balance display
    }
  };
    return (
      <div>
        <div style={{paddingTop:"5%", color:"#00000099"}}><h2>Withdraw Funds</h2></div>
        <Card style={{border:"none", borderRadius:"12px"}}>
          <Card.Body className="bg-[#FFF4F4] w-[40%]" style={{borderRadius:"12px"}}>
            <div style={{display:"flex", paddingTop:""}}> 
              <h3 className="text-lg font-semibold" style={{fontSize:"14px"}}>My Wallet Balance</h3>
              <svg  className="mt-[5px] ms-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
              </svg>
            </div>
            <p className="text-lg font-semibold mt-2">Balance: ₦{walletBalance.toFixed(2)}</p>
          </Card.Body>
        </Card>
        <div className="mt-[40px] w-[40%]">
          <CustomInput name="amount" label={"Amount"} placeholder="Enter amount" asterisk control={control as never} valueInput={withdrawAmount} onChange={handleInputChange} />
            {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>} {/* Display error message */}
        </div>
        <div className="mt-[40px]"><CustomButton name="Confirm" backgroundColor="bg-[#666666]" textColor="text-[#ffffff]" style="w-[449px]" /></div>

        {/* <div className="mt-4" style={{display:"flex"}}> 
          <div className='me-2'><svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
              </svg></div>
          <p style={{color:"#00000080"}}>Ensure audio format is .mp3, .wav etc.</p>
        </div> */}
      </div>
    )

}
