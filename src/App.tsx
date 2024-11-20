import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Policies } from "./pages/Policies";
import Signin from "./pages/SignIn";
import Signup from "./pages/Register/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Verification from "./pages/Verification";
import { ManageNumbers } from "./pages/ManageNumbers";
import { Support } from "./pages/Support";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import { SupportRoute } from "./utils/SupportRoute";
import { DashboardRoute } from "./utils/DashboardRoute";
import { VSORoute } from "./utils/VSORoute";
import { WalletRoute } from "./utils/WalletRoute";
import { ChannelPartnersRoute } from "./utils/ChannelPartnersRoute";
import { FAQs } from "./pages/FAQs";
import { Email } from "./pages/Email";
import { Wallet } from "./pages/Wallet";
import { Deposit } from "./pages/Deposit";
import { Withdraw } from "./pages/Withdraw";
import { AddOns } from "./pages/AddOns";
import { LogOut } from "./pages/LogOut";
import { NumberMapping } from "./components/NumberMapping";
import { DashboardAddOns } from "./components/DashboardAddOns";
import { CheckOut } from "./components/CheckOut";
import { Completed } from "./components/Completed";
import { ChooseSpecialNumber } from "./components/ChooseSpecialNumber";
import SigninOtp from "./pages/SignInOtp";
import ResetPassword from "./pages/ResetPassword";
import UpdatePassword from "./pages/UpdatePassword";
import { ManageVSOs } from "./pages/CPs/ManageVSOs";
import { AddNewVSO } from "./pages/CPs/AddNewVSO";
import VerifyNewUser from "./pages/Register/VerifyNewUser";
import SignupSuccess from "./pages/Register/SignupSuccess";

import { Toaster } from "sonner";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Success } from "./pages/Sucess";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "policies/",
      element: <Policies />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signinotp",
      element: <SigninOtp />,
    },

    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/verify-new-user",
      element: <VerifyNewUser />,
    },
    {
      path: "/signup-success",
      element: <SignupSuccess />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
    {
      path: "/update-password",
      element: <UpdatePassword />,
    },
    {
      path: "/verification",
      element: <Verification />,
    },
    {
      path: "app/",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "dashboard",
          element: <DashboardRoute />,
          children: [
            {
              path: "chooseSpecialNumber",
              element: <ChooseSpecialNumber />,
            },
            {
              path: "numberMapping",
              element: <NumberMapping />,
            },
            {
              path: "dashboardAddOns",
              element: <DashboardAddOns />,
            },
            {
              path: "checkOut",
              element: <CheckOut />,
            },
            {
              path: "completed",
              element: <Completed />,
            },
          ],
        },
        {
          path: "manageNumbers",
          element: <ManageNumbers />,
        },
        {
          path: "addOns",
          element: <AddOns />,
        },
        {
          path: "wallet",
          element: <Wallet />,
        },
        {
          path: "wallet",
          element: <WalletRoute />,
          children: [
            {
              path: "deposit",
              element: <Deposit />,
            },
            {
              path: "withdraw",
              element: <Withdraw />,
            },
          ],
        },
        {
          path: "support",
          element: <Support />,
        },
        {
          path: "support",
          element: <SupportRoute />,
          children: [
            {
              path: "faqs",
              element: <FAQs />,
            },
            {
              path: "email",
              element: <Email />,
            },
          ],
        },
        {
          path: "LogOut",
          element: <LogOut />,
        },
      ],
    },
    {
      path: "channelPartners",
      element: <ChannelPartnersRoute />,
      children: [
        {
          path: "manageVSOs",
          element: <ManageVSOs />,
        },
      ],
    },
    {
      path: "manageVSOs",
      element: <VSORoute />,
      children: [
        {
          path: "addNewVSO",
          element: <AddNewVSO />,
        },
      ],
    },
    {
      path: "success",
      element: <Success />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position="top-center" />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
