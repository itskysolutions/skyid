import { useState } from 'react';
import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import { AudioUpload } from '../components/AudioUpload';
import { ScriptUpload } from '../components/ScriptUpload';
import CustomButton from "../components/CustomButton";
import Card from "react-bootstrap/Card";

export const UploadNew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option: string) => {
    setSelected(option);
  };

  const { control } = useForm();

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const [isSuccessPop, setIsSuccessPop] = useState(false);

  const SecondtogglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const SucessPopup = () => {
    setIsSuccessPop(!isSuccessPop);
  }

  return (
    <div className="">
      <div style={{display:"flex"}}>
            <button onClick={togglePopup} className="p-2 rounded-md bg-[#277CFA] group transition-all duration-500 hover:bg-[#293c58] flex item-center text-white">
                Edit
            </button>
            <button className="p-2  ms-2 rounded-md bg-[#00000099] group transition-all duration-500 hover:bg-[#000000CC] flex item-center text-white">
            View more
            </button>
        </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative overflow-y-auto max-h-[90vh]">
            <button onClick={togglePopup} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                ✕
              </button>
            <h2 className="text-xl font-semibold mb-4">Manage IVR / IVM <br/> (07003100015)</h2>

            <p>Select Add On: </p>

            <div>
                <div className={`flex items-center rounded-md ${ selected === 'option1' ? 'bg-[#E8F1FF]' : 'bg-white'} h-[56px] ps-3`}>
                <input
                    type="checkbox"
                    id="featureCheckbox1"
                    checked={selected === 'option1'}
                    onChange={() => handleCheckboxChange('option1')}
                    className={` w-4 h-4 rounded-md border-2 border-blue-300 ${
                        selected === 'option1' ? 'bg-blue-600' : 'bg-white'
                    }`}
                />
                <label htmlFor="featureCheckbox1" className="ml-2 text-gray-700">
                    Interactive Voice Response (IVR)
                </label>
                </div>
                <div className='mt-2'>
                    <button className="p-2 rounded-md bg-[#C0FFCCCC] group transition-all duration-500 item-center text-[#12A53E] w-[71px] ms-3" style={{borderRadius:"32px"}}>
                        active
                    </button>
                    <button className="p-2 rounded-md bg-[#5A9CFF] group transition-all duration-500 hover:bg-[#7b9dd1] item-center text-white w-[71px] ms-3">
                        Edit
                    </button>
                </div>
            </div>
           <div>
            <div className={`flex items-center rounded-md ${ selected === 'option2' ? 'bg-[#E8F1FF]' : 'bg-white'} h-[56px] ps-3`}>
                <input
                    type="checkbox"
                    id="featureCheckbox2"
                    checked={selected === 'option2'}
                    onChange={() => handleCheckboxChange('option2')}
                    className={` w-4 h-4 rounded-md border-2 border-blue-300 ${
                        selected === 'option2' ? 'bg-blue-600' : 'bg-white'
                    }`}
                />
                <label htmlFor="featureCheckbox2" className="ml-2 text-gray-700">
                    Integrated Voice Messaging (IVM)
                </label>
                </div>
                <div className='mt-2'>
                    <button className="p-2 rounded-md bg-[#C5C5C580] group transition-all duration-500 item-center text-[#00000066] w-[102px] ml-3" style={{borderRadius:"32px"}}>
                        Not active
                    </button>
                </div>
           </div>
            <div className="mt-4">
              {selected === 'option1' && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
                        <button onClick={togglePopup} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                            ✕
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Manage IVR / IVM <br/> (07003100015)</h2>
                        <div className="mt-6">
                            <CustomInput
                                name="name"
                                label="Name IVR"
                                placeholder="Enter Name"
                                asterisk
                                control={control as never}
                            />
                        </div>
                        <div className='mt-4'><p>Uploaded file:</p></div>
                        <div style={{display:"flex"}}>
                            <p>sample.docx</p>
                            <button
                                //onClick={handleDelete}
                                className="flex items-center bg-white text-[#D92027] py-1 px-3 rounded"
                                ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.2593 5.73052L5.23988 5.7305C5.16248 5.73036 5.03714 5.73013 4.92437 5.74551C4.7786 5.76538 4.53632 5.82414 4.33152 6.03672C4.12673 6.24931 4.07704 6.49361 4.06262 6.64002C4.05146 6.75329 4.05636 6.87853 4.05938 6.95587L4.06013 6.97527L4.3529 14.8206C4.40887 16.3209 4.45377 17.5242 4.61099 18.4679C4.77358 19.4437 5.07236 20.256 5.71928 20.8976C6.3693 21.5423 7.17748 21.8231 8.14073 21.9545C9.06613 22.0808 10.2384 22.0808 11.6911 22.0808H12.3076C13.7607 22.0808 14.9333 22.0808 15.8589 21.9545C16.8223 21.8231 17.6306 21.5423 18.2807 20.8976C18.9276 20.256 19.2264 19.4437 19.389 18.4679C19.5462 17.5242 19.5911 16.3208 19.6471 14.8205L19.9399 6.97285L19.9406 6.95586C19.9436 6.87852 19.9485 6.75328 19.9373 6.64002C19.9229 6.4936 19.8732 6.2493 19.6684 6.03672C19.4636 5.82414 19.2214 5.76538 19.0756 5.74551C18.9628 5.73013 18.8375 5.73036 18.7601 5.7305L18.7407 5.73052H5.2593ZM10.0002 11.9355C10.442 11.9355 10.8002 12.2937 10.8002 12.7355V15.7355C10.8002 16.1774 10.442 16.5355 10.0002 16.5355C9.55837 16.5355 9.2002 16.1774 9.2002 15.7355V12.7355C9.2002 12.2937 9.55837 11.9355 10.0002 11.9355ZM14.8002 12.7355C14.8002 12.2937 14.442 11.9355 14.0002 11.9355C13.5584 11.9355 13.2002 12.2937 13.2002 12.7355V15.7355C13.2002 16.1774 13.5584 16.5355 14.0002 16.5355C14.442 16.5355 14.8002 16.1774 14.8002 15.7355V12.7355Z" fill="currentColor" className="my-path"></path>
                                <path d="M9.03261 2.97612C9.1314 2.84952 9.26394 2.70906 9.43887 2.57258C9.90572 2.20832 10.6137 1.91895 11.6469 1.91895C12.68 1.91894 13.388 2.20832 13.8549 2.57258C14.0186 2.7003 14.1451 2.8315 14.2417 2.95156C15.1195 2.97712 15.9969 3.01768 16.8737 3.07326C17.7953 3.13168 18.716 3.21224 20.5277 3.37077L20.5405 3.37189C20.9806 3.4104 21.3062 3.79843 21.2677 4.23858C21.2292 4.67872 20.8411 5.00431 20.401 4.9658C18.5736 4.8059 17.6727 4.72712 16.7725 4.67005C13.5941 4.46858 10.4062 4.46858 7.2278 4.67005C6.32753 4.72712 5.42661 4.8059 3.59927 4.9658C3.15913 5.00431 2.7711 4.67872 2.73259 4.23858C2.69407 3.79843 3.01966 3.4104 3.45981 3.37189L3.47257 3.37077C5.28431 3.21224 6.20499 3.13168 7.12658 3.07326C7.7616 3.033 8.39699 3.00063 9.03261 2.97612Z" fill="currentColor" className="my-path"></path>
                                </svg>
                                Delete
                            </button>
                        </div>
                        <div className="mt-[40px]"><a href="/app/addOns" className='no-underline'><CustomButton name="Done" backgroundColor="bg-[#277CFA]" textColor="text-[#ffffff]" style="w-[100%]" /></a></div>
                    </div>
                </div>
              )}
              {selected === 'option2' && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
                        <button onClick={togglePopup} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                            ✕
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Manage IVR / IVM <br/> (07003100015)</h2>
                        <div className="mt-6">
                            <CustomInput
                                name="name"
                                label="Name IVR"
                                placeholder="Enter Name"
                                asterisk
                                control={control as never}
                            />
                        </div>
                        <div className='mt-4'><p>Uploaded file:</p></div>
                        <div className="mt-[40px]"><a href="/app/addOns" className='no-underline'><CustomButton name="Done" backgroundColor="bg-[#277CFA]" textColor="text-[#ffffff]" style="w-[100%]" /></a></div>
                    </div>
                </div>
              )}
            </div>
            
            {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
                        <button onClick={SecondtogglePopup} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                            ✕
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Manage IVR / IVM <br/> (07003100015)</h2>
                        <div className="mt-6">
                            <CustomInput
                                name="name"
                                label="Name IVR"
                                placeholder="Enter Name"
                                asterisk
                                control={control as never}
                            />
                        </div>
                        <div className='mt-4'><p>Uploaded file:</p></div>
                        <div className="mt-[40px]"><CustomButton name="Done" backgroundColor="bg-[#277CFA]" textColor="text-[#ffffff]" style="w-[100%]"  onClick={SucessPopup}/></div>
                    </div>
                    {isSuccessPop &&(
                    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative"> 
                            <Card className='bg-[#E6FFEB]' style={{borderColor:"#00000033"}}>
                                <Card.Body className=" bg-[#E6FFEB]" style={{borderRadius:""}}>
                                    <div className="flex justify-content-center mb-5"><svg width="149.5" height="149.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9299 13.4587C10.9299 13.4587 10.9327 13.4574 10.9373 13.4567C10.9321 13.4587 10.9299 13.4587 10.9299 13.4587Z" fill="#12A53E" className="my-path"></path>
                                        <path d="M10.9644 13.4587C10.9644 13.4587 10.9616 13.4574 10.957 13.4567C10.9601 13.4579 10.9633 13.4587 10.9633 13.4587L10.9644 13.4587Z" fill="#12A53E" className="my-path"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.2002 11.9997C2.2002 6.58732 6.5878 2.19971 12.0002 2.19971C17.4126 2.19971 21.8002 6.58732 21.8002 11.9997C21.8002 17.4121 17.4126 21.7997 12.0002 21.7997C6.5878 21.7997 2.2002 17.4121 2.2002 11.9997ZM17.2364 9.51246C17.5488 9.20004 17.5488 8.69351 17.2364 8.38109C16.9239 8.06867 16.4174 8.06867 16.105 8.38109L11.7957 12.6904C11.4464 13.0397 11.2401 13.2436 11.0743 13.3701C11.0078 13.4208 10.9677 13.4433 10.9472 13.4526C10.9266 13.4433 10.8865 13.4208 10.82 13.3701C10.6542 13.2436 10.4479 13.0397 10.0986 12.6904L8.56593 11.1577C8.25351 10.8453 7.74698 10.8453 7.43456 11.1577C7.12214 11.4701 7.12214 11.9767 7.43456 12.2891L9.00037 13.8549C9.30504 14.1597 9.58777 14.4425 9.84945 14.6421C10.1391 14.8631 10.4948 15.0561 10.9472 15.0561C11.3995 15.0561 11.7552 14.8631 12.0449 14.6421C12.3065 14.4424 12.5892 14.1597 12.8939 13.8549L17.2364 9.51246Z" fill="#12A53E" className="my-path"></path>
                                    </svg></div>
                                    <p className="flex justify-content-center"><h5>Your IVR upload was successful</h5></p>
                                </Card.Body>
                            </Card>
                            <div className="mt-[40px]"><a href="/app/addOns" className='no-underline'><CustomButton name="Back to Add Ons" backgroundColor="bg-[#277CFA]" textColor="text-[#ffffff]" style="w-[100%]" /></a></div>
                        </div>
                    </div>
                    )}
                </div>
            )}
            </div>
        </div>
      )}
    </div>
  );
};
