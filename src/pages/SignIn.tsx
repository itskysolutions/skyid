import React from "react";
import CustomInput from "../components/CustomInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Colors from "../constant/Colors";
import IMAGES from "../assets/images/logo.png";
import { signin } from "../services/Endpoints";
import Authentication from "../validations/Authentication";
import { ISignIn } from "../types";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";

interface ErrorResponse {
  message: string;
}
const Signin: React.FC = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, watch } = useForm<ISignIn>({
    resolver: yupResolver(Authentication.LoginValidation as never),
  });

  const onSubmit: SubmitHandler<ISignIn> = (data: ISignIn) => {
    registerUser.mutate({
      email: data.email,
      password: data.password,
    });
  };

  const registerUser = useMutation({
    mutationFn: (payload: ISignIn) => {
      return signin(payload);
    },

    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data.message as never);
    },

    onSuccess: (data) => {
      if (data.data.message === "success") {
        localStorage.setItem("token", JSON.stringify(data.data.accessToken));
        navigate("/app/dashboard", { state: { type: watch("email") } });
      }
    },
  });

  return (
    <div className="bg-[#fff]">
      <div className="flex flex-row justify-between items-center px-8 pt-4">
        <img src={IMAGES} className="h-[60] w-[100]" />
        <div
          onClick={() => navigate("/")}
          className="py-2 px-4 rounded border border-red-700 hover:bg-red-600 hover:text-white cursor-pointer"
        >
          Go to website
        </div>
      </div>
      <form className="flex flex-col items-center mt-40">
        <div className="w-[30%]">
          <div className="flex flex-row justify-center my-[30px]" data-aos="fade-up">
            {/* <Link to={"/"}>
              <img src={IMAGES.LOGO} alt="logo" style={{ width: "110px", height: "113px" }} />
            </Link> */}
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
            <label
              onClick={() => navigate("/forgot-password")}
              className={`font-inter font-semibold text-[${Colors.primary}] text-[14px]`}
            >
              Forgot Password?
            </label>
          </div>

          <div
            onClick={handleSubmit(onSubmit)}
            className={`flex flex-row justify-center items-center gap-1  mt-[16px] bg-[#515151] py-2 rounded text-white`}
          >
            {registerUser.isPending ? (
              <div role="status" aria-label="loading">
                <svg
                  className="w-6 h-6 stroke-[white] animate-spin "
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_9023_61563)">
                    <path
                      d="M14.6437 2.05426C11.9803 1.2966 9.01686 1.64245 6.50315 3.25548C1.85499 6.23817 0.504864 12.4242 3.48756 17.0724C6.47025 21.7205 12.6563 23.0706 17.3044 20.088C20.4971 18.0393 22.1338 14.4793 21.8792 10.9444"
                      stroke="stroke-current"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      className="my-path"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_9023_61563">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <label className="font-inter font-normal text-[18px]">Log In</label>
            )}
          </div>
          <div className="mb-[40px]" />
        </div>
      </form>
    </div>
  );
};

export default Signin;
