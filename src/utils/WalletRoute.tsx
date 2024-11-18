import { Outlet, Navigate, NavLink, useLocation } from "react-router-dom";

export const WalletRoute = () => {
  const WalletLayout = () => {

    const location = useLocation();

    return (
        <div>
            <div className="link-container" style={{ paddingTop: "5%" }}>
                <NavLink to="/app/wallet" className="nav-link" style={{ color: "#0350C2B2" }}>
                    Wallet
                </NavLink>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M9.00378 5.99561L15.004 11.9959L9.00024 17.9996"
                    stroke="black"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="my-path"
                    ></path>
                </svg>
                <NavLink to={`/app/wallet/${location.pathname.includes("deposit") ? "deposit" : "withdraw"}`} className="nav-link">
                    {location.pathname.includes("deposit") ? "Deposit Funds" : "Withdraw Funds"}
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

                .nav-link {
                text-decoration: none;
                color: black;
                margin: 0 8px; /* Adds horizontal spacing */
                }

                .nav-link:hover,
                .nav-link.active {
                color: gray; /* Change the color for active or hover state */
                }

                .nav-link.active {
                text-decoration: none; /* Ensure no underline */
                }
            `}</style>
        </div>
    );
  };

  const user = true;
  return user ? <WalletLayout /> : <Navigate to={"/"} replace={true} />;
};
