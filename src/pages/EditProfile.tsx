import CustomInput from "../components/CustomInput";
import { Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Select from "react-select";
import countryOptions from "../utils/countries";
import { useState } from "react";

export const EditProfile = () => {
  const { control } = useForm();
  const [showAlert, setShowAlert] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);


  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 10000);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
  
    if (file) {
      const maxSize = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSize) {
        setErrorMessage("File size exceeds 2MB. Please upload a smaller file.");
        return;
      }
  
      setErrorMessage(null); // Clear any previous error
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };
  

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="container">
        <div className="ms-[11%] mt-5">
            {showAlert && (
                 <div className=" bg-[#E6FFEB] text-[#12A53E] w-[880px] p-3 rounded-md mb-4 text-center mt-4" style={{display:"flex"}}> 
                 <div className="me-2">
                   <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z" fill="#12A53E" className="my-path"></path>
                   </svg>
                 </div>
                 <p style={{color:"#00000080"}}> Your profile has been updated successfully</p>
               </div>
            )}  
          <h3><b>Edit Profile</b></h3>
        </div>
        <div className="mb-[30px] ms-[11%]">
            <div className="flex flex-col">
                {/* Profile Image Circle */}
                <div
                className="rounded-full border-2 border-gray-300 flex items-center justify-center mb-4"
                style={{
                    width: "120px",
                    height: "120px",
                    backgroundImage: uploadedImage ? `url(${uploadedImage})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: uploadedImage ? "transparent" : "#f9fafb",
                }}
                >
                {!uploadedImage && (
                    <span className="text-gray-400">No Image</span>
                )}
                </div>
                <div className="flex items-center gap-4">
                    <label
                        htmlFor="upload-button"
                        className="bg-[#277CFA] text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 transition-colors flex items-center gap-2 w-[180px] h-[55px] justify-center"
                    >
                        <svg
                        width="20"
                        height="20"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M20.3096 5.75H17.7108L16.433 3.83375C16.3645 3.73114 16.2718 3.647 16.1631 3.58879C16.0543 3.53057 15.9329 3.50007 15.8096 3.5H9.80957C9.68622 3.50007 9.5648 3.53057 9.45605 3.58879C9.3473 3.647 9.25459 3.73114 9.18613 3.83375L7.90738 5.75H5.30957C4.71283 5.75 4.14054 5.98705 3.71858 6.40901C3.29662 6.83097 3.05957 7.40326 3.05957 8V18.5C3.05957 19.0967 3.29662 19.669 3.71858 20.091C4.14054 20.5129 4.71283 20.75 5.30957 20.75H20.3096C20.9063 20.75 21.4786 20.5129 21.9006 20.091C22.3225 19.669 22.5596 19.0967 22.5596 18.5V8C22.5596 7.40326 22.3225 6.83097 21.9006 6.40901C21.4786 5.98705 20.9063 5.75 20.3096 5.75ZM16.1846 12.875C16.1846 13.5425 15.9866 14.195 15.6158 14.75C15.2449 15.3051 14.7178 15.7376 14.1011 15.9931C13.4844 16.2485 12.8058 16.3154 12.1511 16.1852C11.4965 16.0549 10.8951 15.7335 10.4231 15.2615C9.95108 14.7895 9.62965 14.1881 9.49942 13.5334C9.36919 12.8787 9.43603 12.2001 9.69148 11.5834C9.94692 10.9667 10.3795 10.4396 10.9345 10.0688C11.4895 9.69794 12.1421 9.5 12.8096 9.5C13.7047 9.5 14.5631 9.85558 15.1961 10.4885C15.829 11.1214 16.1846 11.9799 16.1846 12.875Z"
                            fill="white"
                        />
                        </svg>
                        <span>Upload Photo</span>
                    </label>
                    <div className="flex items-center gap-2">
                        <div>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.0002 2.2002C6.5878 2.2002 2.2002 6.5878 2.2002 12.0002C2.2002 17.4126 6.5878 21.8002 12.0002 21.8002C17.4126 21.8002 21.8002 17.4126 21.8002 12.0002C21.8002 6.5878 17.4126 2.2002 12.0002 2.2002ZM12.0502 16.8239C11.6083 16.8239 11.2502 16.4658 11.2502 16.0239V10.0239C11.2502 9.5821 11.6083 9.22393 12.0502 9.22393C12.492 9.22393 12.8502 9.5821 12.8502 10.0239V16.0239C12.8502 16.4658 12.492 16.8239 12.0502 16.8239ZM12.0001 6.00012C11.4478 6.00012 11.0001 6.44784 11.0001 7.00012C11.0001 7.55241 11.4478 8.00012 12.0001 8.00012H12.0501C12.6024 8.00012 13.0501 7.55241 13.0501 7.00012C13.0501 6.44784 12.6024 6.00012 12.0501 6.00012H12.0001Z"
                            fill="#277CFA"
                            className="my-path"
                            ></path>
                        </svg>
                        </div>
                        <p className="text-gray-500 mt-3">File size max 2mb</p>
                    </div>
                    </div>

                <input
                id="upload-button"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                />
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
            </div>
        </div>
        <div className="mt-[30px]">
          <Row className="justify-content-center" style={{ gap: "10px" }}>
            <Col md="auto">
              <div className="mb-[20px]" style={{ display: "flex" }}>
                <CustomInput name="firstName" label={"First Name"} style="w-[421px]" asterisk control={control as never} />
              </div>
            </Col>
            <Col md="auto">
              <div className="mb-[20px]" style={{ display: "flex" }}>
                <CustomInput
                  name="lastName"
                  label={"Last Name"}
                  style="w-[421px]"
                  asterisk
                  control={control as never}
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className="w-[full] flex justify-center">
          <div className="w-[880px]">
            <div className="mb-4">
              <label htmlFor="country-select" className="block text-sm font-medium mb-2">
                Country
              </label>
              <Select
                id="country-select"
                isClearable={false}
                className="w-full"
                options={countryOptions}
                styles={{
                  option: (provided, state) => ({
                    ...provided,
                    color: state.isFocused ? "white" : "black",
                    backgroundColor: state.isFocused ? "#C20308" : "white",
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    color: "black",
                  }),
                  control: (provided) => ({
                    ...provided,
                    height: "50px",
                    borderColor: "#d1d5db", // Tailwind's gray-300
                    '&:hover': {
                      borderColor: "#9ca3af", // Tailwind's gray-400
                    },
                    boxShadow: "none",
                  }),
                }}
                onChange={(option) => {
                  console.log(option, "Selected Option");
                }}
              />
            </div>
            <div className="mb-[15px]"> <CustomInput name="businessName" label={"Business Name"} asterisk control={control as never} /></div>
            <div className="mb-4">
              <label htmlFor="businessType" className="block text-sm font-medium mb-2">
                Business Type
              </label>
              <Select
                id="businessType"
                isClearable={false}
                className="w-full"
                options={countryOptions}
                styles={{
                  option: (provided, state) => ({
                    ...provided,
                    color: state.isFocused ? "white" : "black",
                    backgroundColor: state.isFocused ? "#C20308" : "white",
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    color: "black",
                  }),
                  control: (provided) => ({
                    ...provided,
                    height: "50px",
                    borderColor: "#d1d5db", // Tailwind's gray-300
                    '&:hover': {
                      borderColor: "#9ca3af", // Tailwind's gray-400
                    },
                    boxShadow: "none",
                  }),
                }}
                onChange={(option) => {
                  console.log(option, "Selected Option");
                }}
              />
            </div>
            <div className="mb-[15px]"> <CustomInput name="email" label={"Email"} asterisk control={control as never}  plainText /></div>
            <div className="mb-[15px]"> <CustomInput name="Phone" label={"Phone"} asterisk control={control as never} plainText/></div>
            <div className="mb-[50px]"> <CustomInput name="address" label={"Address"} asterisk control={control as never} /></div>
            <div className="mb-[15px]">
              <button
                onClick={handleClick}
                className="bg-[#12A53E] text-white rounded-md p-2 w-[880px]"
              >
                Save Edits
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
