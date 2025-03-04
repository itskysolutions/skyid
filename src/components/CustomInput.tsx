//

import { useState } from "react";
import { Control, Controller, FieldValues, RegisterOptions } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface CustomInputProps {
  style?: string;
  control: Control<FieldValues, unknown>;
  rules?: Omit<RegisterOptions<FieldValues, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">;
  name: string;
  placeholder?: string;
  label?: string;
  plainText?: boolean;
  asterisk?: boolean;
  valueInput?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  plainStyle?: string;
  trailingIcon?: boolean;
  bgInput?: string;
  mainContainer?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  plainText = false,
  asterisk = false,
  valueInput,
  type = "text",
  plainStyle,
  trailingIcon,
  bgInput,
  style,
  mainContainer,
}: CustomInputProps) => {
  const [show, setShow] = useState(false);
  const inputType = type === "password" && !show ? "password" : type || "text";

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
        <div className={`flex flex-col ${mainContainer}`}>
          <div className="flex flex-row gap-1">
            <label className="text-left mb-[8px] font-inter font-normal text-sm">{label}</label>
            {asterisk && <label className="text-left font-inter font-normal text-sm text-[#DD1D1D]">*</label>}
          </div>
          <div
            className={
              plainText
                ? `${
                    plainStyle || "bg-[#eaeaea] border border-[#eaeaea] rounded-md font-extrabold flex-1"
                  } p-[10px] font-inter text-base`
                : `flex flex-row items-center p-2 border border-gray-300 rounded-lg outline-none focus:bg-[#eaeaea] ${style}`
            }
          >
            <input
              type={inputType}
              disabled={plainText}
              placeholder={placeholder}
              className={`${bgInput || "bg-white"} rounded-md outline-none flex-1`}
              value={valueInput || value}
              onBlur={onBlur}
              onChange={(e) => {
                onChange(e);
              }}
            />
            {trailingIcon &&
              (show ? (
                <FiEye onClick={() => setShow(!show)} className="cursor-pointer ml-2" />
              ) : (
                <FiEyeOff onClick={() => setShow(!show)} className="cursor-pointer ml-2" />
              ))}
          </div>
          {error && <p className="text-left mt-1 text-[red] text-sm font-inter font-normal">{error.message}</p>}
        </div>
      )}
    />
  );
};

export default CustomInput;
