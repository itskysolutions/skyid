import { Outlet, Navigate } from "react-router-dom";
import { DashboardHeader } from "../components/DashboardHeader";
import { CPDashboardSideMenu } from "../components/CPComponents/CPDashboardSideMenu";

export const ChannelPartnersRoute = () => {
  const ChannelPartnersLayout = () => {
    return (
      <div className="h-screen w-screen flex flex-col bg-white">
        <DashboardHeader />

        <div className="w-screen h-screen grid grid-cols-12" >
          <div className="hidden md:flex col-span-2 border-t-[1px] border-r-[1px] border-gray-300" style={{backgroundColor:'#D92027'}}>
          <CPDashboardSideMenu />
          </div>

          <div className="col-span-12 md:col-span-10 border-t-[1px] border-gray-300 px-4">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const user = true;
  return user ? <ChannelPartnersLayout /> : <Navigate to={"/"} replace={true} />;
};
