import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home} from "./pages/Home";
//import Application from "./pages/Application";
//import { ProtectedRoutes } from "./utils/ProtectedRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    // {
    //   path: "app/",
    //   element: <ProtectedRoutes />,
    //   // element: <DashboardLayout />,
    //   children: [
    //   ],
    // },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
