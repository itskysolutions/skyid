import { AddNew } from "../pages/AddNew";
import { UploadNew } from "../pages/UploadNew";
import { BuyNew } from "../pages/BuyNew";

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
                  <th
                    scope="col"
                    className="p-4 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                  >
                    {" "}
                    Date{" "}
                  </th>
                  <th
                    scope="col"
                    className="p-3 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                  >
                    {" "}
                    Action{" "}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 ">
                {Data.length > 0 ? (
                  Data.map((item, index) => (
                    <tr key={index} className="bg-white transition-all duration-500 hover:bg-gray-50">
                      <td className="">
                        <div className="flex items-center py-3 px-3 ">
                          <p className="text-left whitespace-nowrap text-sm leading-6 font-medium text-gray-900 capitalize">
                            {item.Number}
                          </p>
                        </div>
                    </td>
                    <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                      {item.IVRstatus}
                    </td>
                    <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                      {item.IVMstatus}
                    </td>
                    <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">{item.Date.toLocaleDateString()}</td>
                    <td className="flex pt-3 items-center gap-0.5">
                        {item.IVMstatus === "Awaiting IVM" && item.IVRstatus === "Awaiting IVR" ? (
                           <div className=""><AddNew/></div>
                          //  <AddNew/>
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
                  <td colSpan={3} className= " text-gray-500 py-4 flex justify-center items-center">
                    <div className="flex flex-col items-center">
                      <div className="mb-2">
                        <svg width="200px" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C4.06 15 3.19 15.33 2.5 15.88V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path opacity="0.4" d="M2.5 12.4098V7.83986C2.5 6.64986 3.23 5.58982 4.34 5.16982L12.28 2.16982C13.52 1.69982 14.85 2.61985 14.85 3.94985V7.74983" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M22.5608 13.9702V16.0302C22.5608 16.5802 22.1208 17.0302 21.5608 17.0502H19.6008C18.5208 17.0502 17.5308 16.2602 17.4408 15.1802C17.3808 14.5502 17.6208 13.9602 18.0408 13.5502C18.4108 13.1702 18.9208 12.9502 19.4808 12.9502H21.5608C22.1208 12.9702 22.5608 13.4202 22.5608 13.9702Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path opacity="0.4" d="M7 12H14" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M9 19C9 19.75 8.79 20.46 8.42 21.06C8.21 21.42 7.94 21.74 7.63 22C6.93 22.63 6.01 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 17.74 1.58 16.61 2.5 15.88C3.19 15.33 4.06 15 5 15C7.21 15 9 16.79 9 19Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M6.06922 20.0402L3.94922 17.9302" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M6.04969 17.96L3.92969 20.0699" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-xl text-gray-500">No Records Found</p>
                    </div>
                  </td>
                </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div >
            <nav className="flex items-center justify-start py-4 " aria-label="Table navigation">
              <ul className="flex items-center justify-center text-sm h-auto gap-12">
                <li>
                  <a
                    href="javascript:;"
                    className="flex items-center justify-center gap-2 px-3 h-8 ml-0 text-gray-500 bg-white font-medium text-base leading-7  hover:text-gray-700 "
                  >
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.0002 14.9999L8 9.99967L13.0032 4.99652"
                        stroke="black"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>{" "}
                    Back{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="flex items-center justify-center gap-2 px-3 h-8 ml-0 text-gray-500 bg-white font-medium text-base leading-7  hover:text-gray-700 "
                  >
                    {" "}
                    Next{" "}
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.00295 4.99646L13.0032 9.99666L8 14.9998"
                        stroke="black"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
        </div>
      </div>
    </div>
);
};
