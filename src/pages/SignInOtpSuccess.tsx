import React from "react";
import { useNavigate } from "react-router-dom";
import IMAGES from "../constant/Images";

const SigninOtpSuccess: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#fff]">
      <div className="flex flex-row justify-between items-center mt-10" />

      <form className="flex flex-col items-center mt-20">
        <div className="w-[30%]">
          <div className="mb-[40px]">
            <img src={IMAGES.OTP_SUCCESS_LOGO} className="h-[60] w-[100]" />
          </div>
          <div className="my-[40px]" />
          <div
            onClick={() => navigate("/app/dashboard/chooseSpecialNumber")}
            className={`flex flex-row justify-center items-center gap-1  mt-[16px] bg-[#515151] py-2 rounded text-white`}
          >
            <label className="font-inter font-normal text-[18px]">Access my Dashboard</label>
          </div>
          <div className="mb-[40px]" />
        </div>
      </form>
    </div>
  );
};

export default SigninOtpSuccess;
