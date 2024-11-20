import * as yup from "yup";

export default {
  LoginValidation: yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      // .min(8, "Password must be at least 8 characters")
      // .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      // .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      // .matches(/[0-9]/, "Password must contain at least one number")
      // .matches(/[^A-Za-z0-9]/, "Password must contain at least one special character")
      .required("Password is required"),
  }),
  EmailValidation: yup.object({
    email: yup.string().email("Email email").required("Email is required"),
  }),
  ResetPasswordValidation: yup.object({
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[^A-Za-z0-9]/, "Password must contain at least one special character")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),
  }),

  VerifyOtpValidation: yup.object({
    otp: yup.string().min(6, "Otp must be 6 digits").required("Otp is required"),
  }),
  SignupValidation: yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("password is required"),
  }),
};

// import * as yup from "yup";

// export const signupFormSchema = yup.object({
//   firstName: yup.string().required("Input must be filled"),
//   lastName: yup.string().required("Input is must be filled"),
//   email: yup.string().email("Invalid email").required("Email is required"),
//   phoneNumber: yup.string().required("Phone number is required"),
//   password: yup.string().required("Password is required"),
// });

// export const loginFormSchema = yup.object({
//   email: yup.string().email("Invalid email").required("Email is required"),
//   password: yup.string().required("password is required"),
// });

// export const VerificationSchema = yup.object({
//   rrr: yup.string().required("RRR is required").min(10),
//   // nin: yup.string().required("NIN is required"),
// });
// export const VerificationSchema2 = yup.object({
//   // rrr: yup.string().required("RRR is required"),
//   nin: yup.string().required("NIN is required").min(10),
// });

// export const otp = yup.object({
//   otp: yup.string().email("Invalid email").required("Email is required"),
// });
