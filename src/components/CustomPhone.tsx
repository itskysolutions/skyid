//
import Select, { GroupBase, OptionsOrGroups } from "react-select";
import { Control, Controller, FieldValues, RegisterOptions } from "react-hook-form";

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
  options?: OptionsOrGroups<unknown, GroupBase<unknown>>;
}

const CustomPhone = ({
  control,
  name,
  label,
  plainText = false,
  asterisk = false,
  plainStyle,
  style,
  mainContainer,
  options,
}: CustomInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange }, fieldState: { error } }) => (
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
            <Select
              name={name}
              // value={value}
              isClearable={false}
              className=""
              id="currency"
              options={options}
              styles={{
                option: (provided, state: { isFocused: unknown }) => ({
                  ...provided,
                  width: "100%",
                  color: state.isFocused ? "white" : "black",
                  backgroundColor: state.isFocused ? "#C20308" : "white",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "black",
                }),
                container: (contain) => ({
                  ...contain,
                  flex: 1,
                }),
                input: (inputContainer) => ({
                  ...inputContainer,
                  paddingTop: 4,
                  paddingBottom: 4,
                }),
              }} // Add this line
              onChange={(option) => onChange(option?.value)}
            />
          </div>
          {error && <p className="text-left mt-1 text-[red] text-sm font-inter font-normal">{error.message}</p>}
        </div>
      )}
    />
  );
};

export default CustomPhone;
