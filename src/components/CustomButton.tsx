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

const CustomButton = ({ name, trailingIcon, style, onClick, paddingVertical, textColor, border }: CustomButton) => {
  return (
    <div
      onClick={onClick as never}
      className={`flex items-center justify-center gap-2 rounded-md "bg-[#c61e1e] text-base font-inter font-normal ${
        paddingVertical || "py-2"
      } ${textColor || "text-white"} ${style} ${border || "border-none"} `}
    >
      {trailingIcon}
      {name}
    </div>
  );
};

export default CustomButton;
