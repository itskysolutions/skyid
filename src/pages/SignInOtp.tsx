import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Colors from "../constant/Colors";
import Logo from "../../public/logo.png";
import OTPInput from "react-otp-input";
// otp-success
import { IoChevronBackOutline } from "react-icons/io5";

const SigninOtp: React.FC = () => {
  const [otp, setOtp] = useState();

  const navigate = useNavigate();
  return (
    <div className="bg-[#fff]">
      <div className="flex flex-row justify-between items-center px-8 pt-4">
        <img src={Logo} className="h-[60] w-[100]" />
        <div
          onClick={() => navigate("/signup")}
          className="py-2 px-4 rounded border border-red-700 hover:bg-red-600 hover:text-white cursor-pointer"
        >
          Go to website
        </div>
      </div>

      <form className="flex flex-col items-center mt-20">
        <div className="w-[30%]">
          <div className="flex flex-row justify-start items-center gap-1  mt-[16px]">
            <IoChevronBackOutline size={26} color={Colors.primary} />
            <label onClick={() => {}} className={`font-inter font-normal text-[${Colors.primary}] text-[20px]`}>
              Back
            </label>
          </div>
          <div className="flex flex-col justify-center my-[30px]">
            <label className="text-left mb-[8px] font-inter font-semibold text-[28px]">Email Verification</label>
            <label className="text-left font-inter font-normal text-[18px]">
              We emailed you the 6 digit code to your email. Enter the code below to confirm your email address.
            </label>
          </div>
          <div className="mb-[40px]">
            <div className="my-[14px]" />
            <OTPInput
              // {...register}
              value={otp}
              onChange={setOtp as never}
              numInputs={6}
              inputStyle={{
                background: "white",
                height: 50,
                width: 50,
                borderColor: "black",
                borderWidth: 1,
                marginRight: 30,
                borderRadius: 10,
              }}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div className="my-[40px]" />

          <div className="flex flex-row justify-start items-center gap-1  mt-[16px]">
            <label onClick={() => {}} className={`font-inter font-semibold text-[${Colors.primary}] text-[14px]`}>
              Resend OTP
            </label>
          </div>

          <div
            onClick={() => navigate("/signinotpSuccess")}
            className={`flex flex-row justify-center items-center gap-1  mt-[16px] bg-[${Colors.black}] py-2 rounded text-white`}
          >
            <label className="font-inter font-normal text-[18px]">Verify Code</label>
          </div>
          <div className="mb-[40px]" />
        </div>
      </form>
    </div>
  );
};

export default SigninOtp;
