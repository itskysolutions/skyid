import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home} from "./pages/Home";
import {Policies} from "./pages/Policies";
//import { ProtectedRoutes } from "./utils/ProtectedRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    // {
    //   path: "/policies",
    //   element: <Policies/>,
    // },
    {
      path: "policies/",
      element: <Policies />,                   
      children: [
      ],
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
