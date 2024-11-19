import { NavLink } from "react-router-dom";
const data = [
  {
    title: "Dashboard",
    link: "dashboard/chooseSpecialNumber",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
      </svg>
    ),
  },
  {
    title: "Manage Numbers",
    link: "manageNumbers",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sim" viewBox="0 0 16 16">
        <path d="M2 1.5A1.5 1.5 0 0 1 3.5 0h7.086a1.5 1.5 0 0 1 1.06.44l1.915 1.914A1.5 1.5 0 0 1 14 3.414V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5zM3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V3.414a.5.5 0 0 0-.146-.353l-1.915-1.915A.5.5 0 0 0 10.586 1z"/>
        <path d="M5.5 4a.5.5 0 0 0-.5.5V6h2.5V4zm3 0v2H11V4.5a.5.5 0 0 0-.5-.5zM11 7H5v2h6zm0 3H8.5v2h2a.5.5 0 0 0 .5-.5zm-3.5 2v-2H5v1.5a.5.5 0 0 0 .5.5zM4 4.5A1.5 1.5 0 0 1 5.5 3h5A1.5 1.5 0 0 1 12 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 11.5z"/>
      </svg>
    ),
  },
  {
    title: "Add Ons",
    link: "addOns",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 6.5C3 5.09554 3 4.39331 3.33706 3.88886C3.48298 3.67048 3.67048 3.48298 3.88886 3.33706C4.39331 3 5.09554 3 6.5 3C7.90446 3 8.60669 3 9.11114 3.33706C9.32952 3.48298 9.51702 3.67048 9.66294 3.88886C10 4.39331 10 5.09554 10 6.5C10 7.90446 10 8.60669 9.66294 9.11114C9.51702 9.32952 9.32952 9.51702 9.11114 9.66294C8.60669 10 7.90446 10 6.5 10C5.09554 10 4.39331 10 3.88886 9.66294C3.67048 9.51702 3.48298 9.32952 3.33706 9.11114C3 8.60669 3 7.90446 3 6.5Z"
          stroke="currentColor"
          strokeWidth="null"
          className="my-path"
        ></path>
        <path
          d="M14 6.5C14 5.09554 14 4.39331 14.3371 3.88886C14.483 3.67048 14.6705 3.48298 14.8889 3.33706C15.3933 3 16.0955 3 17.5 3C18.9045 3 19.6067 3 20.1111 3.33706C20.3295 3.48298 20.517 3.67048 20.6629 3.88886C21 4.39331 21 5.09554 21 6.5C21 7.90446 21 8.60669 20.6629 9.11114C20.517 9.32952 20.3295 9.51702 20.1111 9.66294C19.6067 10 18.9045 10 17.5 10C16.0955 10 15.3933 10 14.8889 9.66294C14.6705 9.51702 14.483 9.32952 14.3371 9.11114C14 8.60669 14 7.90446 14 6.5Z"
          stroke="currentColor"
          strokeWidth="null"
          className="my-path"
        ></path>
        <path
          d="M14 17.5C14 16.0955 14 15.3933 14.3371 14.8889C14.483 14.6705 14.6705 14.483 14.8889 14.3371C15.3933 14 16.0955 14 17.5 14C18.9045 14 19.6067 14 20.1111 14.3371C20.3295 14.483 20.517 14.6705 20.6629 14.8889C21 15.3933 21 16.0955 21 17.5C21 18.9045 21 19.6067 20.6629 20.1111C20.517 20.3295 20.3295 20.517 20.1111 20.6629C19.6067 21 18.9045 21 17.5 21C16.0955 21 15.3933 21 14.8889 20.6629C14.6705 20.517 14.483 20.3295 14.3371 20.1111C14 19.6067 14 18.9045 14 17.5Z"
          stroke="currentColor"
          strokeWidth="null"
          className="my-path"
        ></path>
        <path
          d="M3 17.5C3 16.0955 3 15.3933 3.33706 14.8889C3.48298 14.6705 3.67048 14.483 3.88886 14.3371C4.39331 14 5.09554 14 6.5 14C7.90446 14 8.60669 14 9.11114 14.3371C9.32952 14.483 9.51702 14.6705 9.66294 14.8889C10 15.3933 10 16.0955 10 17.5C10 18.9045 10 19.6067 9.66294 20.1111C9.51702 20.3295 9.32952 20.517 9.11114 20.6629C8.60669 21 7.90446 21 6.5 21C5.09554 21 4.39331 21 3.88886 20.6629C3.67048 20.517 3.48298 20.3295 3.33706 20.1111C3 19.6067 3 18.9045 3 17.5Z"
          stroke="currentColor"
          strokeWidth="null"
          className="my-path"
        ></path>
      </svg>
    ),
  },
  {
    title: "Wallet",
    link: "wallet",
    icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6V17C3 18.8856 3 19.8284 3.58579 20.4142C4.17157 21 5.11438 21 7 21H17C18.8856 21 19.8284 21 20.4142 20.4142C21 19.8284 21 18.8856 21 17V12C21 10.1144 21 9.17157 20.4142 8.58579C19.8284 8 18.8856 8 17 8H7.82843C6.67474 8 6.0979 8 5.56035 7.84678C5.26506 7.7626 4.98044 7.64471 4.71212 7.49543C4.22367 7.22367 3.81578 6.81578 3 6ZM3 6C3 5.06812 3 4.60218 3.15224 4.23463C3.35523 3.74458 3.74458 3.35523 4.23463 3.15224C4.60218 3 5.06812 3 6 3H14C15.1046 3 16 3.89543 16 5" 
              stroke="currentColor" 
              stroke-width="null" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              className="my-path"
        ></path>
        <path
          d="M18 14.5C18 15.3284 17.3284 16 16.5 16C15.6716 16 15 15.3284 15 14.5C15 13.6716 15.6716 13 16.5 13C17.3284 13 18 13.6716 18 14.5Z"
          stroke="currentColor"
          strokeWidth="null"
          className="my-path"
        ></path>
      </svg>
    ),
  },

];


export const DashboardSideMenu = () => {
  return (
    <div className="w-full flex-col flex justify-between ">
      <div className="w-full flex-col gap-1 flex mt-8">
        {data.map((item, index) => (
          <div key={index} className="w-full">
            <NavLink
            onClick={() =>console.log("testing")}
              to={item.link}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#D92027" : "#FFFFFF",
                  background: isActive ? "#FFFFFF" : "#D92027",
                };
              }}
              className={`cursor-pointer flex py-3 px-3 items-center gap-3 no-underline bg-slate-300`}
            >
              <div
                className="relative">
                {item.icon}
              </div>
              {item.title}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

