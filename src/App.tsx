import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Policies } from "./pages/Policies";
import Signin from "./pages/SignIn";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Verification from "./pages/Verification";
import {Dashboard} from "./pages/Dashboard";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "policies/",
      element: <Policies />,
      children: [],
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
          path: "Dashboard",
          element: <Dashboard />,
        },
        {
          path: "ManageNumbers",
          //element: <ManageNumbers />,
        },
        {
          path: "AddOns",
          //element: <AddOns />,
        },
        {
          path: "Wallet",
          //element: <Wallet />,
        },
        {
          path: "Support",
          //element: <Support />,
        },
      ],
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;
