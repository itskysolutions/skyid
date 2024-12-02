import CustomInput from "../../components/CustomInput"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Select from "react-select";
import countryOptions from "../../utils/countries";

export const KYCForBusiness = () => {
    const { control } = useForm();
    return (
        <div className="container" style={{maxWidth:"80%"}}>
            <div className="w-full">
                <div className="d-flex flex-column align-items-center justify-content-center w-full mb-5">
                    <div style={{ paddingBottom: '2%'}}><h4><b>KYC For Business</b></h4> </div>
                        <div className="mb-8 flex flex-wrap justify-center gap-4">
                            <div className="w-full md:w-[335px]">
                                <CustomInput
                                name="firstName"
                                label="First Name"
                                style="w-full"
                                asterisk
                                control={control as never}
                                />
                            </div>
                            <div className="w-full md:w-[340px]">
                                <CustomInput
                                name="lastName"
                                label="Last Name"
                                style="w-full"
                                asterisk
                                control={control as never}
                                />
                            </div>
                        </div>
                    <div className="w-[700px]">
                        <div className="mb-4">
                            <CustomInput
                                name="businessName"
                                label="Business Name"
                                style=""
                                asterisk
                                control={control as never}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="businessType" className=" text-sm font-medium mb-2 mr-0 flex justify-start">
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
                        <div className="mb-4">
                            <CustomInput
                                name="agentCode"
                                label="Agent Code"
                                style=""
                                asterisk
                                control={control as never}
                            />
                        </div>
                        <div className="mb-4">
                            <CustomInput
                                name="email"
                                label="Email"
                                style=""
                                asterisk
                                control={control as never}
                            />
                        </div>
                        <div className="mb-4">
                            <CustomInput
                                name="phone"
                                label="Phone Number"
                                style=""
                                asterisk
                                control={control as never}
                            />
                        </div>
                        <div className="mb-4">
                            <CustomInput
                                name="address"
                                label="Address"
                                style=""
                                asterisk
                                control={control as never}
                            />
                        </div>
                        <div className="mb-4">
                            <CustomInput
                                name="state"
                                label="State"
                                style=""
                                asterisk
                                control={control as never}
                            />
                        </div>
                        <div className="mb-4">
                            <CustomInput
                                name="nin"
                                label="NIN"
                                style=""
                                asterisk
                                control={control as never}
                            />
                        </div>
                        <div className="mt-5 mb-5">
                            <Link to="/app/buyNumber/completed" className="no-underline"><button
                            className="bg-[#515151] text-white rounded-md py-2 w-full"
                            >
                            Submit
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}