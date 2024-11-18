import { useState } from 'react';

interface Option {
  title: string;
  link: string;
}

interface CustomDropdownButtonProps {
  name: string;
  style?: string;
  disabled?: boolean;
  paddingVertical?: string;
  textColor?: string;
  backgroundColor?: string;
  border?: string;
  options: Option[]; 
}

const CustomDropdownButton = ({
  name,
  style,
  disabled = false,
  paddingVertical,
  textColor,
  backgroundColor,
  border,
  options, 
}: CustomDropdownButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={toggleDropdown}
        // disabled={disabled} // Disable the button if `disabled` is true
        className={`inline-flex items-center justify-center gap-2 w-full rounded-md ${border || "border-none"} border-gray-300 px-4 py-2 ${backgroundColor || "bg-white"} text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none ${
          disabled ? "bg-[#FFF4F4]" : backgroundColor || ""
        } text-base font-inter font-normal ${paddingVertical || "py-2"} ${textColor || ""} ${style}`}
        style={{}}
      >
        {name}
        <svg
          className="ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          {/* Toggle SVG icon based on isOpen state */}
          {isOpen ? (
            <path
                fillRule="evenodd"
                d="M5.23 12.79a.75.75 0 011.06-.02L10 9.06l3.71 3.71a.75.75 0 111.06-1.06l-4-4a.75.75 0 01-1.06 0l-4 4a.75.75 0 01-.02 1.06z"
                clipRule="evenodd"
            />
          ) : (
            <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
            />
          )}
        </svg>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <a
                key={index}
                href={option.link}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline"
                role="menuitem"
              >
                {option.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdownButton;
