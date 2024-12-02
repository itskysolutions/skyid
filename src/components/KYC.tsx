import CustomInput from "../components/CustomInput"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const KYC = () => {
    const { control } = useForm();
    return(
        <div className="container" style={{maxWidth:"80%"}}>
            <div className="w-full">
                <div className="d-flex flex-column align-items-center justify-content-center w-full mb-5">
                    <div style={{ paddingBottom: '2%'}}><h4><b>KYC</b></h4> </div>
                    <div className="w-[700px]">
                        <div className="mb-4">
                            <CustomInput
                                name="phone"
                                label="Phone"
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