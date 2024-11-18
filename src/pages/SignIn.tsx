import React from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useForm } from "react-hook-form";
import { Header } from "../components/Header";
//import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { FaArrowRight } from "react-icons/fa6";
// import CustomButton from "../components/CustomButton";
// import CustomInput from "../components/CustomInput";
// import { useLocation, useNavigate } from "react-router-dom";
// import CustomInput from "../components/CustomInput";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { loginFormSchema } from "../models";
// import { useMutation } from "@tanstack/react-query";
// import { ISignIn } from "../types";
// import { signin } from "../services/Endpoints";
// import { AxiosError } from "axios";
// import { toast } from "sonner";

// interface ErrorResponse {
//   message: string;
// }
// interface Props {
//   email: string;
//   password: string;
// }

const Signin: React.FC = () => {
  // const params = useLocation();
  // const navigation = useNavigate();
  const { control } = useForm();
  //const navigate = useNavigate();

  // const onSubmit: SubmitHandler<Props> = (data) => {
  //   registerUser.mutate({
  //     email: data.email,
  //     password: data.password,
  //   });
  // };

  // const registerUser = useMutation({
  //   mutationFn: (payload: ISignIn) => {
  //     return signin(payload);
  //   },

  //   onError: (error: AxiosError<ErrorResponse>) => {
  //     toast.error(error.response?.data.message);
  //   },

  //   onSuccess: (data) => {
  //     if (data.data.message === "success") {
  //       localStorage.setItem("token", JSON.stringify(data.data.accessToken));
  //       navigation("/dashboard", { state: { type: params.state.type } });
  //     }
  //   },
  // });

  return (
    <>
      <Header />
      <form className="flex flex-col items-center mt-40">
        <div className="w-[40%]">
          <div className="flex flex-row my-[30px]">
            <label className="text-left font-inter font-semibold text-[20px]">Log In to your Account</label>
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

          <CustomButton
            name="Log in"
            backgroundColor="red"
            // trailingIcon={
            //   registerUser.isPending ? (
            //     <div role="status" aria-label="loading">
            //       <svg
            //         className="w-6 h-6 stroke-[white] animate-spin "
            //         viewBox="0 0 24 24"
            //         fill="none"
            //         xmlns="http://www.w3.org/2000/svg"
            //       >
            //         <g clip-path="url(#clip0_9023_61563)">
            //           <path
            //             d="M14.6437 2.05426C11.9803 1.2966 9.01686 1.64245 6.50315 3.25548C1.85499 6.23817 0.504864 12.4242 3.48756 17.0724C6.47025 21.7205 12.6563 23.0706 17.3044 20.088C20.4971 18.0393 22.1338 14.4793 21.8792 10.9444"
            //             stroke="stroke-current"
            //             stroke-width="1.4"
            //             stroke-linecap="round"
            //             className="my-path"
            //           ></path>
            //         </g>
            //         <defs>
            //           <clipPath id="clip0_9023_61563">
            //             <rect width="24" height="24" fill="white"></rect>
            //           </clipPath>
            //         </defs>
            //       </svg>
            //       <span className="sr-only">Loading...</span>
            //     </div>
            //   ) : (
            //     <FaArrowRight />
            //   )
            // }
          />

          <div className="flex flex-row justify-center items-center gap-1  mt-[16px]">
            <label className="font-inter font-normal text-[14px]">Don’t have an account?</label>
            <label
              className="font-inter font-normal text-[#216D98] text-[14px]"
              // onClick={() => navigation("/signup", { state: { type: params.state.type } })}
            >
              Signup
            </label>
          </div>
          <div className="mb-[40px]" />
        </div>
      </form>
    </>
  );
};

export default Signin;
