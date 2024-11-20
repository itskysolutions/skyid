import { Control, Controller, FieldValues, RegisterOptions } from "react-hook-form";
import OTPInput from "react-otp-input";

interface CustomInputProps {
  style?: string;
  control: Control<FieldValues, unknown>;
  rules?: Omit<RegisterOptions<FieldValues, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">;
  name: string;
  placeholder?: string;
  label?: string;
  plainText?: boolean;
  asterisk?: boolean;
  mainContainer?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OtpInput = ({ control, name, label, placeholder, style, mainContainer }: CustomInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className={`flex flex-col ${mainContainer}`}>
          <div className="flex flex-row gap-1">
            <label className="text-left mb-[8px] font-inter font-normal text-sm">{label}</label>
          </div>
          <div className={`flex flex-row items-center outline-none focus:bg-[#eaeaea] ${style}`}>
            <OTPInput
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              numInputs={6}
              inputStyle={{
                background: "white",
                height: 60,
                width: 60,
                borderColor: error ? "red" : "black",
                borderWidth: 1,
                marginRight: 30,
                borderRadius: 10,
              }}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          {error && <p className="text-left mt-3 text-[red] text-sm font-inter font-normal">{error.message}</p>}
        </div>
      )}
    />
  );
};

export default OtpInput;
