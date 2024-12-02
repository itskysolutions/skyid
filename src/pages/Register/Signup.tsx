import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import IMAGES from "../../constant/Images";
import { businessCategory } from "../../assets/data";
import countryOptions from "../../utils/countries";
import Authentication from "../../validations/Authentication";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISignUp, IVerifyNewUser } from "../../types";
import Spinner from "../../components/shared/spinner";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { verifyEmail } from "../../services/Endpoints";
import CustomSelection from "../../components/CustomSelection";

interface ErrorResponse {
  message: string;
}

const Signup: React.FC = () => {
  const [step, setStep] = useState(1);
  const { control, handleSubmit, watch } = useForm<ISignUp>({
    resolver: yupResolver(Authentication.SignupValidation as never),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ISignUp> = (data) => {
    verifyingUser.mutate({
      email: data.email,
      firstName: data.firstName,
    });
  };

  const verifyingUser = useMutation({
    mutationFn: (payload: IVerifyNewUser) => {
      return verifyEmail(payload);
    },

    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data.message);
    },

    onSuccess: (data) => {
      if (data.data.message === "success") {
        navigate("/verify-new-user", {
          state: {
            firstName: watch("firstName"),
            lastName: watch("lastName"),
            country: watch("country"),
            businessName: watch("businessName"),
            businessType: watch("businessType"),
            agentCode: watch("agentCode"),
            email: watch("email"),
            phoneNumber: watch("phoneNumber"),
            password: watch("password"),
            accountType: step === 1 ? "business owner" : "channel partner",
          },
        });
      }
    },
  });
  // const registerUser = useMutation({
  //   mutationFn: (payload: ISignUp) => {
  //     return signup(payload);
  //   },

  //   onError: (error: AxiosError<ErrorResponse>) => {
  //     toast.error(error.response?.data.message);
  //   },

  //   onSuccess: (data) => {
  //     if (data.data.message === "success") {
  //       console.log("testing");
  //       // onClick={() => navigate("/verify-new-user")}
  //       // localStorage.setItem("token", JSON.stringify(data.data.accessToken));
  //       // navigate("/dashboard", { state: { type: params.state.type } });
  //       // navigate("/dashboard");
  //     }
  //   },
  // });

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
            <CustomSelection
              name="country"
              label={"Country"}
              options={countryOptions}
              asterisk
              control={control as never}
            />
            <CustomInput name="businessName" label={"Business name"} asterisk control={control as never} />

            <CustomSelection
              name="businessType"
              label={"Business Type"}
              options={businessCategory}
              asterisk
              control={control as never}
            />

            <CustomInput name="agentCode" label={"Agent Code"} control={control as never} />
            <div className="my-[40px]" />
            <CustomInput name="email" label={"Email"} asterisk control={control as never} />
            <div className="my-[40px]" />
            <CustomInput name="phoneNumber" label={"Phone Number"} asterisk control={control as never} />
            <div className="my-[40px]" />
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
              name="confirmPassword"
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
              I agree to Sky ID’s?
              <Link to={"#"}> Privacy Policy </Link>
              and
              <Link to={"#"}> Terms of Use.</Link>
            </label>
          </div>

          <div
            onClick={handleSubmit(onSubmit)}
            className={`flex flex-row justify-center items-center gap-1 mt-[40px] bg-[#515151] py-2 rounded text-white`}
          >
            {verifyingUser.isPending ? (
              <Spinner />
            ) : (
              <label className="font-poppins font-medium text-[18px]">Continue</label>
            )}
          </div>
          <div className="mb-[40px]" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
