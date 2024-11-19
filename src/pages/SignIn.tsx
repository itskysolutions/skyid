import React from "react";
import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import IMAGES from "../constant/Images";
import Colors from "../constant/Colors";
import Logo from "../../public/logo.png";

const Signin: React.FC = () => {
  // const params = useLocation();
  //const navigate = useNavigate();
  const { control } = useForm();

  const navigate = useNavigate();
  return (
    <div className="bg-[#fff]">
      <div className="flex flex-row justify-between items-center px-8 pt-4">
        <img src={Logo} className="h-[60] w-[100]" />
        <div
          onClick={() => navigate("/signup")}
          className="py-2 px-4 rounded border border-red-700 hover:bg-red-600 hover:text-white cursor-pointer"
        >
          Sign up
        </div>
      </div>
      {/* <Header /> */}
      <form className="flex flex-col items-center mt-40">
        <div className="w-[30%]">
          <div className="flex flex-row justify-center my-[30px]" data-aos="fade-up">
            <Link to={"/"}>
              <img src={IMAGES.LOGO} alt="logo" style={{ width: "310px", height: "113px" }} />
            </Link>
            {/* <label className="text-left font-inter font-semibold text-[20px]">Log In to your Account</label> */}
          </div>
          <div className="mb-[40px]">
            <CustomInput name="email" label={"Email"} asterisk control={control as never} />
            <div className="my-[14px]" />
            <CustomInput
              type="password"
              name="password"
              label={"Password"}
              asterisk
              control={control as never}
              trailingIcon
            />
          </div>
          <div className="my-[40px]" />

          <div className="flex flex-row justify-end items-center gap-1  mt-[16px]">
            <label onClick={() => {}} className={`font-inter font-semibold text-[${Colors.primary}] text-[14px]`}>
              Forgot Password?
            </label>
          </div>

          <div
            onClick={() => navigate("/signinotp")}
            className={`flex flex-row justify-center items-center gap-1  mt-[16px] bg-[${Colors.black}] py-2 rounded text-white`}
          >
            <label className="font-inter font-normal text-[18px]">Log In</label>
          </div>
          <div className="mb-[40px]" />
        </div>
      </form>
    </div>
  );
};

export default Signin;
