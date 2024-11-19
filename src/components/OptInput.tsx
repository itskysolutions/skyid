import React, { useState } from "react";
import OTPInput from "react-otp-input";

const OptInput: React.FC = () => {
  const [otp, setOtp] = useState();

  return (
    <div className="flex flex-col items-center">
      <div className="w-[40%]">
        <div className="flex mt-[16px] mb-[16px]">
          <label className="text-left mb-[8px] font-inter font-semibold text-[28px]">Email Verification</label>
          <label className="text-left mb-[8px] font-inter font-semibold text-[18px]">
            We emailed you the 6 digit code to your email. Enter the code below to confirm your email address.
          </label>
        </div>
      </div>

      <div className="w-[50%]">
        <div className="flex flex-row justify-between gap-10 mb-[20px]">
          <OTPInput
            // {...register}
            value={otp}
            onChange={setOtp as never}
            numInputs={6}
            inputStyle={{
              background: "#F6F6F6",
              height: 50,
              width: 50,
              borderColor: "rgba(0,0,0,0,100%)",
              borderWidth: 1,
              marginRight: 20,
              marginBottom: 10,
            }}
            renderInput={(props) => <input {...props} />}
          />
        </div>
      </div>
    </div>
  );
};

export default OptInput;
