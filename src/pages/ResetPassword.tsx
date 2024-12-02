import React from "react";
import CustomInput from "../components/CustomInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import IMAGES from "../assets/images/logo.png";
import Authentication from "../validations/Authentication";
import { IForgotPassword } from "../types";
import { yupResolver } from "@hookform/resolvers/yup";

const ResetPassword: React.FC = () => {
  const params = useLocation();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<IForgotPassword>({
    resolver: yupResolver(Authentication.ResetPasswordValidation as never),
  });

  const onSubmit: SubmitHandler<IForgotPassword> = (data: IForgotPassword) => {
    navigate("/update-password", { state: { password: data.password, email: params?.state?.type } });
  };

  return (
    <div className="bg-[#fff]">
      <div className="flex flex-row justify-between items-center px-8 pt-4">
        <img src={IMAGES} className="h-[60] w-[100]" />
        <div
          onClick={() => navigate("/signup")}
          className="py-2 px-4 rounded border border-red-700 hover:bg-red-600 hover:text-white cursor-pointer"
        >
          Forgot Password
        </div>
      </div>
      <form className="flex flex-col items-center mt-40">
        <div className="w-[30%]">
          <div className="mb-[40px]">
            <CustomInput
              type="password"
              name="password"
              label={"Password"}
              asterisk
              control={control as never}
              trailingIcon
            />
          </div>
          <CustomInput
            type="password"
            name="confirmPassword"
            label={"Confirm Password"}
            asterisk
            control={control as never}
            trailingIcon
          />
          <div className="my-[40px]" />

          <div
            onClick={handleSubmit(onSubmit)}
            className={`flex flex-row justify-center items-center gap-1  mt-[16px] bg-[#515151] py-2 rounded text-white`}
          >
            <label className="font-inter font-normal text-[18px]">Continue</label>
          </div>
          <div className="mb-[40px]" />
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
