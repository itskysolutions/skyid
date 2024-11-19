import { useState } from "react";
import { useForm } from "react-hook-form";
import { FileUpload } from '../components/FileUpload'
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export const UploadNew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("option1");
  const [fileName, setFileName] = useState<string | null>("sample.docx");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showUpdateFilename, setShowUpdateFilename] = useState(false);
  const { control } = useForm();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option: string) => {
    setSelected(option === selected ? "" : option);
  };

  const handleDeleteFile = () => {
    setFileName(null);
    setShowDeleteModal(false);
    setShowUpdateModal(false);
  };

//   const updatedFilename = () => {
//     setShowUpdateFilename(!showUpdateFilename);
//   }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <button
          onClick={togglePopup}
          className="p-2 rounded-md bg-[#277CFA] group transition-all duration-500 hover:bg-[#293c58] flex items-center text-white"
        >
          Edit
        </button>
        <button className="p-2 ms-2 rounded-md bg-[#00000099] group transition-all duration-500 hover:bg-[#000000CC] flex items-center text-white">
          View more
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">
              Manage IVR / IVM <br /> (07003100015)
            </h2>

            {/* Options */}
            <div>
              {["option1", "option2"].map((option, index) => (
                <div key={option} className={`flex items-center rounded-md ${selected === option ? "bg-[#E8F1FF]" : "bg-white"} h-[56px] ps-3`}>
                  <input
                    type="checkbox"
                    id={`featureCheckbox${index + 1}`}
                    checked={selected === option}
                    onChange={() => handleCheckboxChange(option)}
                    className={`w-4 h-4 rounded-md border-2 border-blue-300 ${selected === option ? "bg-blue-600" : "bg-white"}`}
                  />
                  <label htmlFor={`featureCheckbox${index + 1}`} className="ml-2 text-gray-700">
                    {option === "option1" ? "Interactive Voice Response (IVR)" : "Integrated Voice Messaging (IVM)"}
                  </label>
                </div>
              ))}

              <div className="mt-2">
                {selected === "option1" ? (
                  <div className="flex gap-3">
                    <button className="p-2 rounded-sm bg-[#C0FFCCCC] text-[#12A53E]" style={{ borderRadius: "10px" }}>
                      Active
                    </button>
                    <button onClick={() => setShowEditModal(true)} className="p-2 rounded-md bg-[#5A9CFF] hover:bg-[#7b9dd1] text-white w-[20%]">
                      Edit
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <button className="p-2 rounded-md bg-[#C5C5C580] text-[#00000066]" style={{ borderRadius: "10px" }}>
                      Not active
                    </button>
                    <button
                        //onClick={togglePopup}
                        className="p-2 rounded-md bg-[#D92027] group transition-all duration-500 hover:bg-[#db9fa1] flex item-center text-white"
                        >
                        Buy IVM
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <button onClick={() => setShowEditModal(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">
              Manage IVR / IVM <br /> (07003100015)
            </h2>
            {/* Display Selected Option as a Checkbox */}
            <div className="mt-4">
                <div
                className={`flex items-center rounded-md ${
                    selected === "option1" ? "bg-[#E8F1FF]" : "bg-[#E8F1FF]"
                } h-[56px] ps-3`}
                >
                <input
                    type="checkbox"
                    id="selectedOptionCheckbox"
                    checked={true}
                    readOnly
                    className="w-4 h-4 rounded-md border-2 border-blue-300 bg-blue-600"
                />
                <label htmlFor="selectedOptionCheckbox" className="ml-2 text-gray-700">
                    {selected === "option1"
                    ? "Interactive Voice Response (IVR)"
                    : "Integrated Voice Messaging (IVM)"}
                </label>
                </div>
            </div>
            {fileName && (
              <div >
                <p className="mt-4"><b>Uploaded File:</b></p>
                <div className="mt-2 flex items-center justify-between">
                    <p>{fileName}</p>
                    <button
                    onClick={() => setShowDeleteModal(true)}
                    className="text-[#D92027] flex items-center"
                    > <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.2593 5.73052L5.23988 5.7305C5.16248 5.73036 5.03714 5.73013 4.92437 5.74551C4.7786 5.76538 4.53632 5.82414 4.33152 6.03672C4.12673 6.24931 4.07704 6.49361 4.06262 6.64002C4.05146 6.75329 4.05636 6.87853 4.05938 6.95587L4.06013 6.97527L4.3529 14.8206C4.40887 16.3209 4.45377 17.5242 4.61099 18.4679C4.77358 19.4437 5.07236 20.256 5.71928 20.8976C6.3693 21.5423 7.17748 21.8231 8.14073 21.9545C9.06613 22.0808 10.2384 22.0808 11.6911 22.0808H12.3076C13.7607 22.0808 14.9333 22.0808 15.8589 21.9545C16.8223 21.8231 17.6306 21.5423 18.2807 20.8976C18.9276 20.256 19.2264 19.4437 19.389 18.4679C19.5462 17.5242 19.5911 16.3208 19.6471 14.8205L19.9399 6.97285L19.9406 6.95586C19.9436 6.87852 19.9485 6.75328 19.9373 6.64002C19.9229 6.4936 19.8732 6.2493 19.6684 6.03672C19.4636 5.82414 19.2214 5.76538 19.0756 5.74551C18.9628 5.73013 18.8375 5.73036 18.7601 5.7305L18.7407 5.73052H5.2593ZM10.0002 11.9355C10.442 11.9355 10.8002 12.2937 10.8002 12.7355V15.7355C10.8002 16.1774 10.442 16.5355 10.0002 16.5355C9.55837 16.5355 9.2002 16.1774 9.2002 15.7355V12.7355C9.2002 12.2937 9.55837 11.9355 10.0002 11.9355ZM14.8002 12.7355C14.8002 12.2937 14.442 11.9355 14.0002 11.9355C13.5584 11.9355 13.2002 12.2937 13.2002 12.7355V15.7355C13.2002 16.1774 13.5584 16.5355 14.0002 16.5355C14.442 16.5355 14.8002 16.1774 14.8002 15.7355V12.7355Z"
                        fill="currentColor"
                    ></path>
                    <path
                        d="M9.03261 2.97612C9.1314 2.84952 9.26394 2.70906 9.43887 2.57258C9.90572 2.20832 10.6137 1.91895 11.6469 1.91895C12.68 1.91894 13.388 2.20832 13.8549 2.57258C14.0186 2.7003 14.1451 2.8315 14.2417 2.95156C15.1195 2.97712 15.9969 3.01768 16.8737 3.07326C17.7953 3.13168 18.716 3.21224 20.5277 3.37077L20.5405 3.37189C20.9806 3.4104 21.3062 3.79843 21.2677 4.23858C21.2292 4.67872 20.8411 5.00431 20.401 4.9658C18.5736 4.8059 17.6727 4.72712 16.7725 4.67005C13.5941 4.46858 10.4062 4.46858 7.2278 4.67005C6.32753 4.72712 5.42661 4.8059 3.59927 4.9658C3.15913 5.00431 2.7711 4.67872 2.73259 4.23858C2.69407 3.79843 3.01966 3.4104 3.45981 3.37189L3.47257 3.37077C5.28431 3.21224 6.20499 3.13168 7.12658 3.07326C7.7616 3.033 8.39699 3.00063 9.03261 2.97612Z"
                        fill="currentColor"
                    ></path>
                    </svg>
                    Delete
                    </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
                    <h3>Are you sure you want to delete this file?</h3>
                    <div className="mt-4 flex justify-center gap-3">
                    <button onClick={() => { handleDeleteFile(); setShowUpdateModal(true); }} className="bg-[#D92027] text-white px-4 py-2 rounded">
                        Yes
                    </button>
                    <button onClick={() => setShowDeleteModal(false)} className="bg-gray-300 px-4 py-2 rounded">
                        No
                    </button>
                    </div>
                </div>
            </div>
        )}
        {/* Updated IVR / IVM Modal */}
        {showUpdateModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
                <button onClick={() => setShowUpdateModal(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                ✕
                </button>
                <h2 className="text-xl font-semibold mb-4">
                Manage IVR / IVM <br /> (07003100015)
                </h2>
                {/* Display Selected Option as a Checkbox */}
                <div className="mt-4">
                    <div
                        className={`flex items-center rounded-md ${
                            selected === "option1" ? "bg-[#E8F1FF]" : "bg-[#E8F1FF]"
                        } h-[56px] ps-3`}
                        >
                        <input
                            type="checkbox"
                            id="selectedOptionCheckbox"
                            checked={true}
                            readOnly
                            className="w-4 h-4 rounded-md border-2 border-blue-300 bg-blue-600"
                        />
                        <label htmlFor="selectedOptionCheckbox" className="ml-2 text-gray-700">
                            {selected === "option1"
                            ? "Interactive Voice Response (IVR)"
                            : "Integrated Voice Messaging (IVM)"}
                        </label>
                    </div>
                </div>
                {/* Display content*/}
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
                <div className="mt-[40px]"><CustomButton onClick={() => setShowUpdateFilename(true)} name="Done" backgroundColor="bg-[#277CFA]" textColor="text-[#ffffff]" style="w-[100%]" /></div>
               </div>
            </div>
        )}
        {showUpdateFilename && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
                <button
                    onClick={() => setShowUpdateFilename(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>
                <h2 className="text-xl font-semibold mb-4">
                Manage IVR / IVM <br /> (07003100015)
                </h2>
                {/* Display Selected Option as a Checkbox */}
                <div className="mt-4">
                    <div
                        className={`flex items-center rounded-md ${
                            selected === "option1" ? "bg-[#E8F1FF]" : "bg-[#E8F1FF]"
                        } h-[56px] ps-3`}
                        >
                        <input
                            type="checkbox"
                            id="selectedOptionCheckbox"
                            checked={true}
                            readOnly
                            className="w-4 h-4 rounded-md border-2 border-blue-300 bg-blue-600"
                        />
                        <label htmlFor="selectedOptionCheckbox" className="ml-2 text-gray-700">
                            {selected === "option1"
                            ? "Interactive Voice Response (IVR)"
                            : "Integrated Voice Messaging (IVM)"}
                        </label>
                    </div>
                </div>
                <h2 className="text-xl font-semibold mb-4 mt-3">File Details</h2>
                <div className="mt-2">
                    <p>
                    <b>Updated File:</b> {fileName || "No file uploaded"}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={handleDeleteFile}
                        className="bg-[#D92027] text-white px-4 py-2 rounded"
                    >
                        Delete
                    </button>
                    <a href="/app/addOns"><button
                        onClick={() => setShowUpdateModal(false)}
                        className="bg-[#5A9CFF] text-white px-4 py-2 rounded"
                    >
                        Done
                    </button></a>
                    </div>
                </div>
                </div>
            </div>
            )}

    </div>
  );
};
