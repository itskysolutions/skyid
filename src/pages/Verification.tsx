import React from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../public/logo.png";
import Select from "react-select";
import { businessCategory } from "../assets/data";
import countryOptions from "../utils/countries";
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

const Verification: React.FC = () => {
  // const params = useLocation();
  // const navigation = useNavigate();
  const { control } = useForm();

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

  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row justify-between items-center px-8 pt-4">
        <img src={Logo} className="h-[60] w-[100]" />
        <div
          onClick={() => navigate("/")}
          className="py-2 px-4 rounded border border-red-700 hover:bg-red-600 hover:text-white cursor-pointer"
        >
          Go to website
        </div>
      </div>
      <form className="flex flex-col items-center">
        <div className="w-[40%]">
          <Select
            isClearable={false}
            className=""
            id="currency"
            options={countryOptions}
            styles={{
              option: (provided, state: { isFocused: unknown }) => ({
                ...provided,
                color: state.isFocused ? "white" : "black",
                backgroundColor: state.isFocused ? "#C20308" : "white",
              }),

              singleValue: (provided) => ({
                ...provided,
                color: "black",
              }),
              // Add more styles as needed
            }} // Add this line
            onChange={(option) => {
              console.log(option, "optionss");
              // setCurrency(option?.value ?? "");
              // resetAmount();
            }}
          />
          <div className="flex flex-row my-[30px]">
            <label className="text-left font-inter font-semibold text-[28px]">
              Verification your <label className="text-red-600">SkyID</label> account
            </label>
          </div>

          <div className="mt-[40px] mb-[40px]">
            <div className="flex flex-row gap-10 my-[20px]">
              <CustomInput name="firstName" label={"First name"} asterisk control={control as never} />
              <CustomInput name="lastName" label={"Last name"} asterisk control={control as never} />
            </div>
            <CustomInput name="businessName" label={"Business name"} asterisk control={control as never} />
            <div className="my-[14px]" />
            {/* <CustomSelect
              name="businessCategory"
              label={"Business category"}
              asterisk
              control={control as never}
              options={businessCategory}
            /> */}

            <Select
              isClearable={false}
              className=""
              id="currency"
              options={businessCategory}
              styles={{
                option: (provided, state: { isFocused: unknown }) => ({
                  ...provided,
                  color: state.isFocused ? "white" : "black",
                  backgroundColor: state.isFocused ? "#C20308" : "white",
                }),

                singleValue: (provided) => ({
                  ...provided,
                  color: "black",
                }),
                // Add more styles as needed
              }} // Add this line
              onChange={(option) => {
                console.log(option, "optionss");
                // setCurrency(option?.value ?? "");
                // resetAmount();
              }}
            />
            <div className="my-[14px]" />
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
            <div className="my-[14px]" />
            <CustomInput
              type="password"
              name="password"
              label={"Confirm Password"}
              asterisk
              control={control as never}
              trailingIcon
            />
          </div>
          <div className="my-[40px]" />

          <div className="flex flex-row  items-center gap-1  mt-[16px] mb-[16px]">
            <input type="checkbox" />
            <label
              className="font-inter font-normal text-[14px]"
              // onClick={() => navigation("/signup", { state: { type: params.state.type } })}
            >
              I agree to Kirani’s
              <Link to={"#"}> Privacy Policy </Link>
              and
              <Link to={"#"}> Terms of Use.</Link>
            </label>
          </div>

          <CustomButton
            name="Create an account"
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
          <div className="mb-[40px]" />
        </div>
      </form>
    </div>
  );
};

export default Verification;
