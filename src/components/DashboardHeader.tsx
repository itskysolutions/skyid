import { useState } from "react";
import IMAGES from "../constant/Images";
import CustomDropdownButton from "../components/CustomDropdownButton";
import WalletDropdown from "./WalletDropdown";

const Profileoptions = [
  {
    title: "View Profile",
    link: "/app/ViewProfile",
  },
  {
    title: "Settings",
    link: "/app/Settings",
  },
  {
    title: "Support",
    link: "/app/Support",
  },
  {
    title: "LogOut",
    link: "/app/LogOut",
  },
];

export const DashboardHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 ">
      <div className="grid grid-cols-12 items-center p-3 px-4">
        <div className="col-span-2 flex justify-center items-center">
          <img
            src={IMAGES.LOGO}
            alt="logo"
            style={{ width: "173.05px", height: "50px" }}
          />
        </div>
        <div className="col-span-10 flex justify-end items-center relative">
          <button
            className="block lg:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="block w-6 h-1 bg-[#00000099] mb-1"></span>
            <span className="block w-6 h-1 bg-[#00000099] mb-1"></span>
            <span className="block w-6 h-1 bg-[#00000099]"></span>
          </button>
          <div className="hidden lg:flex items-center gap-3 relative">
            <div className="relative z-50">
              <WalletDropdown />
            </div>
            <div className="relative z-40">
              <CustomDropdownButton
                name="John"
                options={Profileoptions}
                textColor="text-gray-500"
                backgroundColor=""
                paddingVertical="py-3"
                border="border-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Collapsible Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-100 flex flex-col gap-2 p-4">
          <div className="w-full flex flex-col items-end gap-3">
            <div className="relative z-50">
                <WalletDropdown />
            </div>
            <div className="relative z-40">
                <CustomDropdownButton
                name="John"
                options={Profileoptions}
                textColor="text-gray-500"
                backgroundColor=""
                paddingVertical="py-3"
                border="border-none"
                />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
