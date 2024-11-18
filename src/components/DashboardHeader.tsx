import IMAGES from "../constant/Images";
import CustomDropdownButton from "../components/CustomDropdownButton";
import WalletDropdown from "./WalletDropdown";

const Profileoptions =[
    {
        title:"View Profile",
        link:"/app/ViewProfile"
    },
    {
        title:"Settings",
        link:"/app/Settings"
    },
    {
        title:"Support",
        link:"/app/Support"
    },
    {
        title:"LogOut",
        link:"/app/LogOut"
    },
]

export const DashboardHeader = () => {

    return (
      <header className="bg-[#ffffff] grid grid-cols-12 shadow-md">
            <div className="flex flex-row justify-center items-center col-span-2">
                <img src={IMAGES.LOGO} alt="logo" style={{ width: "173.05px", height: "50px" }} />
            </div>
            <div className="bg-[#ffffff] col-span-10 flex justify-end items-center p-3 px-4">
                <>
                    <div className="px-3">
                        <WalletDropdown/>
                        {/* <CustomDropdownButton
                            name=" ₦250,000.00"
                            options={Walletoptions}
                            textColor="text-gray-500"
                            backgroundColor="bg-[#FFF4F4]"
                            paddingVertical="py-3"
                        />  */}
                    </div>
                    <div className="flex items-center gap-3 px-3">
                        <div>
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
                </>
            </div>
        </header>
    );
};
  