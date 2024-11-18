import CustomInput from "../components/CustomInput";
import CustomButton from '../components/CustomButton';
import { useForm } from "react-hook-form";

export const  Deposit = () =>  {
    const { control } = useForm();
    return (
      <div>
        <div style={{paddingTop:"5%", color:"#00000099"}}><h2>Deposit Funds</h2></div>
        <div className="mt-[40px] w-[40%]"><CustomInput name="amount" label={"Amount"} placeholder="Enter amount" asterisk control={control as never} /></div>
        <div className="mt-[40px]"><CustomButton name="Confirm" backgroundColor="bg-[#666666]" textColor="text-[#ffffff]" style="w-[449px]" /></div>
      </div>
    )

}
