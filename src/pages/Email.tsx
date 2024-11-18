import Select from "react-select";
import CustomInput from "../components/CustomInput";
import CustomTextArea from "../components/CustomTextArea";
import CustomButton from "../components/CustomButton";
import { useForm } from "react-hook-form";

const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Resettlement", value: "₦30,000" },
  ];

export const  Email = () => {
    const { control } = useForm();

    return (
      <div>
        <div style={{paddingTop:"2%"}}><p>Category of Complaint</p></div>
        <div className="w-[40%]">
            <Select
                isClearable={false}
                className=""
                id="category"
                options={options}
                styles={{
                option: (provided, state: { isFocused: unknown }) => ({
                    ...provided,
                    color: state.isFocused ? "white" : "black",
                    backgroundColor: state.isFocused ? "#C20308" : "white",
                }),

                singleValue: (provided) => ({
                    ...provided,
                    color: "black",
                }),
                // Add more styles as needed
                }} // Add this line
                onChange={(option) => {
                console.log(option, "optionss");
                // setCurrency(option?.value ?? "");
                // resetAmount();
                }}
            />
            <div style={{paddingTop:"5%"}}><CustomInput name="other" label={"Other"} asterisk control={control as never} /></div>
            <div style={{paddingTop:"5%"}}><CustomTextArea name="message" label={"Write a message regarding any complaint"} asterisk control={control as never} style="w-[826px] h-[207px]" placeholder="Enter your message here"type="text"/></div>
            <div style={{paddingTop:"5%"}}>
                <CustomButton
                    name="Submit"
                    backgroundColor="bg-[#00000099]"
                    textColor="text-white"
                    style="w-[825px]" 
                />
            </div>
        </div> 
      </div>
    )

}
