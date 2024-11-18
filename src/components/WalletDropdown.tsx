import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

const WalletDropdown = () => {

    const navigate = useNavigate();  
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const [isBalanceVisible, setIsBalanceVisible] = useState(true);

    const toggleBalanceVisibility = () => {
        setIsBalanceVisible(!isBalanceVisible);
    };

    return (
    <div className="relative inline-block">
      <button
            onClick={toggleDropdown}
            className="bg-[#FFF4F4] text-gray-500 w-[250px] px-4 py-2 rounded-lg focus:outline-none flex justify-between items-center h-[69px]"
            >
            <span className="">₦250,000.00</span>
            <svg
                className="h-[24px] w-[24px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                {/* Toggle SVG icon based on isOpen state */}
                {isOpen ? (
                <path
                    fillRule="evenodd"
                    d="M5.23 12.79a.75.75 0 011.06-.02L10 9.06l3.71 3.71a.75.75 0 111.06-1.06l-4-4a.75.75 0 01-1.06 0l-4 4a.75.75 0 01-.02 1.06z"
                    clipRule="evenodd"
                />
                ) : (
                <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                />
                )}
            </svg>
        </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-[#FFF4F4] shadow-lg w-[388px]" style={{ borderRadius: "16px", border: "0.84px solid rgba(255, 11, 11, 0.4)" }}
>
          <div className="p-4">
            <div className="flex items-center space-x-4">
                <div style={{display:"flex", paddingTop:""}}> 
                    <h3 className="text-lg font-semibold" style={{fontSize:"14px"}}>My Wallet Balance</h3>
                    <svg  className="mt-[5px] ms-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                    </svg>
                </div>
            </div>
            <div className="flex items-center justify-between">
                {/* Balance */}
                <div>
                    <p className="text-gray-500" style={{ fontSize: "30px" }}>
                    {isBalanceVisible ? "₦250,000.00" : "********"}
                    </p>
                </div>
                
                {/* Toggle Button */}
                <button onClick={toggleBalanceVisibility} className="focus:outline-none ml-4 mb-3">
                    {isBalanceVisible ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.45448 13.8008C1.84656 12.6796 1.84656 11.3204 2.45447 10.1992C4.29523 6.80404 7.87965 4.5 11.9999 4.5C16.1202 4.5 19.7046 6.80404 21.5454 10.1992C22.1533 11.3204 22.1533 12.6796 21.5454 13.8008C19.7046 17.196 16.1202 19.5 11.9999 19.5C7.87965 19.5 4.29523 17.196 2.45448 13.8008Z" stroke="black" stroke-width="null" className="my-path"></path>
                        <path d="M15.0126 11.9551C15.0126 13.6119 13.6695 14.9551 12.0126 14.9551C10.3558 14.9551 9.01263 13.6119 9.01263 11.9551C9.01263 10.2982 10.3558 8.95508 12.0126 8.95508C13.6695 8.95508 15.0126 10.2982 15.0126 11.9551Z" stroke="black" stroke-width="null" className="my-path"></path>
                    </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_425_4503)">
                                <path d="M13.9 14.7C13.3 15.3 12.6 15.6 11.8 15.6C11 15.6 10.2 15.3 9.70005 14.7C9.10005 14.1 8.80005 13.4 8.80005 12.6C8.80005 11.8 9.10005 11 9.70005 10.5L11.8 12.6L13.9 14.7Z" stroke="black" stroke-width="null" className="my-path"></path>
                                <path d="M4 4.7998L19.6 20.3998" stroke="black" stroke-width="null" stroke-linecap="round" className="my-path"></path>
                                <path d="M17.7 18.4998C16 19.5998 14 20.1998 11.8 20.1998C7.70003 20.1998 4.10002 17.8998 2.30002 14.4998C1.60002 13.3998 1.60002 11.9998 2.30002 10.8998C3.20002 9.19981 4.50002 7.7998 6.10002 6.7998" stroke="black" stroke-width="null" className="my-path"></path>
                                <path d="M8.40002 5.7001C9.50002 5.3001 10.6 5.1001 11.8 5.1001C15.9 5.1001 19.5 7.4001 21.3 10.8001C21.9 11.9001 21.9 13.3001 21.3 14.4001C20.8 15.3001 20.2 16.1001 19.5 16.8001" stroke="black" stroke-width="null" stroke-linecap="round" className="my-path"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_425_4503">
                                    <rect width="21.6" height="17.2" fill="white" transform="translate(1 4)"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    )}
                </button>
            </div>

            {/* <div>
                <p className="text-gray-500" style={{fontSize:"30px"}}>₦250,000.00</p>
            </div> */}
            <div className="mt-4" style={{display:"flex"}}>
                <div className="me-4">
                {/* <button className="bg-[#D92027] text-white w-[160px] py-2  hover:bg-[#D92027]" style={{borderRadius:"30px"}}>
                    Add Funds
                </button> */}
                    <CustomButton
                        name="Deposit"
                        backgroundColor="bg-[#D92027]"
                        textColor="text-white"
                        style="w-[160px] rounded-[30px]" 
                        onClick={() => navigate("/app/wallet/deposit")}
                        trailingIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0z"/>
                        </svg>} 
                    />
                </div>
                <div>
                    <CustomButton
                        name="Withdraw"
                        backgroundColor="bg-[#D92027]"
                        textColor="text-white"
                        style="w-[160px] rounded-[30px]" 
                        //onClick={() => navigate("/app/wallet/deposit")}
                        trailingIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                        </svg>}
                    />
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletDropdown;
