export interface IFillForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  middle?: string;
}

export type IVerifyNewUser = {
  firstName?: string;
  email?: string;
  otp?: string;
};

export type ISignUp = {
  firstName: string;
  lastName: string;
  businessType?: string;
  businessName?: string;
  country?: string;
  agentCode?: string;
  accountType?: string;
  email: string;
  password: string;
  phoneNumber: string;
};

export interface ISignIn {
  email: string;
  password?: string;
}

export interface IForgotPassword {
  email?: string;
  password?: string;
  confirmPassword?: string;
  otp?: string;
}
