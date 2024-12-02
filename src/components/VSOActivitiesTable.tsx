import { useState } from "react";

interface VSOTableDataItem {
  Date: string;
  ActivityType: string;
  NumbersSold: number;
  ApprovalStatus: string;
  TotalSales: number;
}

interface VSOTableProps {
  Data: VSOTableDataItem[];
}

export const VSOActivitiesTable = ({ Data }: VSOTableProps) => {
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
      <div className="overflow-x-auto pb-4">
        <div className="overflow-x-auto w-full border rounded-sm border-gray-300">
          <table className="w-full table-auto border-collapse rounded-sm">
            <thead>
              <tr className="bg-gray-100">
                {["Date", "Activity Type", "Numbers Sold", "Approval Status", "Total Sales"].map((header, idx) => (
                  <th
                    key={idx}
                    scope="col"
                    className="py-3 px-4 text-left text-sm font-semibold text-gray-900 capitalize"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
            {currentData.length > 0 ? (
                currentData.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white transition-all duration-300 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 text-sm text-gray-900 capitalize">
                      {item.Date}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {item.ActivityType}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {item.NumbersSold}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <span
                        className={`font-medium text-xs ${
                          item.ApprovalStatus === "Completed"
                            ? "text-emerald-600"
                            : item.ApprovalStatus === "Failed"
                            ? "text-red-600"
                            : "text-amber-600"
                        }`}
                      >
                        {item.ApprovalStatus}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {item.TotalSales}
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
