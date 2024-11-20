import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import IMAGES from "../../constant/Images";
import Select from "react-select";
import { businessCategory } from "../../assets/data";
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

const Signup: React.FC = () => {
  // const params = useLocation();
  // const navigation = useNavigate();
  const { control } = useForm();
  const navigate = useNavigate();

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

  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row justify-between items-center px-8 pt-4">
        <img src={IMAGES.LOGO} className="h-[60] w-[100]" />
        <div
          onClick={() => navigate("/")}
          className="py-2 px-4 rounded border border-red-700 hover:bg-red-600 hover:text-white cursor-pointer"
        >
          Go to website
        </div>
      </div>
      <form className="flex flex-col items-center">
        <div className="w-[50%]">
          <div className="flex flex-col my-[30px]">
            <label className="text-left font-raleway font-semibold text-[28px]">
              Create your <label className="text-red-600">SkyID</label> account
            </label>

            <div className="flex flex-row items-center border-b-4 border-[#D92027] my-4">
              <div
                className={`p-3 px-4 ${step === 1 ? "bg-[#D92027] text-white" : "bg-[#eeeeee] text-black"}`}
                onClick={() => setStep(1)}
                style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, cursor: "pointer" }}
              >
                Business Owner
              </div>

              <div
                className={`p-3 px-4 ${step === 2 ? "bg-[#D92027] text-white" : "bg-[#eeeeee] text-black"}`}
                onClick={() => setStep(2)}
                style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, cursor: "pointer" }}
              >
                Channel Partner
              </div>
            </div>

            <label className="text-left font-raleway font-medium text-[16px]">
              {step === 1
                ? "Registering with SKY ID lets business owners quickly find and secure unique business numbers to enhance brand visibility and customer reach. With easy payments and options like IVR, SKY ID ensures your business stays accessible and connected."
                : "Empower your network and maximize your earnings by becoming a SKY ID Channel Partner! Unlock opportunities with tools to seamlessly manage VSOs, track sales, and grow your agent network effortlessly. Lead the way in number solutions with full control over allocations, wallet discounts, and agent activities, all while enjoying percentage-based commissions on every transaction."}
            </label>
          </div>

          <div className="flex flex-row items-center gap-1  mt-[16px]">
            <label className="font-inter font-normal text-[14px]">Already have an account?</label>
            <label
              className="font-inter font-normal text-[#216D98] text-[14px]"
              // onClick={() => navigation("/signup", { state: { type: params.state.type } })}
            >
              Sign in.
            </label>
          </div>

          <div className="my-[40px]">
            <div className="flex flex-row flex-1">
              <CustomInput name="firstName" label={"First name"} asterisk control={control as never} />
              <CustomInput name="lastName" label={"Last name"} asterisk control={control as never} />
            </div>
            <CustomInput name="businessName" label={"Business name"} asterisk control={control as never} />
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
            <CustomInput name="email" label={"Email"} asterisk control={control as never} />
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

          <div
            onClick={() => navigate("/verify-new-user")}
            // onClick={handleSubmit(onSubmit)}
            className={`flex flex-row justify-center items-center gap-1 mt-[40px] bg-[#515151] py-2 rounded text-white`}
          >
            {/* {mutateUpdatePassword.isPending ? (
              <Spinner />
            ) : (
            )} */}
            <label className="font-poppins font-medium text-[18px]">Continue</label>
          </div>
          <div className="mb-[40px]" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
