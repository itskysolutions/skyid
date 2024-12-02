import { IForgotPassword, ISignIn, ISignUp, IVerifyNewUser } from "../types";
import Api from "./Api";

//  Auth
export const signin = (payload: ISignIn) => Api.post("signin", payload);

export const verifyOTP = (email: string, otp: string) => Api.post("verify-otp", { email: email, otp: otp });

export const forgotPassword = (payload: ISignIn) => Api.post("forgot-password", payload);

export const updatePassword = (payload: IForgotPassword) => Api.post("reset-password", payload);

export const verifyEmail = (payload: IVerifyNewUser) => Api.post("check-email", payload);

export const confirmEmail = (payload: IVerifyNewUser) => Api.post("verify-email", payload);

export const signup = (payload: ISignUp) => Api.post("signup", payload);

export const successUser = (payload: string) => Api.post("success", { email: payload });

export const sendOTP = (payload: string) => Api.post("send-otp", { email: payload });

export const userProfile = () => Api.get(`user-profile`);
