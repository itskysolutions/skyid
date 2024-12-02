import { AddNew } from "../pages/AddNew";
import { UploadNew } from "../pages/UploadNew";
import { BuyNew } from "../pages/BuyNew";
import { useState } from "react";

interface TableDataItem {
    Number: string;
    IVRstatus: string;
    IVMstatus: string;
    Date: Date;
  };

  interface TableProps {
    Data: TableDataItem[];  // Expecting an array of TableDataItem
  }


export const AddOnsTable = ({ Data }: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    // Calculate total pages
    const totalPages = Math.ceil(Data.length / rowsPerPage);

    // Get current page data
    const currentData = Data.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handleNext = () => {
        if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        }
    };

    const handleBack = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

  return (
    <div className="flex flex-col">
      <div className=" overflow-x-auto pb-4">
        <div className="block">
          <div className="overflow-x-auto w-full  border rounded-sm border-gray-300">
            <table className="w-full rounded-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="">
                    <div className="flex items-center py-3 px-3 ">
                      <p className="text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">
                        Number
                      </p>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="p-3 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                  >
                    {" "}
                    IVR Status{" "}
                  </th>
                  <th
                    scope="col"
                    className=" text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                  >
                    {" "}
                    IVM Status{" "}
                  </th>
                  {/* <th
                    scope="col"
                    className="p-4 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                  >
                    {" "}
                    Date{" "}
                  </th> */}
                  <th
                    scope="col"
                    className="p-3 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                  >
                    {" "}
                    Action{" "}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
              {currentData.length > 0 ? (
                currentData.map((item, index) => (
                    <tr key={index} className="bg-white transition-all duration-500 hover:bg-gray-50">
                      <td className="">
                        <div className="flex items-center py-3 px-3 ">
                          <p className="text-left whitespace-nowrap text-sm leading-6 font-medium text-gray-900 capitalize">
                            {item.Number}
                          </p>
                        </div>
                    </td>
                    <td className="p-1 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                      <div
                        className={` 
                      rounded-full flex justify-center w-20 items-center gap-1`}
                      >
                        <span
                          className={`font-medium text-xs ${
                            item.IVRstatus === "Awaiting IVR"
                              ? "text-amber-600 "
                              : item.IVRstatus === "IVR Added"
                              ? "text-green-600"
                              : ""
                          }`}
                        >
                          { item.IVRstatus}
                        </span>
                      </div>
                    </td>
                    <td className="p-1 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                      <div
                        className={` 
                      rounded-full flex justify-center w-20 items-center gap-1`}
                      >
                        <span
                          className={`font-medium text-xs ${
                            item.IVMstatus === "Awaiting IVM"
                              ? "text-amber-600 "
                              : item.IVMstatus === "IVM Added"
                              ? "text-green-600"
                              : ""
                          }`}
                        >
                         {item.IVMstatus}
                        </span>
                      </div>
                    </td>
                    {/* <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">{item.Date.toLocaleDateString()}</td> */}
                    <td className="flex pt-3 items-center gap-0.5">
                        {item.IVMstatus === "Awaiting IVM" && item.IVRstatus === "Awaiting IVR" ? (
                           <div className=""><AddNew/></div>
                        ) : item.IVMstatus === "IVM Added" && item.IVRstatus === "IVR Added" ? (
                          <div style={{display:"flex"}}>
                           <div className=""><UploadNew/></div>
                        </div>
                        ) : (
                          <div> <BuyNew/></div>
                        )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                <td
                  colSpan={7}
                  className="text-gray-500 py-4 text-center"
                >
                  <div className="flex flex-col items-center">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C4.06 15 3.19 15.33 2.5 15.88V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-xl mt-2">No Records Found</p>
                  </div>
                </td>
              </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
       {/* Pagination */}
       <div className="flex justify-start py-4">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <button
                onClick={handleBack}
                disabled={currentPage === 1}
                className={`flex items-center px-3 py-2 ${
                  currentPage === 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                aria-label="Previous page"
              >
                <svg
                  width="21"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0002 14.9999L8 9.99967L13.0032 4.99652"
                    stroke="black"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back
              </button>
            </li>
            <li>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`flex items-center px-3 py-2 ${
                  currentPage === totalPages
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                aria-label="Next page"
              >
                Next
                <svg
                  width="21"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00295 4.99646L13.0032 9.99666L8 14.9998"
                    stroke="black"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
