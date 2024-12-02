import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";

export const UpdateCurrentPassword = () => {
    const { control } = useForm();

    return(
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="container ">
                <div className="w-[full] flex justify-center">
                    <div className="w-[880px] mt-[10%]">
                        <div className="mb-5"><h3><b>Reset Password</b></h3></div>
                        <div>
                            <div className="mb-[15px]"> <CustomInput  type="password" name="current" label={"Current Password"}  control={control as never}    trailingIcon/></div>
                            <div className="mb-[15px]"> <CustomInput  type="password" name="create" label={"Create Password"}  control={control as never}  trailingIcon/></div>
                            <div className="mb-[50px]"> <CustomInput  type="password" name="confirm" label={"Confrim Password"}  control={control as never}  trailingIcon/></div>
                        </div>
                        <div className="mb-[15px]"><a href="/successPassword"> <button className="bg-[#D92027] text-white rounded-md p-2 w-[880px]">Confirm Reset</button></a></div>
                    </div>
                </div>


            </div>
        </div>
    )
}