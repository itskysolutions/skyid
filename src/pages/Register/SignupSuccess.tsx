import React from "react";
import { useNavigate } from "react-router-dom";
import OtpSuccess from "../../../public/otp-success.png";

const SignupSuccess: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#fff]">
      <div className="flex flex-row justify-between items-center mt-10" />

      <form className="flex flex-col items-center mt-20">
        <div className="w-[30%]">
          <div className="mb-[40px]">
            <img src={OtpSuccess} className="h-[60] w-[100]" />
          </div>
          <div className="my-[40px]" />
          <div
            onClick={() => navigate("/app/dashboard")}
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

export default SignupSuccess;
