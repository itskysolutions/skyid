import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Policies } from "./pages/Policies";
import Signin from "./pages/SignIn";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Verification from "./pages/Verification";
//import {Dashboard} from "./pages/Dashboard";
import {ManageNumbers} from "./pages/ManageNumbers";
import {Support} from "./pages/Support";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import { SupportRoute } from "./utils/SupportRoute";
import { DashboardRoute } from "./utils/DashboardRoute";
import { WalletRoute } from "./utils/WalletRoute";
import {FAQs} from "./pages/FAQs";
import {Email} from "./pages/Email";
import {Wallet} from "./pages/Wallet";
import {Deposit} from "./pages/Deposit";
import {Withdraw} from "./pages/Withdraw";
import {AddOns} from "./pages/AddOns";
import {LogOut} from "./pages/LogOut";
import {NumberMapping} from "./components/NumberMapping"
import { DashboardAddOns } from "./components/DashboardAddOns";
import { CheckOut } from "./components/CheckOut";
import { Completed } from "./components/Completed";
import { ChooseSpecialNumber } from "./components/ChooseSpecialNumber";



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
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />,
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
          children:[
            {
              path: "chooseSpecialNumber",
              element: <ChooseSpecialNumber />
            },
            {
              path: "numberMapping",
              element: <NumberMapping />
            },
            {
              path: "dashboardAddOns",
              element: <DashboardAddOns />
            },
            {
              path: "checkOut",
              element: <CheckOut />
            },
            {
              path: "completed",
              element: <Completed />
            },
          ]
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
          children:[
            {
              path: "deposit",
              element: <Deposit />
            },
            {
              path: "withdraw",
              element: <Withdraw />
            },
          ]
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
          ]
        },
        {
          path: "LogOut",
          element: <LogOut />,
        },
      ],
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;
