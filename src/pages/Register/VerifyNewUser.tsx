import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import IMAGES from "../../assets/images/logo.png";
import Authentication from "../../validations/Authentication";
import { IForgotPassword, ISignUp, IVerifyNewUser } from "../../types";
import OtpInput from "../../components/CustomOtp";
import { IoChevronBackOutline } from "react-icons/io5";
import Colors from "../../constant/Colors";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { confirmEmail, signup } from "../../services/Endpoints";
import Spinner from "../../components/shared/spinner";

interface ErrorResponse {
  message: string;
}

const VerifyNewUser: React.FC = () => {
  const params = useLocation();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<IVerifyNewUser>({
    resolver: yupResolver(Authentication.VerifyOtpValidation as never),
  });

  const onSubmit: SubmitHandler<IVerifyNewUser> = (data: IForgotPassword) => {
    mutateConfirmEmail.mutate({
      email: params.state.email,
      otp: data.otp,
    });
  };

  const mutateConfirmEmail = useMutation({
    mutationFn: (payload: IForgotPassword) => {
      return confirmEmail(payload);
    },

    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data.message as never);
    },

    onSuccess: (data) => {
      if (data.data.message === "success") {
        signupAUser.mutate({ ...params.state });
      }
    },
  });

  const signupAUser = useMutation({
    mutationFn: (payload: ISignUp) => {
      return signup(payload);
    },

    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data.message as never);
    },

    onSuccess: (data) => {
      if (data.data.message === "success") {
        navigate("/signup-success");
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

      <form className="flex flex-col items-center mt-20">
        <div className="w-[50%]">
          <div className="flex flex-row justify-start items-center gap-1  mt-[16px]">
            <IoChevronBackOutline size={26} color={Colors.primary} />
            <label onClick={() => {}} className={`font-poppins font-normal text-[${Colors.primary}] text-[18px]`}>
              Back
            </label>
          </div>
          <div className="flex flex-col justify-center my-[38px]">
            <label className="text-left mb-[16px] font-raleway font-semibold text-[28px]">Email Verification</label>
            <label className="text-left font-raleway font-normal text-[18px]">
              We emailed you the 6 digit code to your email. Enter the code below to confirm your email address.
            </label>
          </div>
          <div className="mb-[40px]">
            <OtpInput name="otp" control={control as never} />
          </div>
          <div className="mb-[40px]" />
          <div className="flex flex-row justify-start items-center gap-1  mt-[16px]">
            <label onClick={() => {}} className={`font-raleway font-semibold text-[${Colors.primary}] text-[18px]`}>
              Resend OTP
            </label>
          </div>

          <div
            onClick={handleSubmit(onSubmit)}
            className={`flex flex-row justify-center items-center gap-1 mt-[40px] bg-[#515151] py-2 rounded text-white`}
          >
            {mutateConfirmEmail.isPending || signupAUser.isPending ? (
              <Spinner />
            ) : (
              <label className="font-poppins font-medium text-[18px]">Verify Code</label>
            )}
          </div>
          <div className="mb-[40px]" />
        </div>
      </form>
    </div>
  );
};

export default VerifyNewUser;
