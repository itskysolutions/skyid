import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const DashboardLayout = () => {
    return (
      <h1>nothing yet</h1>
    );
  };

  const user = true;
  return user ? <DashboardLayout /> : <Navigate to={"/"} replace={true} />;
};
