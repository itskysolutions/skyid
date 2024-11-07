import { Outlet, Navigate } from "react-router-dom";
//import { DashboardHeader } from "../components/DashboardHeader";
//import { SideMenu } from "../components/SideMenu";

export const ProtectedRoutes = () => {
  const DashboardLayout = () => {
    return (
      <div className="h-screen w-screen flex flex-col bg-white">
        {/* <DashboardHeader /> */}

        <div className="w-screen h-screen grid grid-cols-12">
          <div className="hidden md:flex col-span-2 p-4 border-t-[1px] border-r-[1px] border-gray-300">
            {/* <DashboardSideMenu /> */}
          </div>

          <div className="col-span-12 md:col-span-10 border-t-[1px] border-gray-300 px-4">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const user = true;
  return user ? <DashboardLayout /> : <Navigate to={"/"} replace={true} />;
};
