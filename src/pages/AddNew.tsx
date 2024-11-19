import { useState } from 'react';
import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import { FileUpload } from '../components/FileUpload';
import CustomButton from "../components/CustomButton";
import Card from "react-bootstrap/Card";

export const AddNew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [content, setContent] = useState("first");
  const { control } = useForm();
  
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (option: string) => {
      setSelected(option);
    };
  
  return (
    <div>
      <div className="">
        <div style={{display:"flex"}}>
          <button
            onClick={togglePopup}
              className="p-2 rounded-md bg-[#ffffff] group transition-all duration-500 hover:bg-[#db9fa1] flex item-center text-[#D92027] border-2 border-[#D92027]" >
            Add
          </button>
          <button className="p-2 ms-2 rounded-md bg-[#00000099] group transition-all duration-500 hover:bg-[#000000CC] flex item-center text-white">
            View more
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative overflow-y-auto max-h-[90vh]">
              <button onClick={togglePopup} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                ✕
              </button>
              <h2 className="text-xl font-semibold mb-4">Manage IVR / IVM <br/> (07003100015)</h2>

              <p>Select Add On: </p>

              <div className={`flex items-center mb-4 rounded-md ${ selected === 'option1' ? 'bg-[#E8F1FF]' : 'bg-white'} h-[56px] ps-3`}>
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
              <div className={`flex items-center mb-4 rounded-md ${ selected === 'option2' ? 'bg-[#E8F1FF]' : 'bg-white'} h-[56px] ps-3`}>
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
                   Interactive Voice Messaging (IVM)
                </label>
              </div>
              {content === "first" && (
               <div>
                 <div className="mt-4">
                  {selected === 'option1' && (
                  <div>
                      <div className="mt-6">
                        <CustomInput
                            name="name"
                            label="Name"
                            placeholder="Enter Name"
                            asterisk
                            control={control as never}
                        />
                      </div>
                      <div className='mt-4'><p>Upload</p></div>
                      <FileUpload acceptedTypes={['audio/mp3', 'audio/wav', 'application/pdf']} label="Upload Audio or Script" maxSizeMB={4} />
                      <div className="mt-4" style={{display:"flex"}}> 
                        <div className='me-2'>
                          <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                          </svg>
                        </div>
                        <p style={{color:"#00000080"}}>Ensure audio format is .mp3, .wav etc.</p>
                      </div>
                      <div className="" style={{display:"flex"}}> 
                        <div className='me-2'>
                          <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                          </svg>
                        </div>
                        <p style={{color:"#00000080"}}>Audio size max 4mb</p>
                      </div>
                      <div className="" style={{display:"flex"}}> 
                        <div className='me-2'>
                          <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                          </svg>
                        </div>
                        <p style={{color:"#00000080"}}>Ensure audio format is .docx, .pdf etc.</p>
                      </div>
                      <div className="" style={{display:"flex"}}> 
                        <div className='me-2'>
                          <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                          </svg>
                        </div>
                        <p style={{color:"#00000080"}}>File size max 1mb</p>
                      </div>
                    </div>
                  )}
                  {selected === 'option2' && (
                    <div>
                    <div className="mt-6">
                      <CustomInput
                          name="name"
                          label="Name"
                          placeholder="Enter Name"
                          asterisk
                          control={control as never}
                      />
                    </div>
                    <div className='mt-4'><p>Upload</p></div>
                    <FileUpload acceptedTypes={['audio/mp3', 'audio/wav', 'application/pdf']} label="Upload Audio or Script" maxSizeMB={4} />
                    <div className="mt-4" style={{display:"flex"}}> 
                      <div className='me-2'>
                        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                        </svg>
                      </div>
                      <p style={{color:"#00000080"}}>Ensure audio format is .mp3, .wav etc.</p>
                    </div>
                    <div className="" style={{display:"flex"}}> 
                      <div className='me-2'>
                        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                        </svg>
                      </div>
                      <p style={{color:"#00000080"}}>Audio size max 4mb</p>
                    </div>
                    <div className="" style={{display:"flex"}}> 
                      <div className='me-2'>
                        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                        </svg>
                      </div>
                      <p style={{color:"#00000080"}}>Ensure audio format is .docx, .pdf etc.</p>
                    </div>
                    <div className="" style={{display:"flex"}}> 
                      <div className='me-2'>
                        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#5A9CFF" className="my-path"></path>
                        </svg>
                      </div>
                      <p style={{color:"#00000080"}}>File size max 1mb</p>
                    </div>
                  </div>
                  )}
                </div>
                <div className='flex'>
                  <div className='ms-auto'>
                    <button onClick={() => setContent("second")} className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
                      Next
                    </button>
                  </div>
                </div>
               </div>
              )}
          </div>
          {content === "second" &&(
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
  )
}