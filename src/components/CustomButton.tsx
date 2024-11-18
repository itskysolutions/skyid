import { ReactNode } from "react";

interface CustomButton {
  name: string;
  style?: string;
  trailingIcon?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean | undefined;
  paddingVertical?: string;
  textColor?: string;
  backgroundColor?: string;
  border?: string;
}

const CustomButton = ({
  name,
  trailingIcon,
  style,
  onClick,
  disabled = false,
  paddingVertical,
  textColor,
  backgroundColor,
  border,
}: CustomButton) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="submit"
      className={`flex items-center justify-center gap-2 rounded-md ${
        disabled ? "bg-[#DCDCDC]" : `${backgroundColor || ""}`
      } text-base font-inter font-normal ${paddingVertical || "py-2"} ${textColor || "text-white"} ${style} ${border || "border-none"} `} 
    >
      {trailingIcon}
      {name}
    </button>
  );
};

export default CustomButton;
