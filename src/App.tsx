import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Policies } from "./pages/Policies";
import Signin from "./pages/SignIn";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Verification from "./pages/Verification";
import { ManageNumbers } from "./pages/ManageNumbers";
import { Support } from "./pages/Support";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import { SupportRoute } from "./utils/SupportRoute";
import { BuyNumberRoute } from "./utils/BuyNumberRoute";
import { VSORoute } from "./utils/VSORoute";
import { WalletRoute } from "./utils/WalletRoute";
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
//import SigninOtpSuccess from "./pages/SignInOtpSuccess";
import  {ManageVSOs}  from "./pages/CPs/ManageVSOs";
import  {AddNewVSO}  from "./pages/CPs/AddNewVSO";
import { ViewProfile } from "./pages/ViewProfile";
import { EditProfile } from "./pages/EditProfile";
import { SuccessPassword } from "./pages/SuccessPassword";
import { Toaster } from "sonner";
import { ManageCustomers } from "./pages/VSOs/ManageCustomers";
import { GenerateReports } from "./pages/Finance/GenerateReports";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Success } from "./pages/Sucess";
import { ViewActivities } from "./pages/CPs/ViewActivites";
import { UpdateCurrentPassword } from "./pages/UpdateCurrentPassword";
import { CustomerRoute } from "./utils/CustomerRoute";
import { ManageRequests } from "./pages/Finance/ManageRequests";
import { Dashboard } from "./pages/Dashboard";
import { KYC } from "./components/KYC";
import { KYCForBusiness } from "./components/VSOComponents/KYCForBusiness";

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
          element: <Dashboard />,
        },
        {
          path: "buyNumber",
          element: <BuyNumberRoute />,
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
              path: "KYC",
              element: <KYC />,
            },
            {
              path: "KYCForBusiness",
              element: <KYCForBusiness />,
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
          path: "manageVSOs",
          element: <ManageVSOs/>,
        },
        {
          path: "manageVSOs",
          element: <VSORoute/>,
          children:[
            {
              path: "addNewVSO",
              element:<AddNewVSO/>,
            },
            {
              path: "viewActivities",
              element:<ViewActivities/>,
            }
          ]
        },
        {
          path: "manageCustomers",
          element: <ManageCustomers/>,
        },
        {
          path: "manageBusinesses",
          element: <CustomerRoute/>,
          children:[
            {
              path: "viewActivitiesBusiness",
              element:<ViewActivities/>,
            }
          ]
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
        {
          path: "viewProfile",
          element: <ViewProfile/>,
        },
        {
          path: "editProfile",
          element: <EditProfile/>,
        },
        {
          path: "updateCurrentPassword",
          element: <UpdateCurrentPassword/>,
        },
        {
          path: "manageRequests",
          element: <ManageRequests/>,
        },
        {
          path: "generateReports",
          element: <GenerateReports/>,
        },
      ],
    },
    {
      path: "success",
      element: <Success/>
    },
    {
      path: "successPassword",
      element: <SuccessPassword/>
    }
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position="top-center" />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
