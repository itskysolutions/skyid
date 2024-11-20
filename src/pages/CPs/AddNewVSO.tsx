import CustomInput from "../../components/CustomInput"
import {Row, Col} from "react-bootstrap"
import { useForm } from "react-hook-form";

export const AddNewVSO = () => {
    const { control } = useForm();

    const handleClick = () => {
        window.location.href = "/success";
      };

    return(
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="container " style={{ textAlign: "center" }}>
                <div style={{}}>
                    <h3><b>Add New VSO</b></h3>
                </div>
                <div className="mt-[30px]">
                    <Row className="justify-content-center"  style={{ gap: "10px" }}>
                        <Col md="auto" >
                            <div className="mb-[20px]" style={{display:"flex"}}>
                                <CustomInput name="firstName" label={"First Name"} style="w-[421px]" asterisk control={control as never} />
                            </div>
                        </Col>
                        <Col md="auto">
                            <div className="mb-[20px]" style={{display:"flex"}}>
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
                        <div className="mb-[15px]"> <CustomInput name="email" label={"Email"} asterisk  control={control as never} /></div>
                        <div className="mb-[15px]"> <CustomInput name="Phone" label={"Phone"} asterisk  control={control as never} /></div>
                        <div className="mb-[15px]"> <CustomInput name="address" label={"Address"} asterisk  control={control as never} /></div>
                        <div className="mb-[15px]"> <CustomInput name="state" label={"State"} asterisk  control={control as never} /></div>
                        <div className="mb-[20px]"> <CustomInput name="NIN" label={"NIN"} asterisk  control={control as never} /></div>
                        <div className="mb-[15px]"> <button onClick={handleClick} className="bg-[#515151] text-white rounded-md p-2 w-[880px]">Submit</button></div>
                    </div>
                </div>


            </div>
        </div>
    )
}