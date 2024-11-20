import { Outlet, Navigate, NavLink } from "react-router-dom";
import { DashboardHeader } from "../components/DashboardHeader";

export const VSORoute = () => {
  const VSOLayout = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="link-container ms-5 mt-3" style={{ paddingTop: "1%" }}>
                <NavLink to="/channelPartners/manageVSOs"  className="no-underline" style={{ color: "#D92027", display:"flex" , fontSize:"18px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left mt-1 me-2" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                    </svg>
                    Back
                </NavLink>
            </div>

            <div className="col-span-12 md:col-span-10  px-4">
                <Outlet />
            </div>
            <style>{`
                .link-container {
                display: flex;
                align-items: center;
                }
            `}</style>
        </div>
    );
  };

  const user = true;
  return user ? <VSOLayout /> : <Navigate to={"/"} replace={true} />;
};
