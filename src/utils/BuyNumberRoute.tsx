import { Outlet, Navigate } from "react-router-dom";
import StepperNavbar from "../components/StepperNavbar";

export const BuyNumberRoute = () => {
  const BuyNumberLayout = () => {


    return (
        <div>
            <div className=" flex flex-col pt-5 pb-5">
              <StepperNavbar/>
            </div>

            <div className="col-span-12 md:col-span-10  px-4">
                <Outlet />
            </div>
        </div>
    );
  };

  const user = true;
  return user ? <BuyNumberLayout /> : <Navigate to={"/"} replace={true} />;
};
